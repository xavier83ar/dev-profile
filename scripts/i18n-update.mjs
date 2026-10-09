/**
 * Merge the gettext template into each language catalog.
 *
 *   npm run i18n:update
 *
 * The msgmerge step of the GNU workflow, run after `npm run i18n:extract`.
 * For every language in LANGUAGES, `src/locales/<lang>.po` is created if it is
 * missing, then brought in line with `messages.pot`:
 *
 *   · an entry whose msgid is unchanged keeps its translation;
 *   · a new msgid close enough to one that disappeared inherits that
 *     translation, flagged `fuzzy` with the old msgid as `#|` — the usual case
 *     when a sentence in `src/data/` is reworded. Fuzzy entries are not shipped
 *     until a translator reviews them and drops the flag;
 *   · anything left over is kept as an obsolete `#~` entry, never deleted;
 *   · a plural entry whose number of forms no longer matches `Plural-Forms`
 *     is resized and flagged `fuzzy`, so the new form gets translated.
 *
 * Source references (`#:`) always come from the template; translator comments
 * and flags from the catalog.
 */

import { po } from "gettext-parser";
import { readFile, writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

/**
 * Plural rules follow CLDR rather than the older GNU gettext tables, which give
 * Spanish two forms. CLDR has three: one (1 año), many (exact multiples of a
 * million, which take "de": 1000000 de años) and other (0 años, 254 años).
 * https://www.unicode.org/cldr/charts/48/supplemental/language_plural_rules.html#es
 */
const LANGUAGES = {
  es: {
    team: "Spanish",
    pluralForms: "nplurals=3; plural=(n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2);",
  },
};

/** Below this similarity a reworded msgid counts as new rather than fuzzy. */
const FUZZY_THRESHOLD = 0.7;

const dir = fileURLToPath(new URL("../src/locales/", import.meta.url));
const template = po.parse(await readFile(`${dir}messages.pot`));

const keyOf = (entry) => `${entry.msgctxt ?? ""}\u0004${entry.msgid}`;
const isTranslated = (entry) => entry.msgstr.some(Boolean);

function* entriesOf(record = {}) {
  for (const entries of Object.values(record)) {
    for (const entry of Object.values(entries)) if (entry.msgid) yield entry;
  }
}

/** Dice coefficient over character bigrams: 1 for identical, 0 for nothing shared. */
function similarity(a, b) {
  const bigrams = (text) => {
    const counts = new Map();
    for (let i = 0; i < text.length - 1; i++) {
      const pair = text.slice(i, i + 2);
      counts.set(pair, (counts.get(pair) ?? 0) + 1);
    }
    return counts;
  };
  const left = bigrams(a);
  const right = bigrams(b);
  let shared = 0;
  for (const [pair, count] of left) shared += Math.min(count, right.get(pair) ?? 0);
  const total = a.length + b.length - 2;
  return total > 0 ? (2 * shared) / total : 0;
}

function withFlag(flags, flag) {
  const list = (flags ?? "").split(",").map((f) => f.trim()).filter(Boolean);
  if (!list.includes(flag)) list.unshift(flag);
  return list.join(", ");
}

function insert(record, entry) {
  const context = entry.msgctxt ?? "";
  (record[context] ??= {})[entry.msgid] = entry;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

for (const [lang, { team, pluralForms }] of Object.entries(LANGUAGES)) {
  const path = `${dir}${lang}.po`;
  const catalog = (await exists(path))
    ? po.parse(await readFile(path))
    : { charset: "utf-8", headers: {}, translations: {} };

  catalog.headers = {
    "Project-Id-Version": "dev-profile",
    "Language-Team": team,
    "Content-Type": "text/plain; charset=UTF-8",
    "Content-Transfer-Encoding": "8bit",
    ...catalog.headers,
    Language: lang,
    "Plural-Forms": pluralForms,
  };
  const nplurals = Number(/nplurals\s*=\s*(\d+)/.exec(pluralForms)[1]);

  const previous = new Map();
  for (const entry of [...entriesOf(catalog.translations), ...entriesOf(catalog.obsolete)]) {
    previous.set(keyOf(entry), entry);
  }
  const unused = new Map([...previous].filter(([, entry]) => isTranslated(entry)));

  const translations = { "": { "": { msgid: "", msgstr: [""] } } };
  const stats = { kept: 0, fuzzy: 0, resized: 0, new: 0, obsolete: 0 };

  for (const source of entriesOf(template.translations)) {
    const entry = {
      ...(source.msgctxt ? { msgctxt: source.msgctxt } : {}),
      msgid: source.msgid,
      ...(source.msgid_plural ? { msgid_plural: source.msgid_plural } : {}),
      msgstr: Array(source.msgid_plural ? nplurals : 1).fill(""),
      comments: { ...source.comments },
    };

    const exact = previous.get(keyOf(source));
    const samePluralShape = exact && Boolean(exact.msgid_plural) === Boolean(source.msgid_plural);

    if (exact && samePluralShape) {
      entry.msgstr = exact.msgstr;
      if (exact.comments?.translator) entry.comments.translator = exact.comments.translator;
      if (exact.comments?.flag) entry.comments.flag = exact.comments.flag;
      if (exact.comments?.previous) entry.comments.previous = exact.comments.previous;
      unused.delete(keyOf(source));
      stats.kept++;
    } else {
      let best = null;
      let bestScore = FUZZY_THRESHOLD;
      for (const candidate of unused.values()) {
        if ((candidate.msgctxt ?? "") !== (source.msgctxt ?? "")) continue;
        if (Boolean(candidate.msgid_plural) !== Boolean(source.msgid_plural)) continue;
        const score = similarity(candidate.msgid, source.msgid);
        if (score >= bestScore) [best, bestScore] = [candidate, score];
      }

      if (best) {
        entry.msgstr = best.msgstr;
        entry.comments.flag = withFlag(best.comments?.flag, "fuzzy");
        entry.comments.previous = `msgid ${JSON.stringify(best.msgid)}`;
        if (best.comments?.translator) entry.comments.translator = best.comments.translator;
        unused.delete(keyOf(best));
        stats.fuzzy++;
      } else {
        stats.new++;
      }
    }

    if (entry.msgid_plural && isTranslated(entry) && entry.msgstr.length !== nplurals) {
      entry.msgstr = Array.from({ length: nplurals }, (_, i) => entry.msgstr[i] ?? "");
      entry.comments.flag = withFlag(entry.comments.flag, "fuzzy");
      stats.resized++;
    }

    insert(translations, entry);
  }

  const obsolete = {};
  for (const entry of unused.values()) {
    const { reference: _reference, ...comments } = entry.comments ?? {};
    insert(obsolete, { ...entry, comments });
    stats.obsolete++;
  }

  catalog.translations = translations;
  catalog.obsolete = obsolete;
  await writeFile(path, po.compile(catalog));

  const total = stats.kept + stats.fuzzy + stats.new;
  const done = [...entriesOf(translations)].filter(
    (e) => isTranslated(e) && !e.comments?.flag?.includes("fuzzy"),
  ).length;
  console.log(
    `${lang}.po: ${done}/${total} translated · ${stats.fuzzy + stats.resized} newly fuzzy · ` +
      `${stats.new} new · ${stats.obsolete} obsolete`,
  );
}

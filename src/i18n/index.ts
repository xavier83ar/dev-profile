import i18n, { type GettextJson } from "gettext.js";
import { ref } from "vue";

/**
 * Translations, GNU gettext style.
 *
 * The English text is the msgid, so English needs no catalog: an untranslated
 * string simply renders as written. Other languages live in `src/locales/*.po`,
 * extracted with `npm run i18n:extract` and merged with `npm run i18n:update`.
 *
 * gettext.js itself is not reactive, so every helper below reads `locale`
 * first. That read is what makes Vue re-render a template when the language
 * changes.
 */

export type Locale = "en" | "es";

export const DEFAULT_LOCALE: Locale = "en";

/** Every supported language, labelled in its own language. */
export const LOCALES: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/** Loaded on demand, so English visitors never download a catalog. */
const CATALOGS: Record<Exclude<Locale, "en">, () => Promise<{ default: GettextJson }>> = {
  es: () => import("@/locales/es.po"),
};

const gettext = i18n({ locale: DEFAULT_LOCALE });
const loaded = new Set<Locale>([DEFAULT_LOCALE]);

export const locale = ref<Locale>(DEFAULT_LOCALE);

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && value in LOCALES;
}

export async function setLocale(next: Locale): Promise<void> {
  if (next !== "en" && !loaded.has(next)) {
    const { default: catalog } = await CATALOGS[next]();
    // loadJSON strips the "" header entry from what it is given; hand it a copy.
    gettext.loadJSON({ ...catalog });
    loaded.add(next);
  }
  gettext.setLocale(next);
  locale.value = next;
}

/** gettext: `__("Hello %1", name)`. */
export function __(msgid: string, ...args: unknown[]): string {
  void locale.value;
  return gettext.gettext(msgid, ...args);
}

/** ngettext: `_n("%1 year", "%1 years", n, n)`. */
export function _n(msgid: string, msgidPlural: string, n: number, ...args: unknown[]): string {
  void locale.value;
  return gettext.ngettext(msgid, msgidPlural, n, ...args);
}

/** pgettext: `_p("month", "May")`, for a msgid that is ambiguous on its own. */
export function _p(msgctxt: string, msgid: string, ...args: unknown[]): string {
  void locale.value;
  return gettext.pgettext(msgctxt, msgid, ...args);
}

/**
 * Joins already-translated sentences into a paragraph.
 *
 * Prose is written as one `__()` per sentence, so rewording a sentence
 * invalidates that sentence in the catalogs rather than its whole paragraph.
 */
export function paragraph(...sentences: string[]): string {
  return sentences.join(" ");
}

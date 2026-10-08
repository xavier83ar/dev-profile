import { po } from "gettext-parser";
import type { Plugin } from "vite";

const CONTEXT_DELIMITER = "\u0004";

/**
 * Lets the app `import catalog from "./es.po"`.
 *
 * Each `.po` file is compiled, at build time, into the JSON gettext.js loads —
 * the same shape its own `po2json-gettextjs` writes — so the catalog stays the
 * single source and no generated JSON is committed. As with `msgfmt`, fuzzy and
 * empty entries are left out: the English msgid renders in their place.
 */
export default function poLoader(): Plugin {
  return {
    name: "po-loader",
    transform(source, id) {
      if (!id.endsWith(".po")) return null;

      const parsed = po.parse(source);
      const json: Record<string, unknown> = {
        "": {
          language: parsed.headers["Language"],
          "plural-forms": parsed.headers["Plural-Forms"],
        },
      };

      for (const [context, entries] of Object.entries(parsed.translations)) {
        for (const entry of Object.values(entries)) {
          if (!entry.msgid) continue;
          if (entry.comments?.flag?.includes("fuzzy")) continue;
          if (!entry.msgstr.some(Boolean)) continue;

          const key = context ? `${context}${CONTEXT_DELIMITER}${entry.msgid}` : entry.msgid;
          json[key] = entry.msgid_plural ? entry.msgstr : entry.msgstr[0];
        }
      }

      return { code: `export default ${JSON.stringify(json)};`, map: null };
    },
  };
}

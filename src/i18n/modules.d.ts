/**
 * gettext.js ships no type declarations; this covers the part of its API the
 * site uses. Placeholders are positional, gettext.js style: "%1", "%2"…
 */
declare module "gettext.js" {
  /** The JSON shape gettext.js loads: headers under "", then msgid → msgstr. */
  export type GettextJson = {
    "": { language: string; "plural-forms": string };
  } & Record<string, unknown>;

  export interface Gettext {
    setLocale(locale: string): Gettext;
    getLocale(): string;
    loadJSON(json: GettextJson, domain?: string): Gettext;
    gettext(msgid: string, ...args: unknown[]): string;
    ngettext(msgid: string, msgidPlural: string, n: number, ...args: unknown[]): string;
    pgettext(msgctxt: string, msgid: string, ...args: unknown[]): string;
  }

  export default function i18n(options?: { locale?: string; domain?: string }): Gettext;
}

/** `.po` catalogs are compiled to gettext.js JSON at build time — see scripts/vite-plugin-po.ts. */
declare module "*.po" {
  import type { GettextJson } from "gettext.js";
  const catalog: GettextJson;
  export default catalog;
}

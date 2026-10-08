/**
 * The shape of the profile.
 *
 * `profile.ts` and `projects.ts` are the only places content lives. Components
 * render these structures; they never contain sentences of their own.
 *
 * Text is written in English and marked with `N_()` for translation; anything
 * left unmarked (product names, technologies) renders as is in every language.
 * Prose longer than a sentence is `Sentences`: one msgid per sentence.
 */

import type { Sentences } from "@/i18n";

/** Glyphs available in Icon.vue. */
export type IconName =
  | "github"
  | "linkedin"
  | "email"
  | "phone"
  | "claude"
  | "vue"
  | "tailwind"
  | "company";

export type Link = {
  /** Shown as the link text. Printed in full in the PDF. */
  label: string;
  url: string;
  /** Optional glyph shown before the label. Screen only. */
  icon?: IconName;
};

export type SkillGroup = {
  group: string;
  /**
   * Ordered most-relevant-first. Recruiters and keyword scans read the opening
   * items of each group, so lead with what you want to be hired for.
   */
  items: string[];
};

/** A single title held within a company, for companies with more than one. */
export type Role = {
  title: string;
  /** "YYYY-MM" for sorting and for the printed range. */
  start: string;
  /** "YYYY-MM", or null while current. */
  end: string | null;
  /** Context specific to this title, where it differs from the company summary. */
  summary?: string;
  /**
   * Achievement bullets, each carrying a result. Older roles may have none —
   * the further back it is, the less space it earns.
   */
  highlights?: string[];
};

export type Experience = {
  company: string;
  /** e.g. "Remote — US company" */
  location: string;
  /** One or two sentences of context: what the company does, what you owned. */
  summary: Sentences;
  highlights?: string[];
  stack?: string[];
  /** Most recent first. A company with one title has a single entry here. */
  roles: Role[];
  /** Relative path of a logo image in `public/`, resolved against the site base. */
  logo?: string;
};

export type Project = {
  name: string;
  description: string;
  /** What you did, where that isn't obvious from the description. */
  role?: string;
  stack: string[];
  url?: string;
  repo?: string;
  highlights?: string[];
};

export type Education = {
  institution: string;
  qualification: string;
  location?: string;
  period?: string;
  /** Context a non-local reader needs — e.g. what the qualification maps to. */
  detail?: string;
};

export type Language = {
  name: string;
  level: string;
  /** Evidence for the level, rather than a self-assessed label alone. */
  detail?: string;
};

export type Profile = {
  name: string;
  /** The headline title — the strongest positioning signal on the page. */
  title: string;
  /** The pitch, in roughly fifteen words. */
  tagline: Sentences;
  location: string;
  /**
   * Filename of a square portrait in `public/`, resolved against the site base.
   * Screen only — it is deliberately kept off the CV, where a photo invites
   * the bias that US hiring convention exists to avoid.
   */
  photo?: string;
  /** Stated explicitly: for a remote hire outside the US it is a selling point. */
  timezone: string;
  /** Availability and engagement model. */
  availability: string;
  email: string;
  phone?: string;
  links: Link[];
  /** Three or four sentences, for a hiring manager skimming in eight seconds. */
  summary: Sentences[];
  skills: {
    description: Sentences;
    groups: SkillGroup[];
  };
  /**
   * How AI fits into daily work and shipped features — one or two short
   * paragraphs, rendered directly under Skills.
   */
  ai: Sentences[];
  /** Most recent first. */
  experience: Experience[];
  education: Education[];
  languages: Language[];
};

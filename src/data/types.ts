/**
 * The shape of the profile.
 *
 * `profile.ts` and `projects.ts` are the only places content lives. Components
 * render these structures; they never contain sentences of their own.
 */

/** Glyphs available in Icon.vue. */
export type IconName =
  | "github"
  | "linkedin"
  | "email"
  | "phone"
  | "claude"
  | "vue"
  | "tailwind";

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

export type Role = {
  company: string;
  title: string;
  /** e.g. "Remote — US company" */
  location: string;
  /** "YYYY-MM" for sorting and for the printed range. */
  start: string;
  /** "YYYY-MM", or null while current. */
  end: string | null;
  /** One or two sentences of context: what the company does, what you owned. */
  summary: string;
  /**
   * Achievement bullets, each carrying a result. Older roles may have none —
   * the further back it is, the less space it earns.
   */
  highlights?: string[];
  stack?: string[];
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
  tagline: string;
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
  summary: string[];
  skills: {
    description: string;
    groups: SkillGroup[];
  };
  /** Most recent first. */
  experience: Role[];
  education: Education[];
  languages: Language[];
};

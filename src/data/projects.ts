import { computed } from "vue";
import { __ } from "@/i18n";
import type { Project } from "./types";

/** Portfolio content, translated with the active locale and excluded from the CV PDF. */
export const projects = computed<Project[]>(() => [
  {
    name: __("Recruitment consultancy website and management application"),
    description: __("Public website and application for managing job openings, applicants, profiles and CVs, job applications, and recruitment and candidate searches."),
    role: __("Linked Comunicaciones · June 2012"),
    stack: []
  }
]);

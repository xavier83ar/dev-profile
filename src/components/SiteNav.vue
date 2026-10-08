<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";
import { useLocale } from "@/composables/useLocale";
import { LOCALES } from "@/i18n";

defineProps<{ current: "profile" | "projects" }>();

const { theme, ready, toggle } = useTheme();
const { next: nextLocale, toggle: toggleLocale } = useLocale();

const base = import.meta.env.BASE_URL;
</script>

<template>
  <nav class="no-print sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
    <div class="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
      <div class="flex items-center gap-1 text-sm">
        <a
          :href="base"
          :aria-current="current === 'profile' ? 'page' : undefined"
          class="rounded-md px-2.5 py-1.5 transition"
          :class="
            current === 'profile'
              ? 'bg-chip font-medium text-text'
              : 'text-muted hover:text-text'
          "
        >
          Profile
        </a>
        <a
          :href="`${base}projects/`"
          :aria-current="current === 'projects' ? 'page' : undefined"
          class="rounded-md px-2.5 py-1.5 transition"
          :class="
            current === 'projects'
              ? 'bg-chip font-medium text-text'
              : 'text-muted hover:text-text'
          "
        >
          Projects
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          :lang="nextLocale"
          :aria-label="LOCALES[nextLocale]"
          :title="LOCALES[nextLocale]"
          class="rounded-full border border-line px-2.5 py-1.5 text-sm font-medium uppercase text-muted transition hover:text-text"
          @click="toggleLocale"
        >
          {{ nextLocale }}
        </button>

        <button
          type="button"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
          class="rounded-full border border-line px-2.5 py-1.5 text-sm text-muted transition hover:text-text"
          @click="toggle"
        >
          <span aria-hidden="true">{{ ready && theme === "dark" ? "☀" : "☾" }}</span>
        </button>

        <a
          :href="`${base}cv.pdf`"
          download="javier-melero-cv.pdf"
          class="rounded-full bg-accent-deep px-3.5 py-1.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Download CV
        </a>
      </div>
    </div>
  </nav>
</template>

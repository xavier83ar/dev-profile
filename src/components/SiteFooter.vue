<script setup lang="ts">
import Icon from "./Icon.vue";

const REPO_URL = "https://github.com/xavier83ar/dev-profile";
</script>

<template>
  <footer class="hidden print:block mt-20 border-t pt-3 text-sm">
    Check
    <a
        href="https://javiermelero.com.ar/"
        class="underline decoration-line underline-offset-4 transition hover:text-accent-deep hover:decoration-accent"
    >
      https://javiermelero.com.ar/
    </a>
    for an online version of this document.
  </footer>
  <footer class="no-print border-t border-line">
    <div
      class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-10 text-sm text-subtle sm:px-8"
    >
      <span class="inline-flex items-center gap-2">
        Built with
        <a
          href="https://claude.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Claude"
          class="transition hover:text-accent-deep"
        >
          <Icon name="claude" />
        </a>
      </span>

      <span class="inline-flex items-center gap-2">
        Made with
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noreferrer"
          aria-label="Vue.js"
          class="transition hover:text-accent-deep"
        >
          <Icon name="vue" />
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Tailwind CSS"
          class="transition hover:text-accent-deep"
        >
          <Icon name="tailwind" />
        </a>
      </span>

      <span class="inline-flex items-center gap-2">
        Source code
        <a
          :href="REPO_URL"
          target="_blank"
          rel="noreferrer"
          aria-label="Source code on GitHub"
          class="transition hover:text-accent-deep"
        >
          <Icon name="github" />
        </a>
      </span>
    </div>
  </footer>
</template>

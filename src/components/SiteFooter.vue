<script setup lang="ts">
import Icon from "./Icon.vue";

const REPO_URL = "https://github.com/xavier83ar/dev-profile";
</script>

<template>
  <!--
    Screen only — a credits line has nothing to do in a CV. Three groups,
    centred, with generous space between them so they read as separate credits
    rather than one run-on sentence. Icons carry currentColor rather than each
    brand's own colour, matching the muted/no-brand-colour treatment used for
    the contact and social icons elsewhere on the page; each link's name comes
    from aria-label since the icon is the only thing inside the anchor.
  -->
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
        Check source code
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

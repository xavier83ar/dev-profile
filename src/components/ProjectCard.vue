<script setup lang="ts">
import type { Project } from "@/data/types";

defineProps<{ project: Project }>();
</script>

<template>
  <article class="rounded-lg border border-line bg-surface p-5">
    <h3 class="font-semibold">{{ project.name }}</h3>
    <p v-if="project.role" class="mt-0.5 text-sm text-subtle">{{ project.role }}</p>

    <p class="mt-2 leading-relaxed text-muted">{{ project.description }}</p>

    <ul v-if="project.highlights?.length" class="mt-2.5 space-y-1 text-sm text-muted">
      <li
        v-for="highlight in project.highlights"
        :key="highlight"
        class="relative pl-4 before:absolute before:left-0 before:content-['–']"
      >
        {{ highlight }}
      </li>
    </ul>

    <p class="mt-3 text-sm text-subtle">{{ project.stack.join(", ") }}</p>

    <p v-if="project.url || project.repo" class="mt-3 flex flex-wrap gap-4 text-sm">
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noreferrer"
        class="text-accent-deep underline decoration-transparent underline-offset-4 transition hover:decoration-current"
      >
        Live
      </a>
      <a
        v-if="project.repo"
        :href="project.repo"
        target="_blank"
        rel="noreferrer"
        class="text-accent-deep underline decoration-transparent underline-offset-4 transition hover:decoration-current"
      >
        Source
      </a>
    </p>
  </article>
</template>

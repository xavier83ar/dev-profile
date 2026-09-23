<script setup lang="ts">
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import SiteNav from "@/components/SiteNav.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import SiteFooter from "@/components/SiteFooter.vue";

const githubLink = profile.links.find((link) => link.url.includes("github.com"));
const base = import.meta.env.BASE_URL;
</script>

<template>
  <SiteNav current="projects" />

  <main class="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-8 sm:pt-16">
    <header>
      <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
      <p class="mt-3 max-w-2xl leading-relaxed text-muted">
        Selected work and open-source components. Employer and client work is
        described on the
        <a
          :href="base"
          class="underline decoration-line underline-offset-4 transition hover:decoration-accent"
          >profile page</a
        >; what follows is what I can point at directly.
      </p>
    </header>

    <div v-if="projects.length" class="mt-10 grid gap-5 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>

    <!-- Empty state: the page ships before the content does. -->
    <div
      v-else
      class="mt-10 rounded-lg border border-dashed border-line px-6 py-12 text-center"
    >
      <p class="font-medium">Being written up.</p>
      <p class="mx-auto mt-2 max-w-md leading-relaxed text-muted">
        I am putting these together properly rather than posting a list of
        repository names. In the meantime, the code is public.
      </p>
      <a
        v-if="githubLink"
        :href="githubLink.url"
        target="_blank"
        rel="noreferrer"
        class="mt-5 inline-block rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent-deep"
      >
        {{ githubLink.label }}
      </a>
    </div>
  </main>

  <SiteFooter />
</template>

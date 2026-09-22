<script setup lang="ts">
import type { Profile } from "@/data/types";
import Icon from "./Icon.vue";

defineProps<{ profile: Profile }>();

const base = import.meta.env.BASE_URL;
</script>

<template>
  <header class="print-keep">
    <div class="flex items-center gap-4 sm:gap-5">
      <!--
        Screen only. On the CV a photo reveals age, race and gender before a
        word is read, which is why US hiring convention omits it and why some
        recruiters discard résumés that carry one.

        Eager, not lazy: it is above the fold and a likely LCP element, so
        deferring it would delay the metric rather than help it. Intrinsic
        dimensions are declared even though CSS fixes the box, so the space is
        reserved if the file is slow or missing.
      -->
      <img
        v-if="profile.photo"
        :src="`${base}${profile.photo}`"
        alt=""
        width="400"
        height="400"
        decoding="async"
        class="no-print size-20 shrink-0 rounded-full object-cover ring-1 ring-line sm:size-24"
      />
      <div>
        <h1 class="text-4xl font-semibold tracking-tight sm:text-[2.75rem]">
          {{ profile.name }}
        </h1>
        <p class="mt-1 text-lg font-medium text-accent-deep sm:text-xl">
          {{ profile.title }}
        </p>
      </div>
    </div>
    <p class="print-hide mt-3 max-w-2xl leading-relaxed text-muted">{{ profile.tagline }}</p>

    <dl class="mt-5 space-y-1 text-sm">
      <div class="flex flex-wrap items-baseline gap-x-2">
        <dt class="sr-only">Location</dt>
        <dd class="text-muted">{{ profile.location }}</dd>
        <dd aria-hidden class="text-subtle">·</dd>
        <dt class="sr-only">Timezone</dt>
        <!-- Stated plainly: for a remote hire outside the US this is an asset. -->
        <dd class="font-medium text-text">{{ profile.timezone }}</dd>
      </div>
      <div>
        <dt class="sr-only">Availability</dt>
        <dd class="text-muted">{{ profile.availability }}</dd>
      </div>
    </dl>

    <ul class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
      <li>
        <a
          :href="`mailto:${profile.email}`"
          class="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 transition hover:text-accent-deep hover:decoration-accent"
        >
          <Icon name="email" />
          {{ profile.email }}
        </a>
      </li>
      <li v-if="profile.phone">
        <a
          :href="`tel:${profile.phone.replace(/\s/g, '')}`"
          class="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 transition hover:text-accent-deep hover:decoration-accent"
        >
          <Icon name="phone" />
          {{ profile.phone }}
        </a>
      </li>
      <li v-for="link in profile.links" :key="link.url">
        <a
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 transition hover:text-accent-deep hover:decoration-accent"
        >
          <Icon v-if="link.icon" :name="link.icon" />
          {{ link.label }}
        </a>
      </li>
    </ul>
  </header>
</template>

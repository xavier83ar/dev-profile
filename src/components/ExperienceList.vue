<script setup lang="ts">
import type { Role } from "@/data/types";
import { formatDuration, formatRange } from "@/lib/dates";

defineProps<{ roles: Role[] }>();
</script>

<template>
  <div class="print-compact space-y-8">
    <article
      v-for="role in roles"
      :key="`${role.company}-${role.start}`"
    >
      <div
        class="print-keep flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
      >
        <h3 class="font-semibold leading-snug">
          {{ role.title }}
          <span class="font-normal text-muted"> · {{ role.company }}</span>
        </h3>
        <p class="shrink-0 text-sm text-subtle">
          {{ formatRange(role.start, role.end) }}
          <template v-if="formatDuration(role.start, role.end)">
            · {{ formatDuration(role.start, role.end) }}
          </template>
        </p>
      </div>

      <p class="text-sm text-subtle">{{ role.location }}</p>

      <p class="mt-2.5 max-w-3xl leading-relaxed text-muted">{{ role.summary }}</p>

      <ul v-if="role.highlights?.length" class="mt-2.5 space-y-1.5">
        <li
          v-for="highlight in role.highlights"
          :key="highlight"
          class="relative max-w-3xl pl-4 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
        >
          {{ highlight }}
        </li>
      </ul>

      <p v-if="role.stack?.length" class="print-hide mt-2.5 text-sm text-subtle">
        <span class="font-medium text-muted">Stack: </span>{{ role.stack.join(", ") }}
      </p>
    </article>
  </div>
</template>

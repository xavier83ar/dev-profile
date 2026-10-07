<script setup lang="ts">
import type { Experience } from "@/data/types";
import { formatDuration, formatRange } from "@/lib/dates";
import Icon from "@/components/Icon.vue";

defineProps<{ experience: Experience[] }>();

const base = import.meta.env.BASE_URL;

function companyRange(exp: Experience): string {
  const roles = exp.roles;
  return formatRange(roles[roles.length - 1].start, roles[0].end);
}

function companyDuration(exp: Experience): string | null {
  const roles = exp.roles;
  return formatDuration(roles[roles.length - 1].start, roles[0].end);
}
</script>

<template>
  <div class="print-compact space-y-8">
    <article v-for="exp in experience" :key="exp.company" class="flex gap-3">
      <div class="shrink-0">
        <img
          v-if="exp.logo"
          :src="`${base}${exp.logo}`"
          :alt="`${exp.company} logo`"
          class="no-print size-10 rounded-full border border-line object-cover"
        />
        <div
          v-else
          class="no-print flex size-10 items-center justify-center rounded-full bg-accent-deep text-bg text-lg"
        >
          <Icon name="company" />
        </div>
      </div>

      <div class="min-w-0 flex-1">
        <div
          class="print-keep flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <h3 class="font-semibold leading-snug">
            <template v-if="exp.roles.length === 1">
              {{ exp.roles[0].title }}
              <span class="font-normal text-muted"> · {{ exp.company }}</span>
            </template>
            <template v-else>{{ exp.company }}</template>
          </h3>
          <p class="shrink-0 text-sm text-subtle">
            {{ companyRange(exp) }}
            <template v-if="companyDuration(exp)"> · {{ companyDuration(exp) }} </template>
          </p>
        </div>

        <p class="text-sm text-subtle">{{ exp.location }}</p>

        <p class="mt-2.5 max-w-3xl leading-relaxed text-muted">{{ exp.summary }}</p>

        <ul v-if="exp.highlights?.length" class="mt-2.5 space-y-1.5">
          <li
            v-for="highlight in exp.highlights"
            :key="highlight"
            class="relative max-w-3xl pl-4 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
          >
            {{ highlight }}
          </li>
        </ul>

        <p v-if="exp.stack?.length" class="print-hide mt-2.5 text-sm text-subtle">
          <span class="font-medium text-muted">Skills: </span>{{ exp.stack.join(", ") }}
        </p>

        <div v-if="exp.roles.length > 1" class="mt-4 space-y-4 border-l border-line pl-4">
          <div v-for="role in exp.roles" :key="`${role.title}-${role.start}`" class="relative">
            <span
              class="absolute -left-5 top-1.5 size-2 rounded-full border-2 border-bg bg-accent"
            ></span>
            <div
              class="print-keep flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <h4 class="font-medium leading-snug text-text">{{ role.title }}</h4>
              <p class="shrink-0 text-sm text-subtle">
                {{ formatRange(role.start, role.end) }}
                <template v-if="formatDuration(role.start, role.end)">
                  · {{ formatDuration(role.start, role.end) }}
                </template>
              </p>
            </div>

            <p v-if="role.summary" class="mt-1 max-w-3xl text-sm leading-relaxed text-muted">
              {{ role.summary }}
            </p>

            <div v-if="role.highlights?.length" class="mt-1.5 space-y-1.5">
              <p
                v-for="highlight in role.highlights"
                :key="highlight"
                class="relative max-w-3xl text-sm leading-relaxed text-muted"
              >
                {{ highlight }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

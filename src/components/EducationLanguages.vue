<script setup lang="ts">
import type { Education, Language } from "@/data/types";

defineProps<{ education: Education[]; languages: Language[] }>();
</script>

<template>
  <div class="print-stack grid gap-8 sm:grid-cols-2">
    <div>
      <h3 class="mb-3 text-sm font-semibold">Education</h3>
      <ul class="space-y-3">
        <li v-for="item in education" :key="item.qualification" class="print-entry print-keep">
          <p class="font-medium leading-snug">{{ item.qualification }}</p>
          <p class="text-sm text-muted">{{ item.institution }}</p>
          <p v-if="item.period" class="text-sm text-subtle">{{ item.period }}</p>
          <p v-if="item.detail" class="mt-0.5 text-sm text-muted">{{ item.detail }}</p>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="mb-3 text-sm font-semibold">Languages</h3>
      <ul class="space-y-3">
        <li v-for="language in languages" :key="language.name" class="print-entry print-keep">
          <p class="text-sm">
            <span class="font-medium">{{ language.name }}</span>
            <span> — {{ language.level }}</span>
          </p>
          <p v-if="language.detail" class="mt-0.5 text-sm text-muted">
            {{ language.detail }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

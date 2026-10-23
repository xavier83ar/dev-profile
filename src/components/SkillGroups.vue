<script setup lang="ts">
import type { SkillGroup } from "@/data/types";

defineProps<{ description: string; groups: SkillGroup[] }>();
</script>

<template>
  <div class="skill-groups print-compact">
    <p class="max-w-3xl leading-relaxed text-muted mb-3">{{ description }}</p>
    <div
      v-for="(group, index) in groups"
      :key="index"
      class="skill-group print-keep print-row"
    >
      <h3 class="pt-1 text-sm font-semibold"><span class="skill-group-number no-print">0{{ index + 1 }}</span>{{ group.group }}</h3>
      <ul class="print-inline-list flex flex-wrap gap-1.5">
        <li
          v-for="(item, index) in group.items"
          :key="index"
          class="rounded-md bg-chip px-2 py-0.5 text-sm text-muted"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

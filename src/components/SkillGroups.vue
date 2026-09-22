<script setup lang="ts">
import type { SkillGroup } from "@/data/types";

defineProps<{ groups: SkillGroup[] }>();
</script>

<template>
  <div class="print-compact space-y-3.5">
    <div
      v-for="group in groups"
      :key="group.group"
      class="print-keep print-row grid gap-1.5 sm:grid-cols-[11rem_1fr] sm:gap-4"
    >
      <h3 class="pt-1 text-sm font-semibold">{{ group.group }}</h3>
      <!-- Chips on screen; a comma-separated line in print, which parsers read. -->
      <ul class="print-inline-list flex flex-wrap gap-1.5">
        <li
          v-for="item in group.items"
          :key="item"
          class="rounded-md bg-chip px-2 py-0.5 text-sm text-muted"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

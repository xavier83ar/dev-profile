<script setup lang="ts">
import type { GraphicIconName } from "@/data/types";
defineProps<{ name: GraphicIconName }>();
const paths: Partial<Record<GraphicIconName, string>> = {
  code: 'm8 5-7 7 7 7m8-14 7 7-7 7M14 2l-4 20',
  layers: 'm12 2 10 5-10 5L2 7Zm-10 10 10 5 10-5M2 17l10 5 10-5',
  database: 'M3 6v12c0 5 18 5 18 0V6M3 12c0 5 18 5 18 0',
  leadership: 'M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM1 22v-3a7 7 0 0 1 14 0v3m2-17a4 4 0 0 1 0 8m1 3a6 6 0 0 1 5 6',
  profile: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3 23v-3a9 9 0 0 1 18 0v3',
  sparkles: 'm12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5ZM21 1v5m-2.5-2.5h5',
  experience: 'M3 7h18v14H3ZM8 7V3h8v4M3 12l9 3 9-3M12 12v5',
  education: 'm1 8 11-6 11 6-11 6ZM5 11v7c4 4 10 4 14 0v-7m4-3v12',
  node: 'm12 1 10 5.5v11L12 23 2 17.5v-11ZM8 16V8l8 8V8',
  nest: 'M4 17c-3-8 2-14 8-14 6 0 10 5 9 11-1 6-7 9-13 7m-3-4 4-6 5 5 4-7-7-2m1-4 3 4',
};
</script>

<template>
  <svg class="graphic-icon no-print" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <template v-if="name === 'typescript'"><rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" stroke="none"/><path d="M5 9h9m-4.5 0v10m10-9c-5-3-7 3-2 4 5 1 2 7-3 4" stroke="var(--icon-ink, var(--bg))" stroke-width="1.8"/></template>
    <template v-else-if="name === 'react'"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/></template>
    <template v-else-if="name === 'next'"><circle cx="12" cy="12" r="10"/><path d="M8 17V7l12 15M16 7v7"/></template>
    <template v-else-if="name === 'vue'"><path d="m1 3 11 19L23 3h-7l-4 7-4-7ZM6 3l6 10 6-10"/></template>
    <template v-else><path :d="paths[name]"/><ellipse v-if="name === 'database'" cx="12" cy="6" rx="9" ry="4"/></template>
  </svg>
</template>

<script setup lang="ts">
import { formatDuration, formatMonth } from "@/lib/dates";
import { __ } from "@/i18n";
defineProps<{ start: string; end: string | null }>();
</script>

<template>
  <div class="experience-period">
    <span class="period-range">
      <time :datetime="start">{{ formatMonth(start) }}</time>
      <span class="period-arrow" aria-hidden="true">→</span>
      <span class="period-separator"> – </span>
      <time v-if="end" :datetime="end">{{ formatMonth(end) }}</time>
      <span v-else>{{ __('Present') }}</span>
    </span>
    <span v-if="formatDuration(start, end)" class="period-duration">
      <svg class="no-print" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      {{ formatDuration(start, end) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { formatDuration, formatMonth } from "@/lib/dates";
import Icon from "./Icon.vue";
import { __ } from "@/i18n";
defineProps<{ start: string; end: string | null }>();
</script>

<template>
  <div class="experience-period">
    <span class="period-range">
      <time :datetime="start">{{ formatMonth(start) }}</time>
      <Icon class="period-arrow" name="arrow-right" />
      <span class="period-separator"> – </span>
      <time v-if="end" :datetime="end">{{ formatMonth(end) }}</time>
      <span v-else>{{ __('Present') }}</span>
    </span>
    <span v-if="formatDuration(start, end)" class="period-duration">
      <Icon name="clock" />
      {{ formatDuration(start, end) }}
    </span>
  </div>
</template>

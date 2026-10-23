<script setup lang="ts">
import type { IconName } from "@/data/types";
import Icon from "./Icon.vue";
defineProps<{ id: string; title: string; number: string; icon: IconName }>();
</script>

<template>
  <section :id="id" class="content-section" :aria-labelledby="`${id}-heading`">
    <div class="section-title-row">
      <span class="section-index no-print">{{ number }} /</span>
      <h2 :id="`${id}-heading`" class="section-heading">{{ title }}</h2>
      <Icon class="section-symbol" :name="icon" />
    </div>
    <div class="section-body"><slot /></div>
  </section>
</template>

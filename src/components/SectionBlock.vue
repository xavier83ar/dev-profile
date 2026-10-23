<script setup lang="ts">
import type { GraphicIconName } from "@/data/types";
import GraphicIcon from "./GraphicIcon.vue";
defineProps<{ id: string; title: string; number: string; icon: GraphicIconName }>();
</script>

<template>
  <section :id="id" class="content-section" :aria-labelledby="`${id}-heading`">
    <div class="section-title-row">
      <span class="section-index no-print">{{ number }} /</span>
      <h2 :id="`${id}-heading`" class="section-heading">{{ title }}</h2>
      <GraphicIcon class="section-symbol" :name="icon" />
    </div>
    <div class="section-body"><slot /></div>
  </section>
</template>

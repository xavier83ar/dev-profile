<script setup lang="ts">
import { computed } from "vue";
import type { IconName } from "@/data/types";

const props = defineProps<{ name: IconName }>();
const custom = computed(() => props.name.startsWith("custom:"));
const source = computed(() => custom.value
  ? { "--icon-source": `url("${import.meta.env.BASE_URL}icons/${props.name.slice(7)}.svg")` }
  : undefined,
);
</script>

<template>
  <span
    class="icon no-print"
    :class="custom ? 'icon-custom' : ['bi', `bi-${name}`]"
    :style="source"
    aria-hidden="true"
  ></span>
</template>

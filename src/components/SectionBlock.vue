<script setup lang="ts">
defineProps<{ id: string; title: string }>();
</script>

<template>
  <section :id="id" class="mt-11">
    <h2
      class="mb-4 text-[0.7rem] font-semibold uppercase text-accent-deep"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { __ } from "@/i18n";

const visible = ref(false);
const active = ref("summary");
const sections = computed(() => [
  { id: "summary", label: __("Profile") },
  { id: "skills", label: __("Skills") },
  { id: "ai", label: __("AI") },
  { id: "experience", label: __("Experience") },
  { id: "education", label: __("Education & Languages") },
]);
let update: (() => void) | undefined;
let frame = 0;
onMounted(() => {
  const hero = document.getElementById("profile-hero");
  const targets = sections.value.map(({ id }) => document.getElementById(id));
  const measure = () => {
    frame = 0;
    visible.value = !!hero && hero.getBoundingClientRect().bottom <= (document.querySelector(".site-nav")?.getBoundingClientRect().bottom ?? 0);
    const current = targets.filter((element) => element && element.getBoundingClientRect().top <= 180).at(-1);
    active.value = current?.id ?? "summary";
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active.value = "education";
  };
  update = () => { if (!frame) frame = requestAnimationFrame(measure); };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  measure();
});
onUnmounted(() => {
  if (update) {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  }
  cancelAnimationFrame(frame);
});
</script>

<template>
  <aside class="section-nav-slot no-print">
    <nav v-if="visible" class="section-nav" :aria-label="__('On this page')">
      <p class="eyebrow">{{ __('On this page') }}</p>
      <a v-for="(section, index) in sections" :key="section.id" :href="`#${section.id}`"
        :aria-current="active === section.id ? 'location' : undefined">
        <span class="section-nav-number" aria-hidden="true">0{{ index + 1 }}</span>{{ section.label }}
      </a>
      <a class="back-top" href="#profile-hero">{{ __('Back to top') }} <Icon name="arrow-up" /></a>
    </nav>
  </aside>
</template>

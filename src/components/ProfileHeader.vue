<script setup lang="ts">
import type { Profile } from "@/data/types";
import { __ } from "@/i18n";
import Icon from "./Icon.vue";

defineProps<{ profile: Profile }>();
const base = import.meta.env.BASE_URL;
</script>

<template>
  <header id="profile-hero" class="profile-hero print-keep">
    <div class="hero-grid print-flat">
      <div class="hero-main print-flat">
        <p class="hero-intro"><Icon class="hero-mark" name="asterisk" />{{ profile.name }}</p>
        <h1 class="hero-name">{{ profile.title }}<span class="hero-dot no-print" aria-hidden="true">.</span></h1>
        <p class="hero-tagline print-hide">{{ profile.tagline }}</p>
        <div class="hero-actions no-print">
          <a class="contact-action" :href="`mailto:${profile.email}`">{{ __('Let’s talk') }} <Icon name="arrow-up-right" /></a>
          <a class="work-action" href="#experience">{{ __('Explore my experience') }} <Icon name="arrow-down" /></a>
        </div>
        <dl class="hero-details text-sm">
          <div><dt class="sr-only">{{ __('Location') }}</dt><dd>{{ profile.location }}</dd></div>
          <div><dt class="sr-only">{{ __('Timezone') }}</dt><dd>{{ profile.timezone }}</dd></div>
          <div class="hero-availability"><dt class="sr-only">{{ __('Availability') }}</dt><dd>{{ profile.availability }}</dd></div>
        </dl>
      </div>
      <div class="hero-art no-print" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <Icon class="art-cross" name="plus-lg" /><Icon class="art-code" name="code-slash" />
        <div class="portrait-frame">
          <img v-if="profile.photo" :src="`${base}${profile.photo}`" alt="" width="400" height="400" decoding="async" class="hero-portrait" />
          <span class="portrait-caption">{{ profile.name }} <Icon name="arrow-up-right" /></span>
        </div>
        <span class="art-sticker"><Icon name="code-slash" /><span>{{ __('From idea to production') }}</span></span>
      </div>
    </div>

    <div class="hero-bottom print-flat">
      <ul class="hero-contact">
        <li><a :href="`mailto:${profile.email}`"><Icon name="envelope-fill" />{{ profile.email }}</a></li>
        <li v-if="profile.phone"><a :href="`tel:${profile.phone.replace(/\s/g, '')}`"><Icon name="telephone-fill" />{{ profile.phone }}</a></li>
        <li v-for="link in profile.links" :key="link.url"><a :href="link.url" target="_blank" rel="noreferrer"><Icon v-if="link.icon" :name="link.icon" />{{ link.label }}</a></li>
        <li class="hidden print:block"><a href="https://javiermelero.com.ar/">javiermelero.com.ar</a></li>
      </ul>
      <aside class="hero-skills no-print" :aria-label="__('Featured skills')">
        <div class="featured-heading"><h2 class="eyebrow">{{ __('Featured skills') }}</h2><a href="#skills" :aria-label="__('Explore all skills')"><Icon name="arrow-up-right" /></a></div>
        <ul class="featured-skills">
          <li v-for="skill in profile.skills.featured.slice(0, 10)" :key="skill.label"><Icon :name="skill.icon" /><span>{{ skill.label }}</span></li>
        </ul>
      </aside>
      <a class="scroll-cue no-print" href="#summary"><span>{{ __('Scroll to explore') }}</span><Icon name="arrow-down" /></a>
    </div>
  </header>
</template>

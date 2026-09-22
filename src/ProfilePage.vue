<script setup lang="ts">
import { profile } from "@/data/profile";
import SiteNav from "@/components/SiteNav.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import SkillGroups from "@/components/SkillGroups.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import EducationLanguages from "@/components/EducationLanguages.vue";
</script>

<template>
  <SiteNav current="profile" />

  <main class="print-flat mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-8 sm:pt-16">
    <ProfileHeader :profile="profile" />

    <SectionBlock id="summary" title="Profile">
      <p class="max-w-3xl leading-relaxed text-muted">{{ profile.summary }}</p>
    </SectionBlock>

    <SectionBlock id="experience" title="Experience">
      <ExperienceList :roles="profile.experience" />
    </SectionBlock>

    <SectionBlock id="skills" title="Skills">
      <SkillGroups :groups="profile.skills" />
    </SectionBlock>

    <SectionBlock id="education" title="Education & Languages">
      <EducationLanguages
        :education="profile.education"
        :languages="profile.languages"
      />
    </SectionBlock>
  </main>
</template>

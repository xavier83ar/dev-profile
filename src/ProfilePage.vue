<script setup lang="ts">
import { profile } from "@/data/profile";
import { __ } from "@/i18n";
import { useDocumentHead } from "@/composables/useDocumentHead";
import SectionNav from "@/components/SectionNav.vue";
import SiteNav from "@/components/SiteNav.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import SkillGroups from "@/components/SkillGroups.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import EducationLanguages from "@/components/EducationLanguages.vue";
import SiteFooter from "@/components/SiteFooter.vue";

useDocumentHead(() => ({
  title: __("Javier Melero — Lead Web Engineer"),
  description: __("Almost 20 years building for the web. I own features end to end: design, data model, architecture, API, UI, and the underlying infrastructure."),
}));
</script>

<template>
  <SiteNav current="profile" />

  <main class="profile-shell print-flat">
    <ProfileHeader :profile="profile" />

    <div class="profile-layout print-flat">
      <SectionNav />
      <div class="profile-content print-flat">

        <SectionBlock id="summary" number="01" icon="person-badge" :title="__('Profile')">
          <p class="max-w-3xl leading-relaxed text-muted mb-3" v-for="summaryLine of profile.summary">{{ summaryLine }}</p>
        </SectionBlock>

        <SectionBlock id="skills" number="02" icon="code-slash" :title="__('Skills')">
          <SkillGroups :description="profile.skills.description" :groups="profile.skills.groups" />
        </SectionBlock>

        <SectionBlock id="ai" number="03" icon="custom:sparkles" :title="__('AI')">
          <p class="max-w-3xl leading-relaxed text-muted mb-3" v-for="paragraph of profile.ai">{{ paragraph }}</p>
        </SectionBlock>

        <SectionBlock id="experience" number="04" icon="briefcase" :title="__('Experience')">
          <ExperienceList :experience="profile.experience" />
        </SectionBlock>

        <SectionBlock id="education" number="05" icon="mortarboard" :title="__('Education & Languages')">
          <EducationLanguages
            :education="profile.education"
            :languages="profile.languages"
          />
        </SectionBlock>
      </div>
    </div>
  </main>

  <SiteFooter />
</template>

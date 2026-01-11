<template>
  <main class="min-h-screen bg-zinc-900 text-zinc-100 flex items-center">
    <section class="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <!-- LEFT CONTENT -->
      <div class="space-y-6">
        <!-- Project number -->
        <div class="text-red-500 text-8xl font-bold">
          {{ activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1 }}
        </div>

        <!-- Project name -->
        <h2 class="text-4xl font-bold">
          {{ currentProject.title }}
        </h2>

        <!-- Description -->
        <p class="text-zinc-400 max-w-lg">
          {{ currentProject.description }}
        </p>

        <!-- Roles -->
        <div class="space-y-2">
          <div
              v-for="role in currentProject.roles"
              :key="role.label"
              class="flex gap-2"
          >
            <span class="text-red-500 font-semibold">
              {{ role.label }}:
            </span>
            <span class="text-white">
              {{ role.text }}
            </span>
          </div>
        </div>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-3 pt-2">
          <span
              v-for="tech in currentProject.tech"
              :key="tech"
              class="px-4 py-1 text-sm rounded-full bg-red-500/10 text-red-400 font-medium"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Controls -->
        <div class="flex gap-4 pt-6">
          <button
              @click="prevProject"
              class="px-4 py-2 border border-zinc-700 rounded-lg hover:border-red-500 transition-colors"
          >
            ← Prev
          </button>
          <button
              @click="nextProject"
              class="px-4 py-2 border border-zinc-700 rounded-lg hover:border-red-500 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="relative w-full flex justify-center">
        <img
            :src="currentProject.image"
            alt="Project screenshot"
            class="w-full rounded-xl shadow-lg transition-all duration-500"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import fixMyCityImage from '../assets/images/project-fix-my-city.png'
import projectFashionImage from '../assets/images/project-fashion.png'


const projects = [
  {
    title: 'Dark Tech Project Fashion',
    description: 'Developed a personalized fashion dashboard that visualizes user preferences and body data,' +
        ' showing how data like weight, style choices, and behavior can be collected and analyzed. ' +
        'Explored the ethical limits of personalization and extreme profiling in fashion tech.',
    roles: [
      { label: 'Role', text: 'Creative Technologist' },
      { label: 'Focus', text: 'UX, Back-end' }
    ],
    tech: ['Vue', 'TypeScript', 'Tailwind', 'SpringBoot', 'Research'],
    image: projectFashionImage
  },
  {
    title: 'Project FixMyCity',
    description: 'Developed a neighborhood community app inspired by Nextdoor, allowing users to post requests' +
        ' for help, share local and other things. Focused on building full-stack functionality,' +
        ' including posting, notifications, and user interactions.',
    roles: [
      { label: 'Role', text: 'Fullstack Developer' }
    ],
    tech: ['Vue', 'TypeScript', 'Tailwind', 'SpringBoot', 'Docker', 'CI-CD'],
    image: fixMyCityImage
  }
]

const activeIndex = ref(0)

const currentProject = computed(() => projects[activeIndex.value]!)

const nextProject = () => {
  activeIndex.value = (activeIndex.value + 1) % projects.length
}

const prevProject = () => {
  activeIndex.value =
      (activeIndex.value - 1 + projects.length) % projects.length
}
</script>

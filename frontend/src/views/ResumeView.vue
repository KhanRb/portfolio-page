<template>
  <main class="min-h-screen bg-zinc-900 text-zinc-100 flex">
    <div class="max-w-6xl mx-auto w-full px-6 py-16 flex gap-10">

      <!-- LEFT SIDEBAR -->
      <aside class="w-48 flex flex-col gap-3">
        <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="text-left px-4 py-2 rounded-lg font-medium transition-colors"
            :class="activeTab === tab
            ? 'bg-red-500 text-zinc-900'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'"
        >
          {{ tab }}
        </button>
      </aside>

      <!-- RIGHT CONTENT -->
      <section class="flex-1">

        <!-- EXPERIENCE -->
        <div v-if="activeTab === 'Experience'" class="grid gap-6 md:grid-cols-2">
          <div
              v-for="item in experience"
              :key="item.title"
              class="bg-zinc-800 rounded-xl p-6"
          >
            <!-- Year -->
            <span class="text-red-500 font-semibold">{{ item.year }}</span>

            <!-- Role -->
            <h3 class="text-xl font-semibold mt-2">
              {{ item.title }}
            </h3>

            <!-- Company -->
            <ul class="mt-4 list-disc list-inside marker:text-red-500">
              <li class="text-zinc-200 font-medium">
                {{ item.company }}
              </li>
            </ul>

            <!-- Description -->
            <p class="mt-3 text-zinc-400 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- EDUCATION -->
        <div v-if="activeTab === 'Education'" class="grid gap-6 md:grid-cols-2">
          <div
              v-for="item in education"
              :key="item.title"
              class="bg-zinc-800 rounded-xl p-6"
          >
            <!-- Year -->
            <span class="text-red-500 font-semibold">
      {{ item.year }}
    </span>

            <!-- Degree -->
            <h3 class="text-xl font-semibold mt-2">
              {{ item.title }}
            </h3>

            <!-- School -->
            <ul class="mt-4 list-disc list-inside marker:text-red-500">
              <li class="text-zinc-200 font-medium">
                {{ item.school }}
              </li>
            </ul>

            <!-- Description -->
            <p class="mt-3 text-zinc-400 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- SKILLS -->
        <div
            v-if="activeTab === 'Skills'"
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          <div
              v-for="skill in skills"
              :key="skill.name"
              class="group bg-zinc-800 rounded-xl aspect-square
                   flex items-center justify-center
                   hover:bg-red-500 transition-colors cursor-pointer"
          >
            <i
                :class="skill.icon"
                class="text-3xl text-zinc-100 group-hover:hidden"
            ></i>

            <span
                class="hidden group-hover:block text-sm font-semibold text-zinc-900 text-center px-2"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>

        <!-- ABOUT ME -->
        <div v-if="activeTab === 'About Me'" class="space-y-4 text-zinc-400">
          <div><span class="text-white font-bold">Name:</span> Rahmaan Khan</div>
          <div><span class="text-white font-bold">Email:</span> r.khan05@hotmail.com</div>
          <div><span class="text-white font-bold">Experience:</span> 3 Years</div>
          <div><span class="text-white font-bold">Nationality:</span> Dutch</div>
          <div><span class="text-white font-bold">Languages:</span> English, Dutch</div>
        </div>

      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = ['Experience', 'Education', 'Skills', 'About Me']
const activeTab = ref('Experience')

const experience = [
  {
    year: 'Feb 2024 – Jun 2024',
    title: 'Software Developer Intern',
    company: 'Ahold Delhaize',
    description: 'Worked primarily as a front-end developer focusing on React with TypeScript. Worked on' +
        ' projects with Gen Al to improve work processes and efficiency.'
  },
  {
    year: 'Feb 2023 – Feb 2023',
    title: 'Student Assistant',
    company: 'Amsterdam University of Applied Sciences',
    description: 'Supervise and support fellow students in the User Interaction (UI/UX) course. Here I explain' +
        ' design principles, help solve problems in projects, and offer feedback on their work.'
  }
]

const education = [
  {
    year: 'Sep 2022 – Present',
    title: 'BSc Software Engineering',
    school: 'Amsterdam University of Applied Sciences',
    description: 'Cum laude propaedeutic.'
  },
  {
    year: 'Sep 2017 – May 2022',
    title: 'Science and Technology Profile',
    school: 'Hervormd Lyceum West',
  }
]

const skills = [
  { name: 'JavaScript', icon: 'bi bi-javascript' },
  { name: 'TypeScript', icon: 'bi bi-typescript' },
  { name: 'HTML', icon: 'bi bi-filetype-html' },
  { name: 'CSS', icon: 'bi bi-css' },
  { name: 'GitHub', icon: 'bi bi-github' }
]
</script>

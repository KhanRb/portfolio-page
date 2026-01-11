<template>
  <main class="min-h-screen bg-zinc-900 text-zinc-100 flex items-center">
    <section class="max-w-6xl mx-auto px-6 flex flex-col gap-4">
      <!-- Field of Work -->
      <p class="text-zinc-100 text-lg">
        Software Developer
      </p>

      <!-- Name -->
      <h1 class="text-6xl md:text-7xl font-bold">
        Hello, I’m <span class="text-red-500">Rahmaan Khan</span>
      </h1>

      <!-- About -->
      <p class="text-zinc-400 max-w-xl text-base md:text-lg">
        I'm an enthusiastic final year Software Engineering student at the Amsterdam University of Applied Sciences.
        I enjoy learning new things, solving problems, and continuously improving as a developer.
      </p>

      <!-- Socials -->
      <div class="flex gap-6 mt-4">
        <a
            href="https://www.linkedin.com/in/rahmaan-khan-68306a243"
            target="_blank"
            class="text-red-500 text-3xl hover:text-red-400 transition-colors"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
            href="https://github.com/KhanRb"
            target="_blank"
            class="text-red-500 text-3xl hover:text-red-400 transition-colors"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>

      <!-- Stats -->
      <div class="flex flex-wrap gap-12 mt-12">
        <div
            v-for="exp in experience"
            :key="exp.labelBottom"
            class="flex items-center gap-4"
        >
          <span class="text-5xl font-bold text-white">
            {{ exp.number }}
          </span>

          <div class="flex flex-col leading-tight">
            <span class="text-zinc-400 text-lg">{{ exp.labelTop }}</span>
            <span class="text-zinc-400 text-sm">{{ exp.labelBottom }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const experience = [
  { number: "3", labelTop: "Years of", labelBottom: "Experience" },
  { number: "8", labelTop: "Projects", labelBottom: "Completed" },
  { number: "10", labelTop: "Technologies", labelBottom: "Learned" },
  { number: "200", labelTop: "Code", labelBottom: "Commits" }
]
</script>

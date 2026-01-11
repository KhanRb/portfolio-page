<template>
  <header class="bg-zinc-900 border-b border-zinc-800">
    <nav class="max-w-6xl mx-auto px-8 md:px-12 py-4 flex items-center justify-between relative">
      <!-- Logo -->
      <RouterLink
          to="/"
          class="text-3xl font-bold text-zinc-100 hover:text-red-500 transition-colors flex items-center"
          @click="closeMenu"
      >
        Rahmaan<span class="ml-1 text-red-500">.</span>
      </RouterLink>

      <!-- Mobile Menu Toggle -->
      <span class="text-zinc-100 text-3xl md:hidden cursor-pointer" @click="menuOpen">
        <i :class="open ? 'bi bi-x' : 'bi bi-list'"></i>
      </span>

      <!-- Navigation Links -->
      <ul
          class="md:flex md:items-center absolute md:static gap-5 bg-zinc-900 w-full md:w-auto top-full left-0 md:left-auto transition-all duration-300 px-6 md:px-0 py-4 md:py-0"
          :class="[
          open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
          'md:translate-x-0 md:opacity-100'
        ]"
      >
        <li
            v-for="item in navItems"
            :key="item.name"
            class="relative py-2 md:py-0"
        >
          <RouterLink
              :to="item.to"
              class="flex flex-col items-center text-lg font-medium transition-colors relative"
              :class="isActive(item.to)
              ? 'text-red-500'
              : 'text-zinc-400 hover:text-red-500'"
              @click="closeMenu"
          >
            {{ item.name }}

            <!-- Underline -->
            <span
                class="absolute left-0 -bottom-1 h-1 bg-red-500 rounded transition-all duration-300 ease-out hidden md:block"
                :class="isActive(item.to) ? 'w-full' : 'w-0'"
            ></span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()

const navItems = [
  { name: 'Home', to: '/home' },
  { name: 'Resume', to: '/resume' },
  { name: 'Projects', to: '/projects' },
]

const isActive = (to: string) => {
  return route.path === to || (to !== '/' && route.path.startsWith(to))
}

const menuOpen = () => {
  open.value = !open.value
}

// Close menu when a link is clicked
const closeMenu = () => {
  open.value = false
}
</script>

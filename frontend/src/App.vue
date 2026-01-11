<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import Navbar from "../src/components/NavBar.vue"
import { RouterView } from "vue-router"
</script>
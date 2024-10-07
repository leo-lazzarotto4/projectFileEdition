<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
</script>

<template>
  <div class="flex flex-column h-screen">
    <div class="sticky top-0 z-10">
      <TopBar />
    </div>
    <router-view />
  </div>
</template>

<style>
  /* Le body et html occupent toute la hauteur */
  html, body {
    height: 100%;
    margin: 0; /* Pour enlever les marges par défaut */
  }
</style>

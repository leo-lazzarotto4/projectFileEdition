<script setup lang="ts">
import Button from 'primevue/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center flex-grow-1">
    <span class="text-5xl font-bold mb-4">Votre Gestionnaire de workflow</span>
    <router-link to="/LogIn">
      <Button label="S'identifier" icon="pi pi-user" size="large" />
    </router-link>
  </div>
</template>

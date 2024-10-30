<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { RouterLink } from 'vue-router' // Assurez-vous d'importer RouterLink
import useAuthService from '@/composables/useAuthService';

const { loginUsername, loginPassword, handleLogin, errorMessage, isRegistered } = useAuthService()

const handleLoginClick = async () => {
  await handleLogin()
  if (!errorMessage.value || isRegistered.value) {
    // Rediriger vers la page d'accueil apres la connexion
    window.location.href = '/'
  }
}
</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center mt-8">
    <div class="card p-fluid">
      <h2 class="text-center text-4xl">Connexion</h2>
      <div class="field">
        <label for="username">Nom d'utilisateur</label>
        <InputText id="username" v-model="loginUsername" />
      </div>
      <div class="field">
        <label for="password">Mot de passe</label>
        <InputText id="password" type="password" v-model="loginPassword" />
      </div>
      <div class="flex justify-content-center mb-2">
        <Button label="Se connecter" icon="pi pi-sign-in" @click="handleLoginClick" />
      </div>
      <span class="text-center">Pas encore inscrit ? <RouterLink to="/Register">S'enregistrer</RouterLink></span>
      <div v-if="errorMessage" class="text-red-600 text-center mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>

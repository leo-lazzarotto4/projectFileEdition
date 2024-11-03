<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import useAuthService from '@/composables/useAuthService';

const { registerUsername, registerPassword, handleRegister, errorMessage, isRegistered } = useAuthService()

const handleRegisterClick = async () => {
  await handleRegister()

  if (isRegistered.value) {
    // Ajouter un délai de 3 secondes avant la redirection
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Rediriger vers la page de connexion après le délai
    window.location.href = '/LogIn'
  }
}

</script>


<template>
  <div class="flex flex-column justify-content-center align-items-center mt-8">
    <div class="card p-fluid">
      <h2 class="text-center text-4xl">S'enregistrer</h2>
      <div class="field">
        <label for="email">Email</label>
        <InputText id="email" v-model="registerUsername" />
      </div>
      <div class="field">
        <label for="password">Mot de passe</label>
        <InputText id="password" type="password" v-model="registerPassword" />
      </div>
      <div class="flex justify-content-center mb-2">
        <Button label="Créer un compte" icon="pi pi-sign-in" @click="handleRegisterClick" />
      </div>
      <div v-if="errorMessage" class="text-red-600 text-center mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>

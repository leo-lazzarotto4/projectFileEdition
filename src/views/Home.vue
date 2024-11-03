<script setup lang="ts">
import { ref, reactive } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { RouterLink } from 'vue-router';
import useAuthService from '@/composables/useAuthService';

const { currentUser } = useAuthService();

// État réactif
const state = reactive({
  message: 'Bienvenue dans votre Gestionnaire de workflow!',
  cookieValue: '',
  savedCookie: '',
});

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function saveCookie() {
  setCookie("cookie", state.cookieValue, 7); // Enregistre pour 7 jours
  state.savedCookie = getCookie("cookie") || "Aucun cookie défini"; // Définit une valeur par défaut
}


// Récupère la valeur actuelle du cookie
state.savedCookie = getCookie("cookie") || "Aucun cookie défini";
</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center flex-grow-1">
    <span class="text-5xl font-bold mb-4">{{ state.message }}</span>

    <!-- Bouton pour la connexion si l'utilisateur n'est pas authentifié -->
    <router-link to="/LogIn" v-if="!currentUser">
      <Button label="S'identifier" icon="pi pi-user" size="large" />
    </router-link>

    <!-- Champ de saisie et bouton pour définir le cookie -->
    <div class="mt-4">
      <InputText v-model="state.cookieValue" placeholder="Entrez un cookie" />
      <Button label="Sauvegarder le cookie" icon="pi pi-save" @click="saveCookie" class="ml-2" />
    </div>

    <!-- Affichage du texte du cookie -->
    <p class="mt-2">cookie sauvegardé : {{ state.savedCookie }}</p>
  </div>
</template>


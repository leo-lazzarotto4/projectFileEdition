<script setup lang="ts">
import { ref } from 'vue'
import { uploadFile as uploadFileAPI } from '../services/apiService' // Assurez-vous d'importer la méthode d'upload
import Button from 'primevue/button'

const selectedFile = ref<File | null>(null)
const uploadStatus = ref<string | null>(null)

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
  }
}

const uploadFile = async () => {
  if (!selectedFile.value) return
  
  try {
    uploadStatus.value = 'Téléchargement en cours...'
    await uploadFileAPI(selectedFile.value)
    uploadStatus.value = 'Fichier téléchargé avec succès !'
  } catch (error) {
    console.error("Erreur lors du téléchargement du fichier:", error)
    uploadStatus.value = 'Erreur lors du téléchargement.'
  } finally {
    selectedFile.value = null // Réinitialiser le fichier sélectionné
    setTimeout(() => {
      uploadStatus.value = null // Effacer le message après 5 secondes
    }, 5000)
  }
}
</script>

<template>
    <div class="flex flex-column align-items-center p-4">
      <h2 class="text-center text-3xl mb-4">Télécharger un Fichier</h2>
  
      <div class="mb-4">
        <input type="file" @change="onFileChange" />
      </div>
  
      <Button 
        label="Télécharger" 
        icon="pi pi-upload" 
        severity="success"
        @click="uploadFile"
        :disabled="!selectedFile"
      />
  
      <p v-if="uploadStatus" class="mt-4">{{ uploadStatus }}</p>
    </div>
</template>

  
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useApiService from '../composables/useApiService'
import type { Worflow } from '../models/workflow.type'
import Button from 'primevue/button'

const { executeWorkflow, statusWorkflow, deleteWorkflow } = useApiService()

const route = useRoute()
const workflowId = route.params.id as string

const workflowStatus = ref<Worflow | null>(null)
const executionMessage = ref<string | null>(null)

const handleExecuteWorkflow = async () => {
  try {
    await executeWorkflow(workflowId)
    console.log(`Workflow ${workflowId} exécuté.`)

    // Affiche le message de confirmation pendant 5 secondes
    executionMessage.value = "Le workflow a bien été démarré."
    setTimeout(() => {
      executionMessage.value = null
    }, 5000)
  } catch (error) {
    console.error("Erreur lors de l'exécution du workflow:", error)
  }
}

const handleStatusWorkflow = async () => {
  try {
    const status = await statusWorkflow(workflowId)
    workflowStatus.value = status
  } catch (error) {
    console.error("Erreur lors de la vérification du statut du workflow:", error)
  }
}

const handleDeleteWorkflow = async () => {
  try {
    await deleteWorkflow(workflowId)
    window.location.href = '/'
    console.log(`Workflow ${workflowId} supprimé.`)
  } catch (error) {
    console.error("Erreur lors de la suppression du workflow:", error)
  }
}
</script>

<template>
  <div class="flex flex-column align-items-center p-4">
    <h2 class="text-center text-3xl mb-4">Détails du Workflow {{ workflowId }}</h2>

    <div v-if="executionMessage" class="text-green-600 mb-4">{{ executionMessage }}</div>

    <div class="flex gap-3 mb-4">
      <Button 
        label="Exécuter Workflow" 
        icon="pi pi-play" 
        severity="info"
        @click="handleExecuteWorkflow"
      />
      <Button 
        label="Vérifier Statut" 
        icon="pi pi-info-circle" 
        severity="info"
        @click="handleStatusWorkflow"
      />
      <Button 
        label="Supprimer Workflow" 
        icon="pi pi-trash" 
        severity="info"
        @click="handleDeleteWorkflow"
      />
    </div>

    <div v-if="workflowStatus" class="card p-4 mt-4 w-full md:w-6">
      <h3 class="text-2xl mb-2">Statut du Workflow</h3>
      <p><strong>ID:</strong> {{ workflowStatus.id }}</p>
      <p><strong>Statut:</strong> {{ workflowStatus.status }}</p>
      
      <h4 class="text-xl mt-3">Étapes</h4>
      <ul>
        <li v-for="(step, index) in workflowStatus.steps" :key="index">
          <strong>Type d'étape:</strong> {{ step.step_type }}
        </li>
      </ul>
    </div>
  </div>
</template>

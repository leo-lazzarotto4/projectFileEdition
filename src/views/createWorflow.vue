<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import useApiService from '../composables/useApiService';
import { Worflow, stepType } from '../models/workflow.type';
import { ref } from 'vue';

const { createWorkflow } = useApiService()

const workflowName = ref('')
const datasource = ref('')

const createWorkflowApi = async () => {
  const workflow: Worflow = {
    name: workflowName.value,
    data_source: datasource.value,
    steps: [
      {
        step_type: stepType.TRAIN,
        parameters: ""
      },
    ]
  }

  createWorkflow(workflow)

  window.location.href = '/'
}



</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center mt-8">
    <div class="card p-fluid">
      <h2 class="text-center text-4xl">Créer un nouveau workflow</h2>
      <div class="field">
        <label for="workflowName">Nom du workflow</label>
        <InputText id="workflowName" v-model="workflowName"/>
      </div>
      <div class="field">
        <label for="datasource">DataSource (Vous pouvez mettre n'importe quoi)</label>
        <InputText id="datasource" v-model="datasource"/>
      </div>

      <div class="flex justify-content-center mb-2">
        <Button label="Créer un workflow" icon="pi pi-plus" @click="createWorkflowApi" />
      </div>
    </div>
  </div>
</template>

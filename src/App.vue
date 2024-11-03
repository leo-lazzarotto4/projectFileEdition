<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import useApiService from './composables/useApiService';
import { ref } from 'vue';
import { WorkflowClass } from './models/workflow.type'

const { getWorkflows } = useApiService();
console.log(getWorkflows());

const selectedWorkflow = ref(WorkflowClass);

function handleWorkflowSelected(workflow ) {
  selectedWorkflow.value = workflow;
}
</script>

<template>
  <div class="flex flex-column h-screen">
    <div class="sticky top-0 z-10">
      <TopBar @workflowSelected="handleWorkflowSelected">
        <template #customContent>
          <p v-if="selectedWorkflow" class="mr-1">Workflow sélectionné : {{ selectedWorkflow.name }}</p>
        </template>
      </TopBar>
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

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import CascadeSelect from 'primevue/cascadeselect'
import { stepType } from '../models/workflow.type'

// Options pour le CascadeSelect
const stepOptions = ref([
  { label: 'Train', value: stepType.TRAIN },
  { label: 'Predict', value: stepType.PREDICT }
])

const selectedType = ref(null) // Pour stocker la valeur sélectionnée
const parameters = ref('') // Pour stocker les paramètres saisis
</script>

<template>
  <div class="step">
    <div class="field">
      <label for="stepType">Type de l'étape</label>
      <CascadeSelect
        id="stepType"
        :options="stepOptions"
        v-model="selectedType"
      />
    </div>
    <div class="field">
      <label for="parameters">Paramètres</label>
      <InputText id="parameters" v-model="parameters" />
    </div>
  </div>
</template>

<style scoped>
.step {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>

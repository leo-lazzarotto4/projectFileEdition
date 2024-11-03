<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import { items } from '@/models/TopBarItems.type';
import useAuthService from '@/composables/useAuthService';
import { getWorkflows } from '@/services/apiService';
import { onMounted, ref, defineEmits } from 'vue';
import { Worflow, WorkflowClass } from '../models/workflow.type';

const emit = defineEmits(['workflowSelected']);

const workflows = ref<Worflow[]>([]);
const { currentUser, handleLogout } = useAuthService();

const fetchWorkflows = async () => {
    try {
        const response = await getWorkflows();
        workflows.value = response.map(wf => new WorkflowClass(wf.id, wf.name, wf.createdAt));

        const myWorkflowsItem = items.value[2].items[2];
        myWorkflowsItem.items = workflows.value.map(workflow => ({
            label: workflow.name,
            icon: 'pi pi-palette',
            to: `/workflow/${workflow.id}`,
            command: () => emit('workflowSelected', workflow) // Émission de l'événement
        }));
    } catch (error) {
        console.error('Erreur lors de la récupération des workflows:', error);
    }
};

onMounted(fetchWorkflows);
</script>

<template>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu, root }">
            <router-link v-if="item.to" :to="item.to" v-bind="props.action" class="flex items-center">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </router-link>
            <a v-else class="flex items-center" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>

        <template #end>
            <div class="flex flex-row align-items-center">
                <slot name="customContent"></slot>
                <div v-if="currentUser" class="flex flex-row justify-content-center align-items-center text-center">
                    <i class="pi pi-user mr-2" style="font-size: 1.3rem" />
                    <span class="font-bold"> {{ currentUser.username }} </span>
                    <Button label="Se deconnecter" icon="pi pi-sign-out" text @click="handleLogout()" class="ml-2"/>
                </div>
                <div v-else>
                    <router-link to="/LogIn">
                        <Button label="S'identifier" icon="pi pi-user" text />
                    </router-link>
                    <router-link to="/Register">
                        <Button label="S'enregistrer" icon="pi pi-user-plus" text />
                    </router-link>
                </div>
            </div>
        </template>
    </Menubar>
</template>

import { ref } from "vue";

export const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'fichier',
        icon: 'pi pi-star',
        to: '/file'
    },
    {
        label: 'Workflows',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Create Worflow',
                icon: 'pi pi-bolt',
                to: '/createWorflow'
            },
            {
                separator: true
            },
            {
                label: 'My Workflows',
                icon: 'pi pi-palette',
                items: [

                ]
            }
        ]
    }
]);

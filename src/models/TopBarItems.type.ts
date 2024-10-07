import { ref } from "vue";

export const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/' // Chemin pour la page d'accueil
    },
    {
        label: 'Features',
        icon: 'pi pi-star',
        to: '/features' // Chemin pour la page des fonctionnalités
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S',
                to: '/projects/core' // Chemin pour le projet Core
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B',
                to: '/projects/blocks' // Chemin pour le projet Blocks
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U',
                to: '/projects/ui-kit' // Chemin pour le UI Kit
            },
            {
                separator: true
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        badge: 2,
                        to: '/projects/templates/apollo' // Chemin pour le modèle Apollo
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                        badge: 3,
                        to: '/projects/templates/ultima' // Chemin pour le modèle Ultima
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        to: '/contact' // Chemin pour la page de contact
    }
]);

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import 'primeflex/primeflex.css' // Import PrimeFlex CSS
import 'primeicons/primeicons.css' // Import PrimeIcons CSS
import 'primevue/resources/themes/saga-blue/theme.css' // Import a theme CSS

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.mount('#app') 

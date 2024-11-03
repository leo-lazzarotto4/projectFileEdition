import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import LogIn from '@/views/LogIn.vue'
import Register from '@/views/Register.vue'
import createWorflow from '@/views/createWorflow.vue'
import workflow from '@/views/workflow.vue'
import file from './views/file.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/createWorflow',
    name: 'createWorflow',
    component: createWorflow,
  },
  {
    path: '/workflow/:id',
    name: 'workflow',
    component: workflow,
    props: true,
  },
  {
    path: '/file',
    name: 'file',
    component: file,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

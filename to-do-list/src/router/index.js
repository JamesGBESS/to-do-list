import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '@/views/ToDo.vue'
import LoGin from '@/views/LoGin.vue'
import AuTh from '@/views/AuTh.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDo
    },
    {
      path: '/login',
      name: 'signin',
      component: LoGin
    },
    {
      path: '/register',
      name: 'signup',
      component: AuTh
    }

  ]
})

export default router

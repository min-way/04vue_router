import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import product from '../components/product.vue'
import board from '../components/board.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/board',
    name: 'board',
    component: board
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

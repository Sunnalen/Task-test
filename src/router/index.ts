import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AddCard from '../views/AddCard.vue'
import ListCard from '../views/ListCard.vue'
import EditCard from '../views/EditCard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ListCard
  },
  {
    path: '/add',
    name: 'addCard',
    component: AddCard
  },
  {
    path: '/edit/:id',
    name: 'editCard',
    component: EditCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

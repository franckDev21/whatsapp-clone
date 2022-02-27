import { createRouter, createWebHashHistory } from 'vue-router'
import Disc from '../views/Disc.vue'
import Statut from '../views/Statut.vue'
import Appel from '../views/Appel.vue'
import Message from '../views/Message.vue'

const routes = [
  {
    path: '/',
    name: 'disc',
    component: Disc
  },
  {
    path: '/statut',
    name: 'statut',
    component: Statut
  },
  {
    path: '/appel',
    name: 'appel',
    component: Appel
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

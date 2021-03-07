import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicial from '../views/Inicial.vue'
import ListaDeClubes from '../views/ListaDeClubes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial
  }, {
    path: '/classificacao',
    name: 'ListaDeClubes',
    component: ListaDeClubes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/acerca-de',
    name: 'aboutUs',
    component: () => import('../views/AboutUs')
  },
  {
    path: '/salon-fama',
    name: 'hallFame',
    component: () => import('../views/HallFame')
  },
  {
    path: '/nuevo-jugador',
    name: 'newPlayer',
    component: () => import('../views/CreatePlayer')
  },
  {
    path: '/actualizar-jugador/:id',
    name: 'updatePlayer',
    component: () => import('../views/UpdatePlayer')
  },
  {
    path: '/contactanos',
    name: 'contactUs',
    component: () => import('../views/ContactUs')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({
  routes,
  linkExactActiveClass: 'active'
})

export default router

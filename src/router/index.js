import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: () => import('../views/Home')
  },
  {
    path: '/acerca-de',
    name: 'Acerca de',
    component: () => import('../views/AboutUs')
  },
  {
    path: '/salon-fama',
    name: 'Salon de la Fama',
    component: () => import('../views/HallFame')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/AdminPlayer')
  },
  {
    path: '/nuevo-jugador',
    name: 'Nuevo',
    component: () => import('../views/CreatePlayer')
  },
  {
    path: '/actualizar-jugador/:id',
    name: 'Actualizar',
    component: () => import('../views/UpdatePlayer')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import('../views/ContactUs')
  }
]

const router = new Router({
  routes,
  linkExactActiveClass: 'active'
})

export default router

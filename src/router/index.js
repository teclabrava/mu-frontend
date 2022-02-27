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
    path: '/login',
    name: 'Login',
    component: () => import('../views/PageLogin')
  },
  {
    path: '/acerca-de',
    name: 'Acerca de',
    component: () => import('../views/AcercaDe')
  },
  {
    path: '/salon-fama',
    name: 'Salon de la Fama',
    component: () => import('../views/SalonFama')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import('../views/Contactanos')
  }
]

const router = new Router({
  routes
})

export default router

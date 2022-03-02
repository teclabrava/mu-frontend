<template>
  <div v-if="loggedIn === 'N'" class="page-login admin layout-full page-dark">
    <div class="page text-center pt-5">
      <div class="page-content p-5">
        <Login msg="Accede a la plataforma"/>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid g-lg-0">
    <div class="row g-0 pb-5">
      <div class="col-lg-4 bg-fame d-none d-lg-block"></div>
      <div class="col-lg-8 offset-lg-4">
        <PlayerList :edit="1" />
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/login.css'
import '../assets/css/salon-fama.css'
import Login from '@/components/AdminLogin'
import PlayerList from '@/components/PlayerList'

export default {
  name: 'AdminPlayerView',
  created () {
    this.$store.dispatch('initApp')
  },
  data: () => ({
    loggedIn: 'S'
  }),
  components: {
    PlayerList,
    Login
  }
}
</script>

<style scoped>

</style>

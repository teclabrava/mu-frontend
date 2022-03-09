<template>
  <div class="container-fluid g-lg-0">
    <div class="row g-0 pb-5">
      <div class="col-lg-4 bg-fame d-none d-lg-block"></div>
      <div class="col-lg-8 offset-lg-4">
        <div class="site-navbar-small text-center">
          <div class="p-4">
            <div class="col-12 col-xl-8 offset-xl-2 pt-5">
              <h1 class="title text-primary">Actualizar jugador</h1>
              <PlayerForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/salon-fama.css'
import PlayerForm from '@/components/PlayerForm'

export default {
  name: 'UpdatePlayerView',
  created () {
    this.$store.dispatch('getPlayer', this.$route.params.id)
  },
  components: {
    PlayerForm
  }
}
</script>

<style scoped>

</style>

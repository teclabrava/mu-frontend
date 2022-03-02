<template>
  <div class="container-fluid g-lg-0">
    <div class="row g-0 pb-5">
      <div class="col-lg-4 bg-fame d-none d-lg-block"></div>
      <div class="col-lg-8 offset-lg-4">
        <PlayerList :edit="1" />
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/salon-fama.css'
import PlayerList from '../components/PlayerList'

export default {
  name: 'SalonFamaView',
  created () {
    this.$store.dispatch('initApp')
  },
  components: {
    PlayerList
  }
}
</script>

<style scoped>

</style>

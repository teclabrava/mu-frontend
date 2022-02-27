<template>
  <div class="container-fluid g-lg-0">
    <div class="row g-0 pb-5">
      <div class="col-lg-4 bg-fame d-none d-lg-block"></div>
      <div class="col-lg-8 offset-lg-4">
        <div class="site-navbar-small text-center">
          <div class="p-4">
            <div class="col-12 col-xl-8 offset-xl-2 pt-5">
              <h1 class="title text-primary">Salón de la fama</h1>
              <p class="">Nuestros mejores guerreros estan aquí</p>
              <form>
                <div class="input-group mb-3">
                  <input type="text" class="form-control form-control-lg" placeholder="Ingrese el término a buscar..."
                         aria-label="Término a buscar" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
                </div>
              </form>
              <hr/>
              <table class="table table-sm table-responsive table-hover table-striped align-middle">
                <thead>
                <tr>
                  <th>Ranking</th>
                  <th style="width: 100px;">Avatar</th>
                  <th>Nombres</th>
                  <th>Estado</th>
                  <th>Puntos</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(player, index) in players" :key="player.id">
                  <td>{{ index + 1 }}</td>
                  <td><img src="../assets/img/avatar-01.png" class="w-50" alt="Juan Andres"/></td>
                  <td>{{ player.nickname }}</td>
                  <td>{{ player.status == 1 ? 'Activo' : 'Inactivo' }}</td>
                  <td>{{ player.ranking }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/salon-fama.css'
import axios from 'axios'

export default {
  name: 'SalonFamaView',
  data: () => ({
    players: null
  }),
  created () {
    axios
      .get(process.env.VUE_APP_API_URL + 'player')
      .then((p) => {
        this.players = p.data
      })
  }
}
</script>

<style scoped>

</style>

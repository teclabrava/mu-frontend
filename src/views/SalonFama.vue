<template>
  <div class="row g-0">
    <div class="col-4"><img src="../assets/img/home-scroll-section-bg.jpg" class="img-fluid" alt="Salón de la fama"/></div>
    <div class="col-8">
      <div class="site-navbar-small text-center">
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
          <table class="table table-responsive table-hover table-striped align-middle">
            <thead>
            <tr>
              <th>Ranking</th>
              <th style="width: 100px;">Avatar</th>
              <th>Nombres</th>
              <th>Estado</th>
              <th>Puntos Acumulados</th>
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
</template>

<script>
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

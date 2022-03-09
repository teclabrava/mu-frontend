<template>
  <div class="site-navbar-small text-center">
    <div class="p-4">
      <div class="col-12 col-xl-8 offset-xl-2 pt-5">
        <h1 class="title text-primary">Salón de la fama</h1>
        <p class="">Nuestros mejores guerreros estan aquí</p>
        <p v-if="edit === 1" class="text-center">
          <router-link to="/nuevo-jugador" class="btn btn-primary btn-sm">Nuevo jugador</router-link>
        </p>
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control form-control-lg" placeholder="Ingrese el término a buscar..."
                   aria-label="Término a buscar" aria-describedby="button-addon2" v-model="$store.state.q"
                   v-on:keyup="doSearch">
            <span class="input-group-text" id="button-addon2">
              <font-awesome-icon :icon="['fa-solid', 'fa-magnifying-glass']" />
            </span>
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
            <th v-if="edit === 1">Opciones</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(player) in players.records" :key="player.id">
            <td>{{ player.ranking }}</td>
            <td>
              <img v-if="player.avatar_url" :src="player.avatar_url" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
              <img v-else :src="player.avatar_external" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
            </td>

            <td>{{ player.nickname }}</td>
            <td>{{ player.status }}</td>
            <td v-if="edit === 1">
              <router-link :to="{ name: 'updatePlayer', params: {id: player.id} }" class="pe-2 text-info">
                <font-awesome-icon icon="fa-solid fa-user-pen"/>
              </router-link>
              <a @click="$store.dispatch('deletePlayer',player.id)" href='#' class="pe-2 text-danger" title="Eliminar">
                <font-awesome-icon :icon="['fa-solid', 'fa-user-slash']"/>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
        <nav aria-label="Navegación">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" @click="setUrlFirst" href="#">Primero</a>
            </li>
            <li v-if="players.links.next" class="page-item">
              <a class="page-link" @click="setUrlNext" href="#">Siguiente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'PlayerList',
  props: {
    edit: {
      type: Number,
      default: 0
    }
  },
  computed: {
    players () {
      return this.$store.getters.getPlayers
    }
  },
  methods: {
    doSearch () {
      this.$store.state.url = 'player'
      this.$store.dispatch('initApp', this.players)
    },
    setUrlFirst () {
      this.$store.state.url = 'player'
      this.$store.dispatch('initApp', this.players)
    },
    setUrlNext () {
      this.$store.state.url = this.players.links.next
      this.$store.dispatch('initApp', this.players)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>

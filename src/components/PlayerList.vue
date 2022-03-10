<template>
  <div class="site-navbar-small text-center">
    <div class="p-4">
      <div class="col-12 col-xl-10 offset-xl-1 pt-5">
        <h1 class="title text-primary">Salón de la fama</h1>
        <p class="">Nuestros mejores guerreros estan aquí</p>
        <p v-if="edit === 1" class="text-center">
          <router-link to="/nuevo-jugador" class="btn btn-primary btn-sm">Nuevo jugador</router-link>
        </p>
        <form
          @submit.prevent="onSubmit">
          <div class="input-group mb-3">
            <input type="text" class="form-control form-control-lg" placeholder="Ingrese el término a buscar..."
                   aria-label="Término a buscar" aria-describedby="button-addon2" v-model="$store.state.q"
                   @keyup.enter="doSearch" @focusout="doSearch">
            <span class="input-group-text search-icon" id="button-addon2" @click="doSearch">
              <font-awesome-icon :icon="['fa-solid', 'fa-magnifying-glass']" />
            </span>
          </div>
        </form>
        <div class="row mt-5">
          <div class="col-6 mb-5" v-for="(player) in players.records" :key="player.id">
            <div class="player-single">
              <div class="top-area row">
                <div class="col-5">
                  <div class="icon">
                    <img v-if="player.avatar_url" :src="player.avatar_url" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
                    <img v-else :src="player.avatar_external" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
                    <span class="ranking">
                      {{ player.ranking }}
                      <span :class="player.status"><font-awesome-icon :icon="['fas', 'fa-star']"/></span>
                    </span>
                  </div>
                </div>
                <div class="col-7">
                  <h4 class="text-start mt-4">{{ player.nickname }}</h4>
                </div>
              </div>
              <div class="bottom-area">
                <div class="mb-3">
                  <small><b>ID:</b> {{ player.id }}</small>
                </div>
                <div v-if="edit === 1">
                  <router-link :to="{ name: 'updatePlayer', params: {id: player.id} }" class="btn btn-sm btn-secondary me-2">
                    <font-awesome-icon icon="fa-solid fa-user-pen"/> Actualizar
                  </router-link>
                  <a @click="$store.dispatch('deletePlayer',player.id)" href='#' class="btn btn-sm btn-secondary me-2" title="Eliminar">
                    <font-awesome-icon :icon="['fa-solid', 'fa-user-slash']"/> Eliminar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Navegación">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" @click="setUrlFirst" href="q#">Primero</a>
            </li>
            <li v-if="players.links.prev" class="page-item">
              <a class="page-link" @click="setUrlPrev" href="#">Anterior</a>
            </li>
            <li v-if="players.links.next" class="page-item">
              <a class="page-link" @click="setUrlNext" href="#">Siguiente</a>
            </li>
            <li v-if="players.links.last" class="page-item">
              <a class="page-link" @click="setUrlLast" href="#">Último</a>
            </li>
          </ul>
        </nav>
        <p>Total registros: {{ players.total_count }}</p>
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
    setUrlPrev () {
      this.$store.state.url = this.players.links.prev
      this.$store.dispatch('initApp', this.players)
    },
    setUrlNext () {
      this.$store.state.url = this.players.links.next
      this.$store.dispatch('initApp', this.players)
    },
    setUrlLast () {
      this.$store.state.url = this.players.links.last
      this.$store.dispatch('initApp', this.players)
    },
    onSubmit (e) {
      e.preventDefault()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>

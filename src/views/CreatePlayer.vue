<template>
  <div class="container-fluid g-lg-0">
    <div class="row g-0 pb-5">
      <div class="col-lg-4 bg-fame d-none d-lg-block"></div>
      <div class="col-lg-8 offset-lg-4">
        <div class="site-navbar-small text-center">
          <div class="p-4">
            <div class="col-12 col-xl-8 offset-xl-2 pt-5">
              <h1 class="title text-primary">Nuevo jugador</h1>
              <form
                @submit.prevent="onSubmit"
                class="player-form mt-5">
                <div class="mb-3">
                  <label for="nickname" class="form-label text-primary">Nickname</label>
                  <input v-model="player.nickname" type="text" class="form-control" id="nickname" aria-describedby="nicknameHelp">
                  <div id="nicknameHelp" class="form-text">Ingresa nombre de jugador</div>
                </div>
                <div class="mb-3">
                  <label for="status" class="form-label text-primary">Estado</label>
                  <select v-model="player.status" class="form-select" id="status" aria-describedby="statusHelp">
                    <option value="">Seleccione uno</option>
                    <option v-for="s in statusArray" :key="s">{{ s }}</option>
                  </select>
                  <div id="statusHelp" class="form-text">Selecciona el estado entre las opciones</div>
                </div>
                <div class="mb-3">
                  <label for="avatar" class="form-label text-primary">Avatar</label>
                  <input type="file" @change="setAvatar" class="form-control" id="avatar" aria-describedby="avatarHelp">
                  <div id="avatarHelp" class="form-text">Selecciona una imagen para usarlo como tu avatar</div>
                </div>
                <div class="mb-3">
                  <label for="ranking" class="form-label text-primary">Ranking</label>
                  <input v-model="player.ranking" type="number" class="form-control" id="ranking" aria-describedby="rankingHelp">
                  <div id="rankingHelp" class="form-text">Ingresa los puntos del jugador</div>
                </div>
                <button type="submit" class="btn btn-primary btn-sm me-2" @click="createPlayer">Crear</button>
                <router-link to="/salon-fama" class="btn btn-secondary btn-sm">Cancelar</router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/salon-fama.css'

export default {
  name: 'CreatePlayerView',
  data: () => ({
    loggedIn: 'S',
    statusArray: ['oro', 'plata', 'bronce'],
    player: {
      nickname: null,
      status: null,
      avatar: null,
      ranking: null
    }
  }),
  methods: {
    createPlayer () {
      this.$store.dispatch('addPlayer', this.player).then(() => {
        this.$router.push('/salon-fama')
        this.$notify({ group: 'notifications', type: 'success', title: 'Jugador creado', text: 'El jugador ha sido creado con éxito' })
      })
    },
    setAvatar (e) {
      const file = e.target.files || e.dataTransfer.files
      if (!file.length) {
        return
      }

      this.player.avatar = file[0]
    }
  }
}
</script>

<style scoped>

</style>

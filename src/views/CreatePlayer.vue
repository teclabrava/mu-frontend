<template>
  <div class="page-register layout-full pt-5 bd-gray-200">
    <div class="page align-middle text-center">
      <div class="page-content ">
        <div class="p-4 pt-5">
          <h1 class="title text-primary pt-5">Nuevo jugador</h1>
          <form
            @submit.prevent="onSubmit"
            class="player-form mt-5">
            <div class="form-floating mb-3">
              <input v-model="player.nickname" type="text" class="form-control" id="nickname" aria-describedby="nicknameHelp">
              <label for="nickname">Nickname</label>
            </div>
            <div class="form-floating mb-3">
              <select v-model="player.status" class="form-select" id="status" aria-describedby="statusHelp">
                <option selected>Seleccione uno</option>
                <option v-for="s in statusArray" :key="s">{{ s }}</option>
              </select>
              <label for="status">Selecciona el estado entre las opciones</label>
            </div>

            <div class="mb-3">
              <input type="file" @change="setAvatar" class="form-control" id="avatar" aria-describedby="avatarHelp">
              <div id="avatarHelp" class="form-text">Selecciona una imagen para usarlo como tu avatar</div>
            </div>
            <div class="form-floating mb-3">
              <input v-model="player.ranking" type="number" class="form-control" id="ranking" aria-describedby="rankingHelp">
              <label for="ranking">Ranking</label>
            </div>
            <button type="submit" class="btn bg-primary text-light btn-sm me-2" @click="createPlayer">Crear</button>
            <router-link to="/salon-fama" class="btn btn-secondary btn-sm">Cancelar</router-link>
          </form>
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

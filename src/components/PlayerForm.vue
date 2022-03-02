<template>
  <form
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
    <button type="submit" class="btn btn-primary btn-sm me-2" @click="savePlayer">Crear</button>
    <router-link to="/administracion" class="btn btn-secondary btn-sm">Cancelar</router-link>
  </form>
</template>

<script>

export default {
  name: 'PlayerForm',
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    loggedIn: 'S',
    statusArray: ['oro', 'plata', 'bronce']
  }),
  computed: {
    player () {
      return this.id
        ? this.$store.getters.getPlayer
        : {
            nickname: null,
            status: null,
            avatar: null,
            ranking: null
          }
    }
  },
  methods: {
    savePlayer () {
      const saveMethod = this.player.id ? 'updatePlayer' : 'addPlayer'
      this.$store.dispatch(saveMethod, this.player).then(() => {
        return this.$router.push('/salon-fama')
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

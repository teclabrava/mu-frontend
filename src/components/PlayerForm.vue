<template>
  <form
    @submit.prevent="onSubmit"
    class="player-form mt-5">
    <input v-if="player.id" v-model="player.id" type="hidden" />
    <div class="mb-3">
      <label for="nickname" class="form-label text-primary">Nickname *</label>
      <input v-model="player.nickname" type="text" class="form-control" id="nickname" aria-describedby="nicknameHelp">
      <div v-if="validation.hasError('player.nickname')" class="alert alert-danger form-text" role="alert">
        {{ validation.firstError('player.nickname') }}
      </div>
      <div id="nicknameHelp" class="form-text">Ingresa nombre de jugador</div>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label text-primary">Estado *</label>
      <select v-model="player.status" class="form-select" id="status" aria-describedby="statusHelp">
        <option value="">Seleccione uno</option>
        <option v-for="s in statusArray" :key="s">{{ s }}</option>
      </select>
      <div v-if="validation.hasError('player.status')" class="alert alert-danger form-text" role="alert">
        {{ validation.firstError('player.status') }}
      </div>
      <div id="statusHelp" class="form-text">Selecciona el estado entre las opciones</div>
    </div>
    <div class="mb-3">
      <label for="avatar" class="form-label text-primary">Avatar *</label>
      <input type="file" @change="setAvatar" class="form-control" id="avatar" aria-describedby="avatarHelp">
      <div v-if="validation.hasError('player.avatar')" class="alert alert-danger form-text" role="alert">
        {{ validation.firstError('player.avatar') }}
      </div>
      <div id="avatarHelp" class="form-text">Selecciona una imagen para usarlo como tu avatar</div>
    </div>
    <div class="mb-3">
      <label for="ranking" class="form-label text-primary">Ranking *</label>
      <input v-model="player.ranking" type="number" class="form-control" id="ranking" aria-describedby="rankingHelp">
      <div v-if="validation.hasError('player.ranking')" class="alert alert-danger form-text" role="alert">
        {{ validation.firstError('player.ranking') }}
      </div>
      <div id="rankingHelp" class="form-text">Ingresa los puntos del jugador</div>
    </div>
    <button type="submit" class="btn btn-primary btn-sm me-2" @click="savePlayer">{{ id ? 'Actualziar' : 'Crear' }}</button>
    <router-link to="/administracion" class="btn btn-secondary btn-sm">Cancelar</router-link>
  </form>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator
export default {
  name: 'PlayerForm',
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: () => ({
    loggedIn: 'S',
    statusArray: ['oro', 'plata', 'bronce'],
    errors: []
  }),
  computed: {
    player () {
      return this.$props.id
        ? this.$store.getters.getPlayer
        : {
            nickname: null,
            status: null,
            avatar: null,
            ranking: null
          }
    }
  },
  validators: {
    'player.nickname': function (value) {
      return Validator.value(value).required('Este campo es obligatorio')
    },
    'player.status': function (value) {
      return Validator.value(value).required('Este campo es obligatorio')
    },
    'player.avatar': function (value) {
      return Validator.value(value).required('Este campo es obligatorio')
    },
    'player.ranking': function (value) {
      return Validator.value(value).integer().required('Este campo es obligatorio y debe ser un entero')
    }
  },
  methods: {
    savePlayer () {
      this.$validate().then(function (success) {
        const saveMethod = this.$props.id ? 'updatePlayer' : 'addPlayer'
        const type = this.id ? 'actualizado' : 'creado'
        this.$store.dispatch(saveMethod, this.player).then(() => {
          this.$router.push('hallFame')
          this.$notify({ group: 'notifications', type: 'success', title: `Jugador ${type}`, text: `El jugador ha sido ${type} con éxito` })
        })
      })
    },
    setAvatar (e) {
      const file = e.target.files || e.dataTransfer.files
      if (!file.length) {
        return
      }

      this.player.avatar = file[0]
    },
    onSubmit (e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>

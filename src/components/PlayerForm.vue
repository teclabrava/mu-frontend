<template>
  <div class="mt-5">
    <div class="card-player">
      <img v-if="player.avatar_url" :src="player.avatar_url" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
      <img v-else-if="player.avatar_external" :src="player.avatar_external" class="img-thumbnail rounded-circle avatar-player" :alt="player.nickname" />
    </div>
    <div class="card">
      <div class="card-body p-5">
        <form
          @submit.prevent="onSubmit"
          class="form-floating player-form mt-5">
          <input v-if="$store.state.playerId" v-model="$store.state.playerId" type="hidden" />
          <div class="form-floating mb-3">
            <input v-model="player.nickname" placeholder="Ingresa nombre de jugador"
                   :class="{ 'is-invalid': validation.hasError('player.nickname') }"
                   type="text" class="form-control" id="nickname">
            <label for="nickname" class="form-label text-primary"
                   :class="{ 'is-invalid': validation.hasError('player.nickname') }">Nickname *</label>
            <div v-if="validation.hasError('player.nickname')" class="invalid-feedback">
              {{ validation.firstError('player.nickname') }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <select v-model="player.status" class="form-select" id="status"
                    :class="{ 'is-invalid': validation.hasError('player.status') }">
              <option value="">Selecciona el estado entre las opciones</option>
              <option v-for="s in statusArray" :key="s">{{ s }}</option>
            </select>
            <label for="status" class="form-label text-primary"
                   :class="{ 'is-invalid': validation.hasError('player.status') }">Estado *</label>
            <div v-if="validation.hasError('player.status')" class="invalid-feedback" role="alert">
              {{ validation.firstError('player.status') }}
            </div>
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label text-primary"
                   :class="{ 'is-invalid': validation.hasError('player.avatar') }">Avatar
              <span v-if="!$store.state.playerId">*</span></label>
            <input type="file" @change="setAvatar" class="form-control" id="avatar"
                   :class="{ 'is-invalid': validation.hasError('player.avatar') }">
            <div v-if="!$store.state.playerId">
              <div v-if="validation.hasError('player.avatar')" class="invalid-feedback" role="alert">
                {{ validation.firstError('player.avatar') }}
              </div>
            </div>
          </div>

          <div class="form-floating mb-3">
            <input v-model="player.ranking" type="number" class="form-control" id="ranking"
                   :class="{ 'is-invalid': validation.hasError('player.ranking') }">
            <label for="ranking" class="form-label text-primary"
                   :class="{ 'is-invalid': validation.hasError('player.avatar') }">Ranking *</label>
            <div v-if="validation.hasError('player.ranking')" class="invalid-feedback" role="alert">
              {{ validation.firstError('player.ranking') }}
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <button type="submit" class="btn btn-primary btn-sm me-2">{{ $store.state.playerId ? 'Actualizar' : 'Crear' }}</button>
              <router-link to="/salon-fama" class="btn btn-secondary btn-sm">Cancelar</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator
export default {
  name: 'PlayerForm',
  data: () => ({
    loggedIn: 'S',
    statusArray: ['oro', 'plata', 'bronce'],
    errors: []
  }),
  computed: {
    player () {
      return this.$store.state.playerId
        ? this.$store.getters.getPlayer
        : {
            nickname: null,
            status: '',
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
    setAvatar (e) {
      const file = e.target.files || e.dataTransfer.files
      if (!file.length) {
        return
      }
      this.player.avatar = file[0]
    },
    onSubmit () {
      const self = this
      this.$validate().then(success => {
        if (success) {
          const saveMethod = self.$store.state.playerId ? 'updatePlayer' : 'addPlayer'
          const type = self.$store.state.playerId ? 'actualizado' : 'creado'
          console.log('PlayerForm: ', self.player)
          self.$store.dispatch(saveMethod, self.player).then(() => {
            self.$notify({ group: 'notifications', type: 'success', title: `Jugador ${type}`, text: `El jugador ha sido ${type} con éxito` })
            self.$router.push('/salon-fama')
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

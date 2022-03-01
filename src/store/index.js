import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  getters: {
    getPlayers (state) {
      return state.players
    }
  },
  mutations: {
    initPlayers (state, players) {
      state.players = players
    },
    addPlayer (state, player) {
      state.players.push(player)
    },
    updatePlayer (state, player) {
      const index = state.players.findIndex((c) => c.id === player.id)
      if (index > -1) {
        state.players[index] = player
      }
    },
    deletePlayer (state, playerID) {
      const index = state.players.findIndex((c) => c.id === playerID)
      if (index > -1) {
        state.players.splice(index, 1)
      }
    }
  },
  actions: {
    initApp (context) {
      axios.get('player').then((response) => {
        context.commit('initPlayers', response.data)
      })
    },
    addPlayer (context, player) {
      return axios
        .post('player', JSON.stringify(player))
        .then((response) => {
          context.commit('addPlayer', {
            id: response.data.insert_id,
            ...player
          })
        })
    },
    updatePlayer (context, player) {
      return axios
        .put('player', JSON.stringify(player))
        .then((response) => {
          context.commit('updatePlayer', player)
        })
    },
    deletePlayer (context, playerID) {
      return axios
        .delete('player', JSON.stringify({ id: playerID }))
        .then((response) => {
          context.commit('deletePlayer', playerID)
        })
    }
  },
  modules: {}
})

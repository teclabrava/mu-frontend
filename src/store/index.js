import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: {
      last: null,
      per_page: null,
      page_count: null,
      total_count: null,
      records: null,
      links: {
        first: null,
        prev: null,
        next: null,
        last: null
      }
    },
    player: null,
    q: null,
    playerId: null,
    url: 'player'
  },
  getters: {
    getPlayers (state) {
      return state.players
    },
    getPlayer (state) {
      return state.player
    },
    getPlayerId (state) {
      return state.playerId
    }
  },
  mutations: {
    initPlayers (state, players) {
      state.players = players
    },
    getPlayer (state, player) {
      state.player = player
      state.playerId = player.id
    },
    setPlayerId (state, playerId) {
      state.playerId = playerId
    }
  },
  actions: {
    initApp (context) {
      axios.get(this.state.url, { params: { q: this.state.q } }).then((response) => {
        context.commit('initPlayers', response.data)
      })
    },
    addPlayer: function (context, player) {
      const data = new FormData()
      const { nickname, status, avatar, ranking } = player
      data.append('nickname', nickname)
      data.append('status', status)
      data.append('avatar', avatar)
      data.append('ranking', parseInt(ranking))
      return axios
        .post('player', data)
        .then((response) => {
          context.dispatch('initApp')
        })
    },
    updatePlayer (context, player) {
      const data = new FormData()
      data.append('nickname', player.nickname)
      data.append('status', player.status)
      data.append('avatar', player.avatar)
      data.append('ranking', parseInt(player.ranking))
      data.append('_method', 'PUT')
      console.log('data', data)
      return axios
        .post('player/' + player.id, data)
        .then((response) => {
          context.dispatch('initApp')
        })
    },
    getPlayer (context, playerID) {
      return axios
        .get('player/' + playerID)
        .then((response) => {
          context.commit('getPlayer', response.data)
        })
    },
    deletePlayer (context, playerID) {
      return axios
        .delete('player/' + playerID)
        .then((response) => {
          context.dispatch('initApp')
        })
    }
  },
  modules: {}
})

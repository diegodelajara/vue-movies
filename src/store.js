import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLogged: false,
    user: '',
    token: '',
    refreshToken: ''
  },
  mutations: {
    setIsLogged (state, value) {
      state.isLogged = value
    },
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setRefreshToken(state, payload) {
      state.refreshToken = payload
    }
  }
})

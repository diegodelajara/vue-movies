import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLogged: false,
    user: '',
    token: '',
    tokenType: '',
    refreshToken: '',
    movie: {},
    imageBaseUrl: ''
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
    setTokenType(state, payload) {
      state.tokenType = payload
    },
    setRefreshToken(state, payload) {
      state.refreshToken = payload
    },
    setMovie(state, payload) {
      state.movie = payload
    },
    setImageBaseUrl(state, payload) {
      state.imageBaseUrl = payload
    }
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getToken(state) {
      return state.token
    },
    getTokenType(state) {
      return state.tokenType
    },
    getRefreshToken(state) {
      return state.refreshToken
    },
    getMovie(state) {
      return state.movie
    },
    getImageBaseUrl(state) {
      return state.imageBaseUrl
    }
  },
  plugins: [createPersistedState()]
})

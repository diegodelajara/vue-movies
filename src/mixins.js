


export const myMixin = {
  methods: {
    async onRefreshToken() {
      try {
        const url = `api/auth/refresh`
        const resp = await this.$http.post(url,
          {
            "refresh_token": this.$store.getters.getRefreshToken
          })
        this.$store.commit('setToken', resp.data.data.payload.token)
      } catch (error) {
        console.log('%c error', 'color:tomato', error)
      }
    }
  }
}
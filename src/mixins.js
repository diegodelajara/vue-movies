


export const myMixin = {
  methods: {
    async onRefreshToken() {
      try {
        const url = `api/auth/refresh`
        const resp = await this.$http.post(url,
          {
            "refresh_token": this.$store.getters.getRefreshToken
          },
          {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          }
        })
        this.$store.commit('setToken', resp.data.data.payload.token)
        this.$store.commit('setRefreshToken', resp.data.data.payload.refresh_token)
      } catch (error) {
        console.log('%c error', 'color:tomato', error)
      }
    }
  }
}
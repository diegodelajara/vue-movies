<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                              v-model="username"
                           ></v-text-field>

                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="pass"
                           ></v-text-field>
                        </v-form>
                        <p v-if="errors.length">
                           <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                           <ul>
                              <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                           </ul>
                        </p>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                           color="primary"
                           @click="onLogin"
                           depressed
                           :loading="loading"
                           :disabled="loading"
                        >Login
                        </v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>

export default {
   data() {
      return {
         errors: [],
         loading: false,
         pass: 'agile1234',
         page: 1,
         username: 'agilesoft',
      }
   },
   methods: {
      async onLogin(e) {
         e.preventDefault()

         if (this.username && this.pass) {
            this.loading = true
            try {
               const url = 'api/auth/login'
               const resp = await this.$http.post(url, {
                  username: this.username,
                  password: this.pass
               })
               this.$store.commit('setIsLogged', true)
               this.$store.commit('setUser', resp.data.data.user)
               this.$store.commit('setToken', resp.data.data.payload.token)
               this.$store.commit('setRefreshToken', resp.data.data.payload.refresh_token)
               this.$store.commit('setTokenType', resp.data.data.payload.type)
               this.$router.push("/home")
            } catch (error) {
               console.log('%c error', 'color:tomato', error)
            }
            this.loading = false
         } else {
            if (!this.name)
               this.errors.push('El nombre de usuario es obligatorio.')
            if (!this.age)
               this.errors.push('La contraseña es obligatoria.')
         }
      }
   }
}
</script>

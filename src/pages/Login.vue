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
                        <v-btn color="primary" @click="onLogin">Login</v-btn>
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
         username: 'agilesoft',
         pass: 'agile1234'
      }
   },
   methods: {
      onLogin(e) {
         e.preventDefault();
         console.log(this.username);
         console.log(this.pass);
         if (!this.name) {
            this.errors.push('El nombre es obligatorio.');
         }
         if (!this.age) {
            this.errors.push('La edad es obligatoria.');
         }
      }
   }
}
</script>

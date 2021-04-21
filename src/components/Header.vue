<template>
  <v-toolbar
    color="cyan"
    dark
  >

    <v-spacer></v-spacer>
    <span class="mr-3">Hola {{getUser.firstName}}</span>
    <v-btn icon>
      <v-img
        :src="require('../assets/undraw_profile.svg')"
        class="my-3"
        contain
        height="50"
      />
    </v-btn>
  </v-toolbar>
  <!-- <header>
  <div class="profile">
    <span>Hola {{getUser.firstName}}</span>
    <v-img
      :src="require('../assets/undraw_profile.svg')"
      class="my-3"
      contain
      height="50"
        />
  </div>
</header> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getUser'
    ])
  }
}
</script>

<style>

  header {
    display: flex;
    justify-content: flex-end;
    padding: 5px;;
  }
  header img {
    padding-left: 10px;
  }
</style>
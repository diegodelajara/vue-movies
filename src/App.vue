<template>
  <v-app>
    <router-view class="myFont"></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
.myFont {
  font-family: 'Montserrat', sans-serif; 
}
</style>
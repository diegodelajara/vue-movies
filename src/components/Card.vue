<template>
  <v-card
    class="mx-auto my-12 "
    max-width="374"
    @click="openDetail()"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="250"
      :src="baseImg + card.backdrop_path"
    ></v-img>

    <v-card-title>{{ card.title }}</v-card-title>

    <v-card-text>
      <div>{{ card.overview }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
  export default {
    props: {
      card: {
        required: true,
        type: Object
      },
      baseImg: {
        required: true,
        type: String
      }
    },
    data () {
      return {
      }
    },
    methods: {
      openDetail() {
        this.$emit('on-open-details', this.card)
      }
    }
  }
</script>

<style lang="scss">
  
  // .now-playing-container {
  //   flex: 1;
  //   display: flex;
  //   overflow: auto;
  // }

  // .now-playing {
  //   display: flex;
  //   min-height: min-content;
  //   padding: 0 0 4rem 0;
  // }
</style>
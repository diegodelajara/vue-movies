<template>
  <v-card
    class="mx-auto my-12 "
    max-width="374"
    @click="openDetail()"
    :height="cardHeight"
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
      :src="image"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text :style="`overflow-y: auto; height:${cardTextHeight}`">
      <div class="text-truncate">{{ overview }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      card: {
        required: true
      },
      title: {
        required: true,
        type: String,
        default: 'asadasda'
      },
      idCard: {
        required: true,
        type: Number
      },
      image: {
        required: true,
        type: String
      },
      overview: {
        required: true,
        type: String
      },
      baseImg: {
        required: true,
        type: String
      },
      cardHeight: {
        required: true,
        type: String
      },
      cardTextHeight: {
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
<template>
  <section>

    <div class="detail-movie-container">
      <h1>{{ getMovie.title }}</h1>
      <div
        class="bg-image"
        :style="{'background-image': 'url(' + getImageBaseUrl + getMovie.poster_path + ')'}"
      ></div>
      <div class="description">
        <div
          class="bg-image"
          :style="{'background-image': 'url(' + getImageBaseUrl + getMovie.backdrop_path + ')'}"
        ></div>
        <span>{{ getMovie.overview }}</span>
      </div>
      <h2>Reparto</h2>
      <!-- <div class="characters">
        <div class="character-card" *ngFor="let actor of actors | keyvalue">
          <img [src]="imageBaseUrl + actor.value.profile_path" alt="">
          <p>{{ actor.value.name }}</p>
        </div>
      </div> -->
    </div>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  beforeCreate() {
    if (!this.$store.getters.getUser) {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters([
      'getImageBaseUrl',
      'getMovie'
    ])
   }
}
</script>

<style lang="scss" scoped>
  .detail-movie-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .detail-movie-container > .bg-image {
    height: 800px;
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    background-color: #3C3A3B;
    border-radius: 7px;
  }
</style>
<template>
  <section>
    <Header />

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
      <div class="characters">
        <div class="character-card" v-for="actor in actors" :key="actor.id">
          <img :src="getImageBaseUrl + actor.profile_path" alt="">
          <p>{{ actor.name }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Header from "../components/Header"
import {mapGetters} from 'vuex'

export default {
  name: 'Details',
  components: {
    Header
  },
  data () {
    return {
      actors: []
    }
  },
  beforeCreate() {
    if (!this.$store.getters.getUser) {
      this.$router.push('/')
    }
  },
  mounted() {
    this.getActors()
  },
  methods: {
    async getActors() {
      try {
        const url = `api/movies/${this.getMovieId}/actors`
        const resp = await this.$http.get(url)
        this.actors = resp.data.data
      } catch (error) {
        console.log('%c error', 'color:tomato', error)
      }
    }
  },
  computed: {
    ...mapGetters([
      'getToken',
      'getTokenType',
      'getImageBaseUrl',
      'getMovie',
      'getMovieId'
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
  .description {
    display: flex;
    margin-top: 21px;
  }

  .description span {
    margin-left: 10px;
  }

  .description > .bg-image {
    width: 220px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex: none;
    border-radius: 4px;
  }
  .characters {
    flex: 1;
    display: flex;
    overflow: auto;
  }
  .character-card {
    flex-direction: column;
    margin: 0 6px;
  }
  .character-card img {
    width: 200px;
  }
</style>
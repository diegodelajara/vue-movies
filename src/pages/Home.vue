<template>
  <section>
    <Header />
    <div>

      <div >
          <h2>Películas en estreno</h2>
          <v-row>
            <div class="now-playing-container" @scroll="loadMore($event, 'h')">
              <Card
                v-for="(item, key) in nowPlayingMovies"
                :card="item"
                :key="key"
                :title="item.title"
                :image="imageBaseUrl + item.backdrop_path"
                :baseImg="imageBaseUrl"
                :idCard="item.id"
                :overview="item.overview"
                cardTextHeight="200px"
                cardHeight="400px"
                @on-open-details="onOpenDetails"
              />
            </div>
          </v-row>
      </div>
      
      
      
      <div class="most-popular-container" @scroll="loadMore($event, 'v')">
        <v-container>
          <h2>Películas más populares</h2>
          <v-row>
            <v-col
              cols="12"
              sm="4"
              md="3"
              v-for="(item, key) in mostPopularMovies"
              :key="key"
            >
              <Card
                :card="item"
                :title="item.title"
                :image="imageBaseUrl + item.backdrop_path"
                :baseImg="imageBaseUrl"
                :overview="item.overview"
                :idCard="item.id"
                @on-open-details="onOpenDetails"
                cardTextHeight="200px"
                cardHeight="400px"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card"
import Header from "../components/Header"
import { myMixin } from "../mixins";

import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    Card,
    Header
  },
  mixins: [myMixin],
  data () {
    return {
      imageBaseUrl: '',
      nowPlayingMovies: [],
      mostPopularMovies: [],
      nowPlayingPage: 1,
      mostPopularPage: 1
    }
  },
  beforeCreate() {
    if (!this.$store.getters.getUser) {
      this.$router.push('/')
    }
  },
  created() {
    this.getNowPlayingMovies()
    this.getMostPopularMovies()
  },
  methods: {
    loadMore(e, pos){
      if (pos === 'h') {
        const { scrollWidth, scrollLeft, offsetWidth } = e.target;
        
        if (offsetWidth + scrollLeft >= scrollWidth) {
          this.nowPlayingPage++
          this.getNowPlayingMovies()
        }

      } else {
        const { offsetHeight, scrollTop, scrollHeight } = e.target
        if (offsetHeight + scrollTop >= scrollHeight) {
          this.mostPopularPage++
          this.getMostPopularMovies()
        }
      }
    },

    async getNowPlayingMovies() {
      try {
        const url = `api/movies/now_playing?page=${this.nowPlayingPage}`
        const resp = await this.$http.get(url)
        const data = resp.data.data
        this.imageBaseUrl = resp.data.imageBaseUrl
        let nowPlayingMoviesAux = []
        if (this.nowPlayingMovies.length > 0) {
          nowPlayingMoviesAux = this.nowPlayingMovies
          data.map(movie => nowPlayingMoviesAux.push(movie))
        } else {
          this.nowPlayingMovies = data
        }
      } catch (error) {
        if (error.response.status === 401) {
          this.onRefreshToken()
        }
      }
    },
    async getMostPopularMovies() {
      try {
        const url = `api/movies/popular?page=${this.mostPopularPage}`
        const resp = await this.$http.get(url)
        const data = resp.data.data
        this.imageBaseUrl = resp.data.imageBaseUrl
        let mostPopularMoviesAux = []
        if (this.mostPopularMovies.length > 0) {
          mostPopularMoviesAux = this.mostPopularMovies
          data.map(movie => mostPopularMoviesAux.push(movie))
        } else {
          this.mostPopularMovies = data
        }
      } catch (error) {
        if (error.response.status === 401) {
          this.onRefreshToken()
        }
      }
    },
    onOpenDetails(movie){
      this.$store.commit('setMovie', movie)
      this.$store.commit('setMovieId', movie.id)
      this.$store.commit('setImageBaseUrl', this.imageBaseUrl)
      this.$router.push('/detalle')
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getToken',
      'getTokenType',
      'getRefreshToken'
    ])
  }
}
</script>

<style lang="scss">
  .now-playing-container {
    flex: 1;
    display: flex;
    overflow: auto;
    margin-left: 4rem;
  }

  .most-popular-container {
    height: 100vh;
    overflow: auto;
  }
</style>
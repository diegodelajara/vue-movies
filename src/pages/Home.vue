<template>
  <section>
      <Header />
      <div >
        <h2>Películas en estreno</h2>
        <div class="now-playing">
          
          <div class="now-playing-container" >
            <Card
              v-for="(item, key) in nowPlayingMovies"
              :key="key"
              :card="item"
              :baseImg="imageBaseUrl"
              @on-open-details="onOpenDetails"
            />
          </div>
        </div>
        
        
        <h2>Películas más populares</h2>
        <div class="more-popular">
          
          <div class="more-popular-container">
            <div class="card movie-card" v-for="(item, key) in morePopularMovies" :key="key">
              <img :src="imageBaseUrl + item.backdrop_path" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <span class="movie-info">{{ item.release_date }}</span>
                <span class="movie-info float-right"><i class="fas fa-star"></i>{{ item.popularity }}</span>
              </div>
            </div>
          </div>
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
  components: {
    Card,
    Header
  },
  mixins: [myMixin],
  data () {
    return {
      imageBaseUrl: '',
      nowPlayingMovies: [],
      morePopularMovies: [],
      nowPlayingPage: 1,
      morePopularPage: 1
    }
  },
  beforeCreate() {
    if (!this.$store.getters.getUser) {
      this.$router.push('/')
    }
  },
  created() {
    this.getNowPlayingMovies()
  },
  methods: {
    async getNowPlayingMovies() {
      try {
        const url = `api/movies/now_playing?page=${this.nowPlayingPage}`
        const resp = await this.$http.get(url, {
          headers: {
            'Authorization': `${this.getTokenType} ${this.getToken}`,
            'Content-Type': 'application/json; charset=utf-8',
          }
        })
        this.imageBaseUrl = resp.data.imageBaseUrl
        this.nowPlayingMovies = resp.data.data
      } catch (error) {
        this.onRefreshToken()
      }
    },
    onOpenDetails(movie){
      this.$store.commit('setMovie', movie)
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
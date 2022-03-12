import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      discoverMovie: [],
      genreList: [],
      mvMovieCount: 0,
      movieDetails: {}
    }
  },
  mutations: {
    SET_DISCOVER_MOVIE: (state, payload) => state.discoverMovie = payload,
    SET_GENRE_LIST: (state, payload) => state.genreList = payload,
    COUNT_PLUS_MY_MOVIE_COUNT: (state) => {state.mvMovieCount++},
    SET_MOVIE_DETAIL: (state, payload) => state.movieDetails = payload,
  },
  actions: {
    async getDiscoverMovie(context, payload) {
      const { data } = await axios({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY}`,
        method: 'GET',
        params: payload,
      })
      context.commit('SET_DISCOVER_MOVIE', data.results)
    },
    async getMoviesGenre({commit}, payload) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
      commit('SET_GENRE_LIST',data.genres)
    },
    async searchMovie({commit}, payload) {
      //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
      const {data} = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`

      })
    },
    async getMovieDetails({commit},id){
      let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
      commit('SET_MOVIE_DETAIL', data)

    }
  }
})
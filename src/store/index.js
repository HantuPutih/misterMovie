import axios from 'axios'
import { createStore } from 'vuex'
const api_key = '0621649cb72aeff1297fb8b3ab083b4f'

// Create a new store instance.
export default createStore({
  state () {
    return {
      discoverMovie: [],
      genreList: [],
      mvMovieCount: 0,

    }
  },
  mutations: {
    SET_DISCOVER_MOVIE: (state, payload) => state.discoverMovie = payload,
    SET_GENRE_LIST: (state, payload) => state.genreList = payload,
    COUNT_TPLUS_MY_MOVIE_COUNT: (state) => {state.mvMovieCount++}
  },
  actions: {
    async getDiscoverMovie(context, payload) {
      const { data } = await axios({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
        method: 'GET',
        params: payload,
      })
      context.commit('SET_DISCOVER_MOVIE', data.results)
    },
    async getMoviesGenre({commit}, payload) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
      commit('SET_GENRE_LIST',data.genres)
    },
    async searchMovie({commit}, payload) {
      //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    }
  }
})
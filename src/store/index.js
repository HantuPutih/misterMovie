import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      discoverMovie: [],
      tempMovies: [],
      filteredMovieByGenre: [],
      genreList: [],
      mvMovieCount: 0,
      movieDetails: {},
      movieRecommendation:[],
      movieReviews: [],
      searchResult: [],
      trendingMovie: []
    }
  },
  mutations: {
    SET_DISCOVER_MOVIE: (state, payload) => state.discoverMovie = payload,
    SET_FILTERED_MOVIE_BY_GENRE: (state, payload) => state.tempMovies = [...payload],
    SET_GENRE_LIST: (state, payload) => state.genreList = payload,
    COUNT_PLUS_MY_MOVIE_COUNT: (state) => state.mvMovieCount++,
    SET_MOVIE_DETAIL: (state, payload) => state.movieDetails = payload,
    SET_MOVIE_RECOMMENDATION: (state, payload) => state.movieRecommendation = payload,
    SET_MOVIE_REVIEWS: (state, payload) => state.movieReviews = payload,
    SET_SEARCH_RESULT: (state, payload) => state.searchResult = payload,
    SET_TRENDING_MOVIE: (state, payload) => state.trendingMovie = payload
  },
  actions: {
    async getDiscoverMovie(context, payload) {
      payload = {
        ...payload,
        api_key: process.env.VUE_APP_API_KEY
      }
      const { data } = await axios({
        url: `https://api.themoviedb.org/3/discover/movie`,
        method: 'GET',
        params: payload,
      })
      context.commit('SET_DISCOVER_MOVIE', data.results)
      context.commit('SET_FILTERED_MOVIE_BY_GENRE', data.results)
    },
    async getMoviesGenre({commit}) {
      const { data: { genres} } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
      commit('SET_GENRE_LIST', genres?.slice(0,11))
    },
    async searchMovie({commit}, searchValue) {
      const {data} = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&query=${searchValue}`
      })
      commit('SET_SEARCH_RESULT', data.results)
    },

    async getPopularMovie({commit}, payload) {
      const { data: {results} } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}`)
      commit('SET_TRENDING_MOVIE', results)
    },


    //details page
    async getMovieDetails({commit},id){
      let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
      commit('SET_MOVIE_DETAIL', data)
    },
    async getMovieRecommendation({ commit }, id) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
      commit('SET_MOVIE_RECOMMENDATION', data.results?.slice(0,5) )
    },
    async getMovieReviews({commit}, id) {
      const { data } = await axios.get(`
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.VUE_APP_API_KEY}`)
      commit('SET_MOVIE_REVIEWS', data.results?.slice(0,2))
    }
  }
})
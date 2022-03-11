import axios from 'axios'
import { createStore } from 'vuex'
const api_key = '0621649cb72aeff1297fb8b3ab083b4f'

// Create a new store instance.
export default createStore({
  state () {
    return {
      discoverMovie: []
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_DISCOVER_MOVIE: (state, payload) => state.discoverMovie = payload
  },
  actions: {
    async getDiscoverMovie(context, payload) {
      // try {
        const { data } = await axios({
          url: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.asc`,
          method: 'GET',
          params: payload,
        })
      context.commit('SET_DISCOVER_MOVIE', data.results)
      console.log(data)
      // } catch (e) {
      //   throw e
      //   console.log(e)
      // }
    },
  }
})
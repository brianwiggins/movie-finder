import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie;
    }
  },
  actions: {
    async getMovies({ commit, dispatch }, query) {
      try {
        let res = await _api.get("movie?api_key=eea60a9096ee464ce6a5f4b0cbd5af37&page=1&query=" + query)
        commit("setMovies", res.data.results);
      } catch (e) {
        console.error(e);
      }
    },
    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie)
    }
  }
})



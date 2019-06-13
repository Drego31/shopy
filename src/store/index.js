import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    some: {
      namespaced: true,
      state: {
        some: false,
      },
      getters: {
        some: state => state.some,
      },
      mutations: {
        setSome: state => state.some = true,
      },
    },
  },
})

export default store

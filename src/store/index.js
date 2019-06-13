import Vue from 'vue'
import Vuex from 'vuex'
import Image from '@/assets/main-photo.png'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: {
      namespaced: true,
      state: {
        list: [
          {
            id: 1,
            img: Image,
            title: 'Title',
            shortDescription: 'Description',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ' +
              'elementum lacus a est pretium pellentesque. Praesent vel ante sagittis, dignissim ' +
              'odio at, finibus leo. Sed ultricies, arcu sit amet volutpat malesuada, massa quam ' +
              'cursus neque, sit amet vehicula eros tellus in nunc. Suspendisse blandit odio in ' +
              'lorem scelerisque tristique. In bibendum sit amet tortor in porta. Nullam tempus ' +
              'facilisis mi id maximus.',
          },
          {
            id: 2,
            img: Image,
            title: 'Title',
            shortDescription: 'Description',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ' +
              'elementum lacus a est pretium pellentesque. Praesent vel ante sagittis, dignissim ' +
              'odio at, finibus leo. Sed ultricies, arcu sit amet volutpat malesuada, massa quam ' +
              'cursus neque, sit amet vehicula eros tellus in nunc. Suspendisse blandit odio in ' +
              'lorem scelerisque tristique. In bibendum sit amet tortor in porta. Nullam tempus ' +
              'facilisis mi id maximus.',
          },
          {
            id: 3,
            img: Image,
            title: 'Title',
            shortDescription: 'Description',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ' +
              'elementum lacus a est pretium pellentesque. Praesent vel ante sagittis, dignissim ' +
              'odio at, finibus leo. Sed ultricies, arcu sit amet volutpat malesuada, massa quam ' +
              'cursus neque, sit amet vehicula eros tellus in nunc. Suspendisse blandit odio in ' +
              'lorem scelerisque tristique. In bibendum sit amet tortor in porta. Nullam tempus ' +
              'facilisis mi id maximus.',
          },
        ],
      },
      getters: {
        articleById: state => id => state.list.find(article => article.id === Number(id)),
      },
      mutations: {
        setSome: state => state.some = true,
      },
    },
  },
})

export default store

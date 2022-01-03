import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Poster } from '~/models/posters'

const token = 'b317c9c5c3f6aa32aa90f77f054fa7e05c238c750b69f531b4cdf8ede40f03f08af37988056546aa56b39f1f68b352def53b7e434538a3f77638a7a66a7b10cf54ccf9abef48b310c4779e9b920d0f0dea876666a2038b1fb78ee2f41d8c235f593c6bf38b54ca703e3bc7d60c67e1b76b6928043b9cb7cee2946572660b30b2'

export const useMainStore = defineStore('main', {

  state: () => ({
    newsletters: [] as Array<Poster>,
    content: {},

  }),
  getters: {
    getNewsletter: (state) => {
      return (id: number) => state.newsletters[id - 1]
    },
    getSvg: (state) => {
      return (id: number) => {
        const newsletter = state.newsletters[id - 1]
        return newsletter?.attributes?.Svg.data.attributes.url
      }
    },
  },
  actions: {
    async getNewsletters() {
      fetch('http://localhost:1337/api/newsletters?populate=*', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`,

        },
      })
        .then(async(res) => {
          // a non-200 response code
          if (!res.ok) {
            // create error instance with HTTP status text
            const error = new Error(res.statusText)
            throw error
          }

          const response = await res.json()
          this.newsletters = response.data
        })
        .catch((error) => {
          return error
        })
    },
    async getContent() {
      fetch('http://localhost:1337/api/content?populate=*', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`,

        },
      })
        .then(async(res) => {
          // a non-200 response code
          if (!res.ok) {
            // create error instance with HTTP status text
            const error = new Error(res.statusText)
            throw error
          }

          const response = await res.json()
          this.content = response.data
        })
        .catch((error) => {
          return error
        })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))

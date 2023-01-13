import axios from 'axios'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Content } from '~/models/content'
import type { Poster } from '~/models/posters'

export const useMainStore = defineStore('main', {

  state: () => ({
    posters: [] as Array<Poster>,
    content: {} as Content,

  }),
  getters: {
    getPoster: (state) => {
      return (id: number) => state.posters[id - 1]
    },
    getSvg: (state) => {
      return (id: number) => {
        const poster = state.posters[id - 1]
        return poster?.attributes?.Svg.data.attributes.url
      }
    },
    getSvgColor: (state) => {
      return (id: number) => {
        const poster = state.posters[id - 1]
        return poster?.attributes?.SvgBackgroundColorHex
      }
    },
  },
  actions: {
    async getPosters() {
      await axios('https://sam.content.canivete.eu/api/posters?populate=*&sort[0]=Order%3Aasc', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          this.posters = response.data.data
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async getContent() {
      await axios('https://sam.content.canivete.eu/api/content?populate=*', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          this.content = response.data.data.attributes
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))

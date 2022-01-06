<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

// they will be rendered correctly in the html results with vite-ssg
import { useMainStore } from '~/stores/main'

useHead({
  title: 'Soft And Messy',
  meta: [
    { name: 'description', content: 'QUEERFEMINISTISCHE AKTIVISTISCHE PERSPEKTIVEN IM DESIGN' },
  ],
})

const main = useMainStore()
main.getPosters()
</script>

<template>
  <router-view />
</template>

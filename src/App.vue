<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { useMainStore } from './stores/main'

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Soft And Messy',
  meta: [
    { name: 'description', content: 'QUEERFEMINISTISCHE AKTIVISTISCHE PERSPEKTIVEN IM DESIGN' },
  ],
})

const main = useMainStore()
main.getNewsletters()
main.getContent()

</script>

<template>
  <router-view />
</template>

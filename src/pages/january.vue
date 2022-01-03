<script setup lang="ts">

import {
  onMounted,
  ref,
} from 'vue'
import { useRoute } from 'vue-router'
// import svgPanZoom from 'svg-pan-zoom'
import panzoom from 'panzoom'

const route = useRoute()
const id = route.params.userId

const headline = ref(null)

// Before the component is mounted, the value
// of the ref is `null` which is the default
// value we've specified above.
onMounted(() =>
//   svgPanZoom(headline.value))
  panzoom(headline.value, {
    bounds: true,
    boundsPadding: 0.5,
    maxZoom: 3,
    minZoom: 0.9,
  }),

console.log(route.params.svg),
)

</script>

<template>
  <div class="bg-[rgba(15,104,77)] overflow-hidden">
    <div ref="headline" class="h-full w-full bg-white">
      <!-- <inline-svg src="/news.svg" /> -->
      <img src="http://localhost:1337/uploads/s_VGNEU_01_84e18fcc8d.svg" alt="">
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: playground
</route>

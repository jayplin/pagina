<script setup lang="ts">

import {
  onMounted,
  ref,
} from 'vue'
// import svgPanZoom from 'svg-pan-zoom'
import panzoom from 'panzoom'

const props = defineProps<{ svg: string }>()

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

)

</script>

<template>
  <div class="bg-[rgba(15,104,77)] overflow-hidden">
    <div ref="headline" class="h-full w-full bg-white">
      <!-- <inline-svg src="/news.svg" /> -->
      <img :src="props.svg" alt="">
    </div>
  </div>
</template>

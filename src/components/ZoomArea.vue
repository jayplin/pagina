<script setup lang="ts">

import {
  onMounted,
  ref,
} from 'vue'
// import svgPanZoom from 'svg-pan-zoom'
import panzoom from 'panzoom'
import { ListLoader } from 'vue-content-loader'

const props = defineProps<{ svg: string; bgColor: string }>()

const poster = ref(null)

// Before the component is mounted, the value
// of the ref is `null` which is the default
// value we've specified above.
onMounted(() =>
//   svgPanZoom(poster.value))
  panzoom(poster.value, {
    bounds: true,
    boundsPadding: 0.5,
    maxZoom: 3,
    minZoom: 0.9,
  }),

)

const loaded = ref(false)
function onImgLoad() {
  loaded.value = true
  console.log(loaded.value)
}
</script>

<template>
  <div class="overflow-hidden h-full" :style="`background-color: ${props.bgColor}`">
    <div ref="poster" class="h-full w-full ">
      <img
        :src="props.svg"
        alt=""
        @load="onImgLoad"
      >
    </div>
    <ListLoader v-if="!loaded" />
  </div>
</template>

<script setup lang="ts">

import {
  computed,
  onMounted, ref,
} from 'vue'

import { useMediaQuery } from '@vueuse/core'

// import svgPanZoom from 'svg-pan-zoom'
import type { PanZoom } from 'panzoom'
import panzoom from 'panzoom'
import { ListLoader } from 'vue-content-loader'

const router = useRouter()

const props = defineProps<{ svg: string; bgColor: string }>()

const poster = ref(null)
let isLargeScreen = ref(false)
let instance: PanZoom | null = null
isLargeScreen = useMediaQuery('(min-width: 1024px)')

// Before the component is mounted, the value
// of the ref is `null` which is the default
// value we've specified above.
onMounted(() => {
  const maxZoomFactor = isLargeScreen.value ? 3 : 6

  instance = panzoom(poster.value, {
    bounds: true,
    boundsPadding: 0.5,
    maxZoom: maxZoomFactor,
    minZoom: 0.9,
  })
})

const loaded = ref(false)
function onImgLoad() {
  loaded.value = true
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
  <div class="fixed top-1 left-1 z-10 ">
    <button class="opacity-80 hover:opacity-100 focus:outline-none" @click="router.back()">
      <carbon-chevron-left
        class="inline-block bg-white  text-2xl"
        :style="`color: ${props.bgColor}`"
      />
    </button>
  </div>
</template>

<style>

</style>

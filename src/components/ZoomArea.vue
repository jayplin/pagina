<script setup lang="ts">

import {
  onMounted, ref,
} from 'vue'

import { useMediaQuery } from '@vueuse/core'
import panzoom from 'panzoom'
const router = useRouter()

const props = defineProps<{ svg: string; bgColor: string }>()

const poster = ref()

let isLargeScreen = ref(false)
isLargeScreen = useMediaQuery('(min-width: 1024px)')

onMounted(() => {
  const maxZoomFactor = isLargeScreen.value ? 3 : 6

  panzoom(poster.value, {
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
  </div>
  <div class="fixed top-1 left-1 z-10 ">
    <button class="opacity-80 hover:opacity-100 focus:outline-none" @click="router.push('/')">
      <carbon-chevron-left
        class="inline-block bg-white  text-5xl"
        :style="`color: ${props.bgColor}`"
      />
    </button>
  </div>
</template>

<style>

</style>

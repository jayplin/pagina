<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <span
      class="lg:text-[3.4rem] text-2xl lg:leading-[1.1]  whitespace-pre-line"
      style="text-shadow: 1px 1px 5px #fff, 1px -1px 31px #ccc; "
    >
      {{ main.content?.Pitch }}
    </span>
    <img class="p-12" :src="main.content.StackedPhotos?.data?.attributes.url">
    <span class="lg:text-3xl text-xl whitespace-pre-line">
      {{ main.content.Introduction }}
    </span>
    <img class="lg:p-28 p-12" :src="main.content.PhotoBelowIntro?.data?.attributes?.url">
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

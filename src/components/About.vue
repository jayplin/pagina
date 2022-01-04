<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <p class="text-4xl">
      {{ main.content.attributes?.Pitch }}
    </p>
    <img :src="main.content.attributes?.StackedPhotos.data.attributes.url">
    <p class="text-4xl">
      {{ main.content.attributes?.Introduction }}
    </p>
    <img class="p-28" :src="main.content.attributes?.PhotoBelowIntro.data.attributes.url">
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

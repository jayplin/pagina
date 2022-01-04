<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <p class="text-4xl">
      {{ main.content?.Pitch }}
    </p>
    <img :src="main.content.StackedPhotos?.data?.attributes.url">
    <p class="text-4xl">
      {{ main.content.Introduction }}
    </p>
    <img class="p-28" :src="main.content.PhotoBelowIntro?.data?.attributes?.url">
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

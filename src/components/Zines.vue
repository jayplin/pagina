<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <div v-for="(zine, index) in main.newsletters" :key="zine.id">
      <p class="text-4xl m-auto text-center">
        {{ zine.attributes.Title }}
      </p>
      <p class="text-4xl">
        {{ zine.attributes.Description }}
      </p>
      <router-link :to="`/posters/${encodeURIComponent(index + 1)}`">
        <img
          class="py-4"
          :src="zine.attributes.Thumbnail.data.attributes.url"
        >
      </router-link>
    </div>
  </div>
</template>

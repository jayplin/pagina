<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <div v-for="(zine, index) in main.newsletters" :key="zine.id" class="p-5">
      <p
        class="text-4xl m-auto text-center font-semibold whitespace-pre-line"
        style="text-shadow: 1px 1px 5px #fff, 1px -1px 31px #ccc;
"
      >
        {{ zine.attributes.Title }}
      </p>
      <p class="text-xl whitespace-pre-line p-4">
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

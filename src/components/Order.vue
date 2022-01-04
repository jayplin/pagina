<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div
    style="    text-shadow: 1px 1px 5px #fff, 1px -1px 31px #ccc;
"
  >
    <div class="flex justify-center p-8">
      <div class="relative justify-center">
        <img class="" :src="main.content.OrderBackgroundPicture?.data?.attributes.url">
        <!-- <img class="bg-dark-300" src="/logopink.png" alt=""> -->

        <p
          class="absolute text-center top-1/5 translate-y-1/2 translate-x-1/2 lg:text-3xl font-semibold"
        >
          {{ main.content.OrderText }}
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <p class=" text-4xl">
        FOLLOW FOR MORE
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

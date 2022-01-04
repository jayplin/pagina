<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="relative justify-center">
        <img class="" :src="main.content.OrderBackgroundPicture?.data?.attributes.url">
        <!-- <img class="bg-dark-300" src="/logopink.png" alt=""> -->

        <p class="absolute text-center top-2/5 translate-y-1/2 translate-x-1/2 text-2xl">
          {{ main.content.OrderText }}
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <p class=" text-2xl">
        FOLLOW FOR MORE
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

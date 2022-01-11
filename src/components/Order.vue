<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div
    style="text-shadow: 1px 1px 5px #fff, 1px -1px 31px #ccc;
"
  >
    <div class="flex justify-center p-20">
      <div class="relative flex justify-center w-full  ">
        <img class="" :src="main.content.OrderBackgroundPicture?.data?.attributes.url">
        <!-- <img class="bg-dark-300" src="/logopink.png" alt=""> -->

        <p
          class="absolute text-center top-23/100 translate-y-1/2 translate-x-1/2 text-xl lg:text-4xl  "
        >
          {{ main.content.OrderText }}
        </p>
      </div>
    </div>
    <div class="flex justify-center p-20">
      <a href="https://www.instagram.com/soft.andmessy/" target="_blank">
        <p class=" lg:text-4xl text-3xl">
          FOLLOW FOR MORE
        </p>
      </a>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

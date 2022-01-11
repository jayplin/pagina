<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()
</script>

<template>
  <div id="about" class="text-[#ff97ff] p-5 flex h-screen flex-col justify-between">
    <div>
      <img src="/logopink.png" class="w-96" alt="">
      <span class="lg:text-3xl text-2xl whitespace-pre-line">
        {{ main.content?.ImprintAddress }}
      </span>
    </div>
    <div>
      <router-link class="text-xl" to="/">
        HOME
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()
</script>

<template>
  <div id="about" class="text-fuchsia-300 p-5">
    <img src="/logopink.png" class="w-96" alt="">

    <span class="text-4xl" style="white-space: pre-line">
      {{ main.content?.ImprintAddress }}
    </span>
  </div>
</template>

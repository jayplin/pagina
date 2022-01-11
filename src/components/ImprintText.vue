<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const main = useMainStore()
</script>

<template>
  <div id="about" class="text-white p-5">
    <span class="lg:text-3xl text-[1.15rem] whitespace-pre-line">
      {{ main.content?.Imprint }}
    </span>
  </div>
</template>

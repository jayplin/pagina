<script setup lang="ts">
import SkeletonIndex from '~/components/SkeletonIndex.vue'
import { useMainStore } from '~/stores/main'

const main = useMainStore()

</script>

<template>
  <div id="about" class="text-white lg:p-18 p-4">
    <div v-if="main.posters.length">
      <section>
        <About />
      </section>

      <section id="zines">
        <Zines />
      </section>

      <section>
        <Order />
      </section>
    </div>

    <SkeletonIndex v-else />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

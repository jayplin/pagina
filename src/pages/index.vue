<script setup lang="ts">
import SkeletonIndex from '~/components/SkeletonIndex.vue'

</script>

<template>
  <div id="about" class="text-white lg:p-18 p-4">
    <Suspense>
      <template #default>
        <div>
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
      </template>

      <template #fallback>
        <SkeletonIndex />
      </template>
    </Suspense>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

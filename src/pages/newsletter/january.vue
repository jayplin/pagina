<script setup lang="ts">

import {
  onMounted,
  ref,
} from 'vue'

// import svgPanZoom from 'svg-pan-zoom'
import panzoom from 'panzoom'

const headline = ref(null)

// Before the component is mounted, the value
// of the ref is `null` which is the default
// value we've specified above.
onMounted(() =>
//   svgPanZoom(headline.value))
  panzoom(headline.value),

)
</script>

<template>
  <div>
    <div ref="headline" class="h-full w-full">
      <inline-svg src="../src/assets/poly.svg" />
    </div>
  </div>
</template>

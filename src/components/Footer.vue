<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue'

import svgPanZoom from 'svg-pan-zoom'

const headline = ref(null)

// Before the component is mounted, the value
// of the ref is `null` which is the default
// value we've specified above.
onMounted(() => {
  // Logs: `Headline`
  console.log(headline)
  svgPanZoom(headline.value)
})

</script>

<template>
  <div>
    <svg ref="headline" height="210" width="500">
      <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
    </svg>
  </div>
</template>

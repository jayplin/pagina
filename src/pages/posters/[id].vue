<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const props = defineProps<{ id: string }>()

const router = useRouter()

const main = useMainStore()

const id = Number(props.id)

main.$subscribe((mutation, state) => {
  if (main.posters.length) {
    if (!main.getPoster(id))
      router.push('/posters/error')
  }
})
</script>

<template>
  <ZoomArea :svg="main.getSvg(id)" :bg-color="main.getSvgColor(id)" />
</template>

<route lang="yaml">
meta:
  layout: playground
</route>

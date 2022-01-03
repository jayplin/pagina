<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const props = defineProps<{ id: string }>()

const router = useRouter()

const main = useMainStore()

const id = Number(props.id)

main.$subscribe((mutation, state) => {
  if (main.newsletters.length) {
    if (main.getNewsletter(id))
      console.log(main.getNewsletter(id))
    else
      router.push('/posters/error')
  }
})
</script>

<template>
  <ZoomArea :svg="`http://localhost:1337${main.getSvg(id)}`" />
</template>

<route lang="yaml">
meta:
  layout: playground
</route>

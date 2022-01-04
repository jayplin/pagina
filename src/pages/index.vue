<script setup lang="ts">

const router = useRouter()
// const go = () => {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

const go = () => {
  router.push('/newsletter/january')
}

</script>

<template>
  <div id="about" class="text-white p-5">
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

<route lang="yaml">
meta:
  layout: home
</route>

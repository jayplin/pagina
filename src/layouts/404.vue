<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-[#ff97ff]   ">
    <div>
      <p class="text-6xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div>
      <button
        class="btn m-3 text-md mt-8"
        @click="router.push('/')"
      >
        Home
      </button>
    </div>
  </main>
</template>

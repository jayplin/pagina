<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-col justify-between p-5 h-screen text-fuchsia-300 font-bold text-xl ">
      <div class="flex justify-between">
        <router-link :to="{ hash: '#about'}">
          ABOUT
        </router-link>

        <router-link :to="{ hash: '#zines' }">
          POSTER
        </router-link>
      </div>
      <div class="flex justify-center items-center">
        <img src="/logopink.png" alt="">
      </div>

      <div class="flex justify-between">
        <router-link to="/imprint">
          IMPRINT
        </router-link>

        <router-link :to="{ hash: '#zines' }">
          INSTAGRAM
        </router-link>
        <a href="mailto:mail@softandmessy.de">CONTACT</a>
      </div>
    </div>
  </div>
</template>

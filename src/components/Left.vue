<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-col justify-between p-5 h-screen text-[#ff97ff] font-bold text-xl ">
      <div class="flex justify-between">
        <router-link :to="{ hash: '#about'}">
          ABOUT
        </router-link>

        <router-link :to="{ hash: '#zines' }">
          POSTER
        </router-link>
      </div>
      <div class="flex justify-center items-center">
        <img src="/logopink.png" class="w-2/3 lg:w-4/5  " alt="">
      </div>

      <div class="flex justify-between">
        <router-link to="/imprint">
          IMPRINT
        </router-link>

        <a href="https://www.instagram.com/soft.andmessy/" target="_blank">INSTAGRAM</a>

        <a href="mailto:mail@softandmessy.de">CONTACT</a>
      </div>
    </div>
  </div>
</template>

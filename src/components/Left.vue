<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-col justify-between  h-full text-fuchsia-300 font-bold ">
      <div class="flex justify-between p-2">
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

      <div class="flex justify-between p-2">
        <router-link :to="{ hash: '#about'}">
          IMPRINT
        </router-link>

        <router-link :to="{ hash: '#zines' }">
          INSTAGRAMM
        </router-link>
        <a href="mailto:someone@yoursite.com">CONTACT</a>
      </div>
    </div>
  </div>
</template>

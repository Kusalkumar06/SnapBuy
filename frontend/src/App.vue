<script setup>
  import Navbar from './components/NavbarCom.vue';
</script>

<template>
  <div>
    <Navbar/>
  </div>
  <div class="mt-[100px]">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

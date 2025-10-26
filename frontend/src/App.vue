<script setup>
  import Navbar from './components/NavbarCom.vue';
  import { useUserStore } from "@/stores/userStore";
  import { useProductStore } from './stores/productStore';
  import { onMounted } from 'vue';
  import FooterCom from './components/FooterCom.vue';

  const userStore = useUserStore();
  const productStore = useProductStore();

  onMounted(() => {
    productStore.fetchProducts();
  })
</script>

<template>
  <div>
    <Navbar/>
  </div>
  <div class="mt-[60px]">
    <router-view></router-view>
  </div>
  <div>
    <FooterCom/>
  </div>

  <div v-if="userStore.loading" class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
    <div class="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
</template>

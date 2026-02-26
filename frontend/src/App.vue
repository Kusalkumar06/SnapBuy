<script setup>
  import Navbar from './components/NavbarCom.vue';
  import { useUserStore } from "@/stores/userStore";
  import { useProductStore } from './stores/productStore';
  import { onMounted, computed } from 'vue';
  import FooterCom from './components/FooterCom.vue';
  import { useRoute } from 'vue-router';

  const userStore = useUserStore();
  const productStore = useProductStore();
  const route = useRoute();

  const showNavbar = computed(() => {
    return !['login', 'forgot-password', 'reset-password', 'new-products'].includes(route.name);
  });

  const giveTopMargin = computed(() => {
    return !['login', 'forgot-password', 'reset-password', 'new-products'].includes(route.name);
  });

  const showFooter = computed(() => {
    return !['login', 'forgot-password', 'reset-password', 'new-products'].includes(route.name);
  });

  onMounted(() => {
    productStore.fetchProducts();
  })
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300">
    <div v-if="showNavbar">
      <Navbar/>
    </div>
    <div :class="{ 'mt-[60px]': giveTopMargin }" class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div v-if="showFooter">
      <FooterCom/>
    </div>

    <div v-if="userStore.loading" class="fixed inset-0 bg-black/40 flex items-center justify-center z-100">
      <div class="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
</template>

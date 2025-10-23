<template>

  <header class="flex items-center justify-between py-3 px-40 border-b border-gray-500 bg-white fixed top-0 left-0 w-full z-50">

    <div class="font-[500] text-[23px]">
      <router-link :to="{name: 'home'}" class="hover:text-amber-800 transition duration-300">SnapBuy</router-link>
    </div>

    <nav class="font-normal space-x-2">
      <router-link :to="{name : 'home'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Home</router-link>
      <router-link :to="{name : 'shop'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Shop</router-link>
      <router-link :to="{name : 'about'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">About</router-link>
      <router-link :to="{name : 'contact'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Contact us</router-link>
    </nav>

    <div class="flex items-center space-x-4">
      <button @click="openCart" class="text-xl hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-[10px]" aria-label="Shopping Cart" >🛒</button>
      <CartPage/>
    </div>

  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import CartPage from '@/pages/CartPage.vue';

const cartStore = useCartStore();
function openCart() {
  cartStore.openCart();
}
</script>
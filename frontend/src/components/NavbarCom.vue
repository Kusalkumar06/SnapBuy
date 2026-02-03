<template>
  <header class="py-3 border-b border-gray-500 bg-white dark:bg-black dark:border-white fixed top-0 left-0 w-full z-50 transition-colors duration-300">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4">
    <div class="font-medium text-[23px] flex items-center gap-2">
      <img src="/images/snapbuy_icon.png" alt="SnapBuy Logo" class="w-8 h-8 object-contain dark:invert" />
      <router-link :to="{name: 'home'}" class="dark:text-white">SnapBuy</router-link>
    </div>

    <nav class="font-normal space-x-2 hidden md:block">
      <router-link :to="{name : 'home'}" class="text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Home</router-link>
      <router-link :to="{name : 'shop'}" class="text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Shop</router-link>
      <router-link :to="{name : 'wishlist'}" class="text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Wishlist</router-link>
      <router-link :to="{name : 'about'}" class="text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">About</router-link>
      <router-link :to="{name : 'contact'}" class="text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Contact us</router-link>   
    </nav>

    <div class="flex items-center space-x-4">
      <button @click="themeStore.toggleTheme" class="text-black dark:text-white transition hover:scale-110">
        <SunMedium v-if="themeStore.isDark" />
        <Moon v-else />
      </button>

      <button @click="openCart" class="relative text-xl text-black dark:text-white px-3 py-1 rounded-[10px]" aria-label="Shopping Cart"><ShoppingCart size="24"/><span class="absolute -top-1 -right-3 text-xs px-1.5 rounded-full  text-black dark:text-white">({{ cartStore.cart.items.length }})</span></button>
      <CartPage/>
      <div v-if="!userStore.isLoggedIn">
        <router-link :to="{name: 'login'}" class="px-3 py-1 text-black dark:text-white font-medium border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">Login</router-link>
      </div>
      <div v-else class="flex gap-2">
        <router-link :to="{name: 'profile'}" class="px-3 py-1 text-black dark:text-white font-medium border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">Profile</router-link>
      </div>
    </div>
</div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import { useUserStore } from '@/stores/userStore';
import { useThemeStore } from '@/stores/themeStore';
import { ShoppingCart, SunMedium, Moon } from 'lucide-vue-next';
import CartPage from '@/pages/CartPage.vue';



const cartStore = useCartStore();
const userStore = useUserStore();
const themeStore = useThemeStore();

function openCart() {
  cartStore.openCart();
}
</script>
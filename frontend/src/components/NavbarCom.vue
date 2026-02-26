<template>
  <header class="py-3 border-b border-gray-500 bg-white dark:bg-black dark:border-white fixed top-0 left-0 w-full z-50 transition-colors duration-300">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4">
      <div class="font-medium text-[23px] flex items-center gap-2">
        <img src="/images/snapbuy_icon.png" alt="SnapBuy Logo" class="w-8 h-8 object-contain dark:invert" />
        <router-link :to="{name: 'home'}" class="dark:text-white">SnapBuy</router-link>
      </div>

      <nav class="font-normal space-x-2 hidden md:block">
        <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name : 'home'}" class="inline-block text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Home</router-link>
        <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name : 'shop'}" class="inline-block text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Shop</router-link>
        <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name : 'wishlist'}" class="inline-block text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Wishlist</router-link>
        <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name : 'about'}" class="inline-block text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">About</router-link>
        <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name : 'contact'}" class="inline-block text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 rounded-md transition duration-300">Contact us</router-link>   
      </nav>

      <div class="flex items-center space-x-4">
        <button v-motion :hovered="{ scale: 1.1 }" :tapped="{ scale: 0.9 }" @click="themeStore.toggleTheme" class="text-black dark:text-white transition">
          <SunMedium v-if="themeStore.isDark" />
          <Moon v-else />
        </button>

        <button v-motion :hovered="{ scale: 1.1 }" :tapped="{ scale: 0.9 }" @click="openCart" class="relative text-xl text-black dark:text-white px-3 py-1 rounded-[10px]" aria-label="Shopping Cart">
          <ShoppingCart size="24"/>
          <span class="absolute -top-1 -right-3 text-xs px-1.5 rounded-full text-black dark:text-white">({{ cartStore.cart.items.length }})</span>
        </button>
        <CartPage/>
        
        <div v-if="!userStore.isLoggedIn" class="hidden md:block">
          <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name: 'login'}" class="inline-block px-3 py-1 text-black dark:text-white font-medium border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">Login</router-link>
        </div>
        <div v-else class="hidden md:flex gap-2">
          <router-link v-motion :hovered="{ scale: 1.05 }" :tapped="{ scale: 0.95 }" :to="{name: 'profile'}" class="inline-block px-3 py-1 text-black dark:text-white font-medium border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">Profile</router-link>
        </div>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-black dark:text-white">
          <Menu v-if="!isMobileMenuOpen" size="24" />
          <X v-else size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <Transition name="dropdown">
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-500 dark:border-white shadow-lg overflow-hidden">
        <nav class="flex flex-col font-normal p-4 space-y-4">
          <router-link @click="isMobileMenuOpen = false" :to="{name : 'home'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300">Home</router-link>
          <router-link @click="isMobileMenuOpen = false" :to="{name : 'shop'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300">Shop</router-link>
          <router-link @click="isMobileMenuOpen = false" :to="{name : 'wishlist'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300">Wishlist</router-link>
          <router-link @click="isMobileMenuOpen = false" :to="{name : 'about'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300">About</router-link>
          <router-link @click="isMobileMenuOpen = false" :to="{name : 'contact'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300">Contact us</router-link>   
          
          <div class="h-px bg-gray-200 dark:bg-gray-800 w-full my-2"></div>
          
          <router-link v-if="!userStore.isLoggedIn" @click="isMobileMenuOpen = false" :to="{name: 'login'}" class="text-black dark:text-white font-medium hover:translate-x-2 transition duration-300 px-4">Login</router-link>
          <router-link v-else @click="isMobileMenuOpen = false" :to="{name: 'profile'}" class="bg-black text-white dark:bg-white dark:text-black font-medium text-center rounded-lg py-3 mt-2 mx-4 transition duration-300 shadow-md">Profile</router-link>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import { useUserStore } from '@/stores/userStore';
import { useThemeStore } from '@/stores/themeStore';
import { ShoppingCart, SunMedium, Moon, Menu, X } from 'lucide-vue-next';
import CartPage from '@/pages/CartPage.vue';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const cartStore = useCartStore();
const userStore = useUserStore();
const themeStore = useThemeStore();

function openCart() {
  cartStore.openCart();
}
</script>
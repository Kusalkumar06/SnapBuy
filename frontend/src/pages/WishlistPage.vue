<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold mb-2">My Wishlist ❤️</h1>
    <p class="font text-zinc-700 mb-6">Turn your wishlist into reality — buy it today!</p>

    <div v-if="wishlistStore.loading" class="text-gray-500">
      <div class="flex justify-center items-center h-80">
        <div class="w-10 h-10 border-4 border-[#95662d] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>

    <div v-else-if="wishlist.length === 0" class="text-gray-500 h-80 flex items-center justify-center">
      Your wishlist is empty 💔 
    </div>

    <div v-else class="flex flex-wrap gap-6">
      <div v-for="product in wishlist" :key="product._id" class="rounded-lg shadow-lg pb-2 flex flex-col">
        <router-link :to="{name:'productDetails', params:{id: product._id}}">
          <div class="relative">
            <img :src="product.image" class="w-70 h-56 object-cover rounded-lg group-hover:scale-110 object-cover transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <div class="px-4 pt-5">
            <div class="flex justify-between">
              <p class="text-stone-500 text-[10px]">{{ product.category }}</p>
              <p class="text-stone-500 text-[12px]">⭐ {{ product.rating }}</p>
            </div>
            <h1 class="font-semibold text-[#2e251f]">{{ product.title }}</h1>
            <p class="text-gray-600 my-1 font-[500]">₹{{ (product.price*3).toFixed(2) }}    <span class="text-[12px] line-through">₹{{ (product.price*4).toFixed(2) }}</span></p>
          </div>
        </router-link>

        <div class="text-center pb-2 flex flex-col gap-2 p-2">
          <button type="button" @click="cartStore.addToCart(productDetails._id)" class="bg-[#95662d] px-6 py-1 rounded-lg mt-2 text-white">Add to cart</button>
          <button class="mt-auto text-red-500 hover:text-white border-1  py-1 hover:bg-red-600 transition rounded-lg" @click="wishlistStore.removeFromWishlist(product._id)">Remove from Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useWishlistStore } from '@/stores/wishlistStore';

const wishlistStore = useWishlistStore();

const wishlist = computed(() => {
  return wishlistStore.wishlist
})


onMounted(() => {
  wishlistStore.fetchWishlist();
});
</script>

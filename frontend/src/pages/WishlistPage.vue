<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold mb-2 dark:text-white">My Wishlist ❤️</h1>
    <p class="font text-zinc-700 dark:text-gray-400 mb-6">Turn your wishlist into reality — buy it today!</p>

    <div v-if="wishlistStore.loading" class="text-gray-500">
      <div class="flex justify-center items-center h-60">
        <div class="w-10 h-10 border-4 border-black dark:border-white border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>

    <div v-else-if="wishlist.length === 0" class="text-gray-500 h-80 flex items-center justify-center">
      Your wishlist is empty 💔 
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in wishlist" :key="product._id" class="rounded-lg shadow-lg pb-2 flex flex-col">
        <router-link :to="{name:'productDetails', params:{id: product._id}}">
          <div class="relative">
            <img :src="product.image" class="w-full h-56 rounded-lg group-hover:scale-110 object-cover transition-transform duration-500" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <div class="px-4 pt-5">
            <div class="flex justify-between">
              <p class="text-stone-500 text-[10px]">{{ product.category }}</p>
              <p class="text-stone-500 text-[12px]">⭐ {{ product.rating }}</p>
            </div>
            <h1 class="font-semibold text-[#2e251f]">{{ product.title }}</h1>
            <p class="text-gray-600 my-1 font-medium">₹{{ product.price.toFixed(2) }}    <span class="text-[12px] line-through">₹{{ (product.price*1.33).toFixed(2) }}</span></p>
          </div>
        </router-link>

        <div class="text-center pb-2 flex flex-col gap-2 p-2">
          <div v-if="cartStore.getItemById(product._id)" class="flex items-center justify-center gap-2 mt-2">
            <button class="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.decreaseCartItem(product._id)">-</button>
            <span class="font-medium dark:text-white">{{ cartStore.getItemById(product._id).quantity }}</span>
            <button class="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.addToCart(product._id)">+</button>
          </div>
          <button v-else type="button" @click="handleAddToCart(product._id)" :disabled="addingToCartIds.has(product._id)" :class="addingToCartIds.has(product._id) ? 'opacity-70 cursor-not-allowed' : ''" class="bg-black text-white dark:bg-white dark:text-black px-6 py-1 rounded-lg mt-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition">
            {{ addingToCartIds.has(product._id) ? 'Adding...' : 'Add to cart' }}
          </button>
          <button @click="handleRemoveWishlist(product._id)" :disabled="removingWishlistIds.has(product._id)" :class="removingWishlistIds.has(product._id) ? 'opacity-70 cursor-not-allowed' : ''" class="mt-auto text-red-500 hover:text-white border dark:border-gray-600 py-1 hover:bg-red-600 transition rounded-lg">
            {{ removingWishlistIds.has(product._id) ? 'Removing...' : 'Remove from Wishlist' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,computed,reactive } from 'vue';
import { useWishlistStore } from '@/stores/wishlistStore';
import { useCartStore } from '@/stores/cartStore';

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const addingToCartIds = reactive(new Set());
const removingWishlistIds = reactive(new Set());

const handleAddToCart = async (id) => {
  if (addingToCartIds.has(id)) return;
  addingToCartIds.add(id);
  try {
    await cartStore.addToCart(id);
  } finally {
    addingToCartIds.delete(id);
  }
};

const handleRemoveWishlist = async (id) => {
  if (removingWishlistIds.has(id)) return;
  removingWishlistIds.add(id);
  try {
    await wishlistStore.removeFromWishlist(id);
  } finally {
    removingWishlistIds.delete(id);
  }
};

const wishlist = computed(() => {
  return wishlistStore.wishlist
})

onMounted(() => {
  wishlistStore.fetchWishlist();
});
</script>

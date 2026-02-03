<script setup>
  import { useCartStore } from '@/stores/cartStore';

  const cartStore = useCartStore();

  const { productDetails } = defineProps({
    productDetails: Object,
  })
</script>


<template>
  
    <div class="border border-stone-500 shadow-xl rounded-lg w-70 bg-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden group transition-colors duration-300">
      <router-link :to="{name:'productDetails', params:{id: productDetails._id}}">
        <div class="relative">
          <img :src="productDetails.image" class="w-full h-60 rounded-lg group-hover:scale-110 object-cover transition-transform duration-500" />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-hover:scale-110 transition-transform duration-300"></div>
        </div>
        <div class="px-4 pt-5">
          <div class="flex justify-between">
            <p class="text-stone-500 dark:text-gray-400 text-[10px]">{{ productDetails.category }}</p>
            <p class="text-stone-500 dark:text-gray-400 text-[12px]">⭐ {{ productDetails.rating }}</p>
          </div>
          <h1 class="font-semibold text-[#2e251f] dark:text-gray-200">{{ productDetails.title }}</h1>
          <p class="text-gray-600 dark:text-gray-400 my-1 font-medium">₹{{ (productDetails.price*3).toFixed(2) }}    <span class="text-[12px] line-through text-gray-400 dark:text-gray-600">₹{{ (productDetails.price*4).toFixed(2) }}</span></p>
        </div>
      </router-link>
      <div class="text-center pb-5">
        <div v-if="cartStore.getItemById(productDetails._id)" class="flex items-center justify-center gap-2 mt-2">
           <button class="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.decreaseCartItem(productDetails._id)">-</button>
           <span class="font-medium dark:text-gray-200">{{ cartStore.getItemById(productDetails._id).quantity }}</span>
           <button class="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.addToCart(productDetails._id)">+</button>
        </div>
        <button v-else type="button" @click="cartStore.addToCart(productDetails._id)" class="bg-black px-6 py-1 rounded-lg mt-2 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add to cart</button>
      </div>
    </div>

  
</template>
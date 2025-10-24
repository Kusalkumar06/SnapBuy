<script setup>
  import { useCartStore } from '@/stores/cartStore';

  const cartStore = useCartStore();

  const { productDetails } = defineProps({
    productDetails: Object,
  })
</script>


<template>
  <div class="border border-stone-500 shadow-lg rounded-lg shadow w-70 bg-white  overflow-hidden group">
    <div class="relative">
      <img :src="productDetails.image" class="w-full h-60 object-cover rounded-lg group-hover:scale-110 object-cover transition-transform duration-500" />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-hover:scale-110 transition-transform duration-300"></div>
    </div>
    <div class="px-2 py-5">
      <div class="flex justify-between">
        <p class="text-stone-500 text-[10px]">{{ productDetails.category }}</p>
        <p class="text-stone-500 text-[12px]">⭐ {{ productDetails.rating }}</p>
      </div>
      <h1 class="font-semibold text-[#2e251f]">{{ productDetails.title }}</h1>
      <p class="text-gray-600 my-1 font-[500]">₹{{ (productDetails.price*3).toFixed(2) }}    <span class="text-[12px] line-through">₹{{ (productDetails.price*4).toFixed(2) }}</span></p>
      <div class="text-center">
        <button type="button" @click="cartStore.addToCart(productDetails._id)" class="bg-[#95662d] px-6 py-1 rounded-lg mt-2 text-white">Add to cart</button>
      </div>
    </div>
  </div>
</template>
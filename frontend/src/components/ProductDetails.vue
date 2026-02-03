<template>
  <div class="px-30 py-10 dark:text-gray-200">
    <div class="flex flex-col lg:flex-row gap-10 p-6 bg-white dark:bg-black rounded-xl shadow-sm transition-colors duration-300">
      <div class="w-full lg:w-[35%] flex justify-center items-center rounded-lg p-2">
        <img :src="productDetails.image" :alt="productDetails.title" class="max-w-full max-h-[300px] object-contain hover:scale-105 transition-transform duration-300 rounded-lg" />
      </div>
      <div class="flex-1 flex flex-col justify-center px-4 py-2">
        <div class="flex flex-col items-start justify-evenly h-full w-full">
          <h1 class="font-medium text-[25px]">{{ productDetails.title }}</h1>
          <span class="px-3 py-1 text-[10px] border text-white bg-zinc-600 rounded-md">{{ productDetails.category }}</span>
          <p>Stock: <span class="text-green-400">Available</span></p>
          <p class="text-gray-600 dark:text-gray-400">Rating: {{ productDetails.rating }} ⭐</p>
          <h1 class="text-[25px]">₹{{ offerPrice }}</h1>
          <p class="text-green-800 dark:text-green-400 text-[12px]"><span class="line-through text-[14px] text-black dark:text-gray-500">₹{{ productPrice }}</span> {{100 - ((offerPrice/productPrice)*100)}}% off</p>
          <div class="flex gap-4">
            <div v-if="cartStore.getItemById(productDetails._id)" class="flex items-center gap-3 mt-2">
              <button class="bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.decreaseCartItem(productDetails._id)">-</button>
              <span class="font-medium text-lg">{{ cartStore.getItemById(productDetails._id).quantity }}</span>
              <button class="bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="cartStore.addToCart(productDetails._id)">+</button>
            </div>
            <button v-else type="button" @click="cartStore.addToCart(productDetails._id)" class="bg-black px-6 py-1 rounded-lg mt-2 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add to cart </button>
            
            <button v-if="wishlistStore.wishlist.some(p => p._id === productDetails._id)" type="button" @click="wishlistStore.removeFromWishlist(productDetails._id)" class="px-6 py-1 border text-red-500 border-red-500 rounded-lg mt-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition">Remove from Wishlist</button>
            <button v-else type="button" @click="wishlistStore.addToWishlist(productDetails._id)" class="px-6 py-1 border text-black dark:text-white border-black dark:border-white rounded-lg mt-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>

    <div class="my-10">
      <h1 class="text-[24px]">About This Product</h1>
      <p class="text-[16px] text-zinc-600 dark:text-gray-400" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">{{ productDetails.description }}</p>
    </div>

    <div class="flex gap-5 shrink">
      <div class="w-[40%] border-r dark:border-gray-700">
        <ReviewCom :productId = "route.params.id"></ReviewCom>
      </div>
      <div class="flex-1">
        <div class="mb-5">
          <h1 class="text-[25px]">Related Products</h1>
          <p class="text-[16px] text-zinc-600 dark:text-gray-400 font">Our Customers likes to order these products as well</p>
        </div>
        <div class="flex gap-2">
          <div v-for="value in relatedProducts" :key="value._id" >
            <ProductCard :productDetails="value"></ProductCard>
          </div>
        </div>       
      </div>
    </div>
  </div>  
  
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useProductStore } from '@/stores/productStore';
  import { useCartStore } from '@/stores/cartStore';
  import { useWishlistStore } from '@/stores/wishlistStore';
  import { computed } from 'vue';
  import ReviewCom from './ReviewCom.vue';
  import ProductCard from './ProductCard.vue';

  const productStore = useProductStore();
  const cartStore = useCartStore();
  const wishlistStore = useWishlistStore();
  const route = useRoute();

  const productDetails = computed(() => {
    return productStore.getProductById(route.params.id);
  })

  const relatedProducts = computed(() => {
    return productStore.getRelatedProducts(route.params.id,productDetails.value.category)
  })
  
  const offerPrice = computed(() => {
    return (productDetails.value?.price*3).toFixed(2) 
  })
  const productPrice = computed(() => {
    return  (productDetails.value?.price*4).toFixed(2)
  })
</script>
<template>
  <div class="px-30 py-10">
    <div class="flex justify-between mb-5">
      <div class="w-[26%]">
        <img :src="productDetails.image" class="rounded-[10%] border-1 shadow-lg"/>
      </div>
      <div class="flex-1 px-10 py-3 ">
        <div class="flex flex-col items-start justify-evenly h-[100%]">
          <h1 class="font-[500] text-[25px]">{{ productDetails.title }}</h1>
          <span class="px-3 py-1 text-[10px] border-1 text-white bg-zinc-600 rounded-md">{{ productDetails.category }}</span>
          <p>Stock: <span class="text-green-400">Available</span></p>
          <p>Rating: {{ productDetails.rating }} ⭐</p>
          <h1 class="text-[25px]">₹{{ offerPrice }}</h1>
          <p class="text-green-800 text-[12px]"><span class="line-through text-[14px] text-black">₹{{ productPrice }}</span> {{100 - ((offerPrice/productPrice)*100)}}% off</p>
          <div class="flex gap-4">
            <button type="button" @click="cartStore.addToCart(productDetails._id)" class="bg-[#95662d] px-6 py-1 rounded-lg mt-2 text-white">Add to cart </button>
            <button type="button" @click="wishlistStore.addToWishlist(productDetails._id)" class="px-6 py-1 border-1 text-[#95662d] rounded-lg mt-2">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>

    <div class="my-10">
      <h1 class="text-[24px]">About This Product</h1>
      <p class="text-[16px] text-zinc-600" style="font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">{{ productDetails.description }}</p>
    </div>

    <div class="flex gap-5 flex-shrink">
      <div class="w-[40%] border-r">
        <ReviewCom :productId = "route.params.id"></ReviewCom>
      </div>
      <div class="flex-1">
        <div class="mb-5">
          <h1 class="text-[25px]">Related Products</h1>
          <p class="text-[16px] text-zinc-600 font">Our Customers likes to order these products as well</p>
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
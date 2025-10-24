<script setup>
  import SampleCategoryProducts from '../components/SampleCategoryProducts.vue';
  import HeroCom from '../components/HeroCom.vue';
  import { useProductStore } from '@/stores/productStore';
  import { useRouter } from 'vue-router';

  const productStore = useProductStore();
  const router = useRouter();

  const goToShopWithCategory = (category) => {
    console.log(category)
  router.push({ 
    name: 'shop', 
    query: { category }  // pass the selected category as query param
  })
}
</script>

<template>
  <div>
    <HeroCom/>
  </div>
  <div>
    <div class="relative mt-[100vh] bg-[#95662d]">
      <div class="container mx-auto py-16 px-30">
        <h2 class="text-3xl font-[500] mb-8 text-[white]">Explore our Products</h2>
        <div v-for="category in productStore.categories" :key="category" class=" my-5">
          <div class="my-[30px]">
            <h1 class="text-[28px] font-md text-white">{{ category }}</h1>
            <p class="text-[14px] text-white">Explore our fashion & apparel collection</p>
          </div>
          <SampleCategoryProducts :category="category"/>
          <div class="text-center my-5">
            <button @click="goToShopWithCategory(category)" class="text-[#95662d] bg-white px-4 py-1 rounded-md font-[500]">Show More from {{ category }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


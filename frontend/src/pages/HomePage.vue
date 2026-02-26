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
      query: { category }
    })
}
</script>

<template>
  <div class="home-page-container">
    <div>
      <HeroCom/>
    </div>
    <div>
      <div class="bg-gray-100 dark:bg-black">
        <div class="container mx-auto py-16 px-8">
          <h2 class="text-3xl font-medium mb-8 text-black dark:text-white">Explore our Products</h2>
          <section v-for="category in productStore.categories" :key="category" class=" bg-white/95 dark:bg-gray-900/95 p-6 my-6 rounded-lg shadow-lg" >
            <div class="mb-6">
              <h1 class="text-[28px] font-medium text-black dark:text-white">
                {{ category }}
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ productStore.categoryTexts[category] }}</p>
            </div>

            <SampleCategoryProducts :category="category" />

            <div class="text-center mt-6">
              <button @click="goToShopWithCategory(category)" class="text-white bg-black/95 dark:bg-white/95 dark:text-black px-4 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition">Show More from {{ category }}</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>


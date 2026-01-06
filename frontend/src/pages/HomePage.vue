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
    <div class="container mx-auto py-16 px-8">
      <h2 class="text-3xl font-medium mb-8 text-white">Explore our Products</h2>
      <section v-for="category in productStore.categories" :key="category" class=" sticky top-18  bg-white/95 p-6 my-6 rounded-lg shadow-lg" >
        <div class="mb-6">
          <h1 class="text-[28px] font-medium text-black">
            {{ category }}
          </h1>
          <p class="text-sm text-gray-600">{{ productStore.categoryTexts[category] }}</p>
        </div>

        <SampleCategoryProducts :category="category" />

        <div class="text-center mt-6">
          <button @click="goToShopWithCategory(category)" class="text-white bg-[#95662d]/95 px-4 py-2 rounded-md font-medium">Show More from {{ category }}</button>
        </div>
      </section>
    </div>
  </div>
</div>

</template>


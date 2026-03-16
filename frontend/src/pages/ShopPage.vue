<template>

  <div class="bg-gray-200 dark:bg-gray-950 py-10 min-h-screen transition-colors duration-300">
    
    <!-- Top Header Area - Featured Collection Title -->
    <div class="px-4 lg:px-16 mb-2 pl-1">
      <h1 class="text-[32px] lg:text-[42px] font-medium dark:text-white leading-tight">Featured Collection</h1>
      <p class="text-stone-600 dark:text-gray-400">Explore our handpicked selection of premium items</p>
    </div>
    
    <!-- Product Grid - more space on left and right -->
    <div class="px-4 lg:px-16 w-full my-4">
      <ProductCom/>
    </div>
    
  </div>

</template>

<script setup>
import {reactive,provide,onMounted } from 'vue'
import ProductCom from '@/components/ProductCom.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

  const filters = reactive({
    search: "",
    category: '',
    minPrice: 0,
    maxPrice: 9999,
    rating: 1,
    sortBy: '',
  })

  provide('filters', filters)

  onMounted(() => {

  if (route.query.category) {
    filters.category = route.query.category
  }
})


</script>

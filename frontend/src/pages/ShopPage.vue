<template>

  <div class="px-35 bg-gray-200 dark:bg-gray-950 py-10 min-h-screen transition-colors duration-300">
    <div>
      <h1 class="text-[38px] font-bold dark:text-white">Shop All Products</h1>
      <p class="text-stone-600 dark:text-gray-400 font">Discover our complete collection of premium items</p>
    </div>
    <hr class="my-5 text-zinc-400 dark:text-gray-700"/>
    <div class="flex">
      <div class="w-75">
        <FilterCom/>
      </div>
      <div class="flex-1">
        <ProductCom/>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import {reactive,provide,onMounted } from 'vue'
import FilterCom from '@/components/FilterCom.vue'
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

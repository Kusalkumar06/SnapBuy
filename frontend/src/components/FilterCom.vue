<template>
  <div class="bg-gray-100 dark:bg-black border dark:border-gray-800 p-4 rounded-md font transition-colors duration-300">
    <div>
      <div class='text-black dark:text-white flex items-center mb-2 pb-2'>
        <Filter class="text-black dark:text-white" strokeWidth={1}></Filter>
        <h1 className='text-[20px] font-normal ml-2 text-black dark:text-white'>Search & Filter</h1>
      </div>
      <div class="flex flex-col">
        <div class="flex rounded-[5px] bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700">
          <button class="pl-3 text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <input v-model="filters.search" type="text" placeholder="search for products" class="text-[12px] px-4 py-2 focus:outline-none bg-transparent dark:text-white"/>
        </div>

        <div class="my-5">
          <select v-model="filters.category" class="w-full border rounded p-2 outline-none border-gray-300 text-black bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700">
            <option value="">All Categories</option>
            <option v-for="c in categories" :key="c" :value="c" class="text-black dark:text-white">{{ c }}</option>
          </select>
        </div>

        <div class="mb-5 text-black dark:text-white">
          <label class="font-bold">Price Range</label>
          <div class="flex gap-2">
            <input v-model.number="filters.minPrice" type="number" placeholder="Min" class="border border-gray-300 dark:border-gray-700 rounded p-1 w-full outline-none bg-white dark:bg-gray-900 dark:text-white" />
            <input v-model.number="filters.maxPrice" type="number" placeholder="Max" class="border border-gray-300 dark:border-gray-700 rounded p-1 w-full outline-none bg-white dark:bg-gray-900 dark:text-white" />
          </div>
        </div>

        <div class="mb-5">
          <label class="block mb-2 font-medium text-black dark:text-white">Min Rating</label>
          <div class="flex gap-5">
            <label v-for="n in [5, 4, 3, 2, 1]" :key="n" class="flex items-center gap-2 cursor-pointer" >
              <input type="radio" v-model.number="filters.rating" :value="n" name="rating" />
              <span class="text-black dark:text-white text-sm">{{ n }}</span>
            </label>
          </div>
        </div>

        <div class="text-black dark:text-white mb-5">
          <label class="font-medium">Sort by Price</label>
          <select v-model="filters.sortBy" class="w-full border border-gray-300 dark:border-gray-700 rounded p-2 outline-none mt-1 bg-white dark:bg-gray-900 dark:text-white">
            <option value="">Featured</option>
            <option value="asc" class="text-black dark:text-white">Low → High</option>
            <option value="desc" class="text-black dark:text-white">High → Low</option>
          </select>
        </div>

        <button @click="removeFilters" class="bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg font-medium hover:opacity-90 transition">Clear Filters</button>
      </div>
    </div>  
  </div>
</template>

<script setup>
  import { Filter } from 'lucide-vue-next'
  import { inject } from 'vue';
  import { useProductStore } from '@/stores/productStore';

  const productStore = useProductStore();
  const filters = inject('filters');

  const defaultFilters = {
    search: "",
    category: '',
    minPrice: 0,
    maxPrice: 9999,
    rating: 1,
    sortBy: '',
  }

  const removeFilters = () => {
    Object.assign(filters, defaultFilters)
  }



  const categories = productStore.categories
</script>

<style>

</style>
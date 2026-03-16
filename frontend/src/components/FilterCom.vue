<template>
  <div class="bg-gray-50 dark:bg-[#0A0D18] border border-gray-200 dark:border-gray-800 p-4 rounded-xl font transition-colors duration-300 w-full relative">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Search Input -->
      <div class="flex flex-1 w-full md:max-w-xs rounded-full bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700 items-center overflow-hidden h-10">
        <span class="pl-4 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>
        <input v-model="filters.search" type="text" placeholder="Search for products..." class="text-sm px-3 py-2 w-full focus:outline-none bg-transparent dark:text-white"/>
      </div>

      <!-- Categories Dropdown -->
      <select v-model="filters.category" class="h-10 border rounded-full px-4 outline-none border-gray-300 text-black bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700 w-full md:w-auto text-sm hidden md:block">
        <option value="">All Categories</option>
        <option v-for="c in categories" :key="c" :value="c" class="text-black dark:text-white">{{ c }}</option>
      </select>

      <button @click="toggleFilters = !toggleFilters" class="h-10 px-4 flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition md:hidden w-full justify-center">
        <Filter class="w-4 h-4" /> <span class="text-sm">More Filters</span>
      </button>

      <!-- Advanced Filters Desktop Wrapper -->
      <div class="hidden md:flex flex-wrap items-center gap-4 flex-1 justify-end">
        
        <!-- Sort Select -->
        <select v-model="filters.sortBy" class="h-10 border border-gray-300 dark:border-gray-700 rounded-full px-4 outline-none bg-white dark:bg-gray-900 dark:text-white text-sm">
          <option value="">Sort by: Featured</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>

        <!-- Tooltip/Dropdown for detailed filters -->
        <div class="relative">
          <button @click="toggleFilters = !toggleFilters" class="h-10 px-4 flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <Filter class="w-4 h-4" /> <span class="text-sm">Filters</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Popover for advanced filters -->
    <div v-if="toggleFilters" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-6 md:absolute md:top-full md:right-0 md:bg-white md:dark:bg-black md:p-8 md:rounded-2xl md:shadow-2xl md:z-50 md:min-w-[500px] md:border dark:md:border-gray-800">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Category (Mobile) -->
        <div class="md:hidden">
          <label class="block mb-2 font-medium text-black dark:text-white text-sm uppercase tracking-wider">Category</label>
          <select v-model="filters.category" class="w-full border rounded-lg p-3 outline-none border-gray-300 text-black bg-white dark:bg-gray-900 dark:text-white dark:border-gray-700 text-sm">
            <option value="">All Categories</option>
            <option v-for="c in categories" :key="c" :value="c" class="text-black dark:text-white">{{ c }}</option>
          </select>
        </div>

        <!-- Price Range -->
        <div>
          <label class="block font-medium text-black dark:text-white text-sm mb-3 uppercase tracking-wider">Price Range</label>
          <div class="flex items-center gap-3">
            <div class="relative flex-1">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">₹</span>
              <input v-model.number="filters.minPrice" type="number" placeholder="Min" class="pl-7 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg w-full outline-none bg-white dark:bg-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
            </div>
            <span class="text-gray-400">—</span>
            <div class="relative flex-1">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">₹</span>
              <input v-model.number="filters.maxPrice" type="number" placeholder="Max" class="pl-7 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg w-full outline-none bg-white dark:bg-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
            </div>
          </div>
        </div>

        <!-- Min Rating -->
        <div>
          <label class="block font-medium mb-3 text-black dark:text-white text-sm uppercase tracking-wider">Min Rating</label>
          <div class="flex flex-wrap gap-4">
            <label v-for="n in [5, 4, 3, 2, 1]" :key="n" class="flex items-center gap-2 group cursor-pointer" >
              <div class="relative flex items-center justify-center">
                <input type="radio" v-model.number="filters.rating" :value="n" name="rating" class="sr-only" />
                <div class="w-5 h-5 border-2 rounded-full border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all group-hover:border-blue-500" :class="filters.rating === n ? 'border-blue-500 bg-blue-500' : ''">
                  <div v-if="filters.rating === n" class="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <span class="text-black dark:text-white text-sm flex items-center gap-1">
                {{ n }} <svg class="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </span>
            </label>
          </div>
        </div>

        <!-- Sort By (Mobile) -->
        <div class="md:hidden">
          <label class="block font-medium mb-2 text-black dark:text-white text-sm uppercase tracking-wider">Sort By</label>
          <select v-model="filters.sortBy" class="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 outline-none bg-white dark:bg-gray-900 dark:text-white text-sm">
            <option value="">Sort by: Featured</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex items-center justify-between gap-4 mt-2 pt-6 border-t border-gray-100 dark:border-gray-800">
          <button @click="removeFilters" class="text-sm px-6 py-2.5 font-medium text-gray-500 hover:text-black dark:hover:text-white transition">Clear All Filters</button>
          <div class="flex gap-3">
            <button @click="toggleFilters = false" class="text-sm px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold hover:shadow-lg transition active:scale-95">Apply Filters</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Filter } from 'lucide-vue-next'
  import { inject, ref } from 'vue';
  import { useProductStore } from '@/stores/productStore';

  const productStore = useProductStore();
  const filters = inject('filters');
  const toggleFilters = ref(false);

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
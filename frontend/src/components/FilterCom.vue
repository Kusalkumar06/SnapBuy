<template>
  <div class="bg-[#CF8D3E] p-4 rounded-md font">
    <div>
      <div class='text-[#3A3A3A] flex items-center mb-2 pb-2'>
        <Filter color="white" strokeWidth={1}></Filter>
        <h1 className='text-[20px] font-[400] ml-2 text-white'>Search & Filter</h1>
      </div>
      <div class="flex flex-col">
        <div class="flex rounded-[5px] bg-gray-100">
          <button class="pl-3 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <input v-model="filters.search" type="text" placeholder="search for products" class="text-[12px] px-4 py-2 focus:outline-none"/>
        </div>

        <div class="my-5">
          <select v-model="filters.category" class="w-full border rounded p-2 outline-none border-white text-white">
            <option value="">All Categories</option>
            <option v-for="c in categories" :key="c" :value="c" class="text-black">{{ c }}</option>
          </select>
        </div>

        <div class="mb-5 text-white">
          <label class="font-bold">Price Range</label>
          <div class="flex gap-2">
            <input v-model.number="filters.minPrice" type="number" placeholder="Min" class="border rounded p-1 w-full outline-none" />
            <input v-model.number="filters.maxPrice" type="number" placeholder="Max" class="border rounded p-1 w-full outline-none" />
          </div>
        </div>

        <div class="mb-5">
          <label class="block mb-2 font-medium text-white">Min Rating</label>
          <div class="flex gap-5">
            <label v-for="n in [5, 4, 3, 2, 1]" :key="n" class="flex items-center gap-2 cursor-pointer" >
              <input type="radio" v-model.number="filters.rating" :value="n" name="rating" />
              <span class="text-zinc-50 text-sm">{{ n }}</span>
            </label>
          </div>
        </div>

        <div class="text-white mb-5">
          <label class="font-[500]">Sort by Price</label>
          <select v-model="filters.sortBy" class="w-full border rounded p-2 outline-none mt-1">
            <option value="">Featured</option>
            <option value="asc" class="text-black">Low → High</option>
            <option value="desc" class="text-black">High → Low</option>
          </select>
        </div>

        <button @click="removeFilters" class="bg-white py-2 rounded-lg">Clear Filters</button>
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
<template>

  <header class="flex items-center justify-between py-3 px-40 border-b border-gray-500 bg-white fixed top-0 left-0 w-full z-50">

    <div class="font-[500] text-[23px]">
      <router-link :to="{name: 'home'}" class="hover:text-amber-800 transition duration-300">SnapBuy</router-link>
    </div>

    <nav class="font-normal space-x-2">
      <router-link :to="{name : 'home'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Home</router-link>
      <router-link :to="{name : 'shop'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Shop</router-link>
      <router-link :to="{name : 'about'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">About</router-link>
      <router-link :to="{name : 'contact'}" class="text-[#95662d] font-[500] hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-md transition duration-300">Contact us</router-link>
    </nav>

    <div class="flex items-center space-x-4">

      <div class="flex border-1 rounded-[5px] bg-gray-100">
        <button class="pl-3 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
        <input type="text" placeholder="search for products" class="text-[12px] px-3 py-1 focus:outline-none"/>
      </div>

      <router-link :to="{ name: 'cart' }" class="text-xl hover:bg-[#95662d] hover:text-white px-3 py-1 rounded-[10px]" aria-label="Shopping Cart" >🛒</router-link>

    </div>

  </header>
</template>

<script setup>
</script>
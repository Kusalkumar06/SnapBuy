<template>
  <footer class="bg-gray-900 text-gray-300 py-10 relative">
    <div class="max-w-7xl mx-auto px-4 flex justify-between">

      <div class="w-[30%]">
        <h2 class="text-2xl font-bold text-white mb-3">SnapBuy</h2>
        <p class="text-sm leading-relaxed font">
          Your one-stop shop for all your needs.<br/> Shop smart, shop easy, and enjoy fast delivery right at your doorstep.
        </p>
      </div>

      <div class="w-[30%]">
        <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/" class="hover:text-white">Home</router-link></li>
          <li><router-link to="/shop" class="hover:text-white">Shop</router-link></li>
          <li><router-link to="/cart" class="hover:text-white">Cart</router-link></li>
          <li><router-link to="/wishlist" class="hover:text-white">Wishlist</router-link></li>
        </ul>
      </div>

      <div class="w-[30%]">
        <h3 class="text-lg font-semibold text-white mb-3">Customer Service</h3>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/about" class="hover:text-white">About Us</router-link></li>
          <li><router-link to="/contact" class="hover:text-white">Contact Us</router-link></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
      © {{ new Date().getFullYear() }} SnapBuy. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
</script>

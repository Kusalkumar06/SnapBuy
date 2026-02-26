<template>
  <Teleport to="body">
    <div v-if="isCartOpen" class="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm" @click="closeCart"></div>

    <transition name="slide">
      <div v-if="isCartOpen" class="fixed right-0 top-0 h-screen w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl flex flex-col z-110 transition-colors duration-300" @click.stop>

      <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
        <button @click="closeCart" class="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded text-gray-600 dark:text-gray-300">✕</button>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-4">
        <div v-if="items.length === 0" class="text-center py-12 text-gray-500 dark:text-gray-400">
          <ShoppingCart /> <p class="mt-4">Your cart is empty</p>
          <button @click="closeCart" class="border dark:border-gray-600 px-4 py-2 rounded mt-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Continue Shopping</button>
        </div>
        <div v-else v-for="item in items" :key="item.product._id" class="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
          <img :src="item.product.image" class="w-20 h-20 object-cover rounded" />
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-sm truncate dark:text-white">{{ item.product.title }}</h3>
            <p class="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">₹{{ ((Number(item.product.pricePaise) / 100) || Number(item.product.price || 0)).toFixed(2) }}</p>
            <div class="flex items-center gap-2 mt-2">
              <button class="border dark:border-gray-600 px-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" @click="cartStore.decreaseCartItem(item.product._id)">-</button>
              <span class="text-sm font-medium w-6 text-center dark:text-white">{{ item.quantity }}</span>
              <button class="border dark:border-gray-600 px-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" @click="cartStore.addToCart(item.product._id)">+</button>
            </div>
          </div>
          <button @click="cartStore.removeItem(item.product._id)" class="text-red-500 hover:text-red-700 dark:hover:text-red-400"><Trash /></button>
        </div>
      </div>

      <div v-if="items.length > 0" class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-2 bg-gray-50 dark:bg-gray-800">
        <div class="flex justify-between text-[12px]  text-gray-500 dark:text-gray-400">
          <span>Subtotal</span>
          <span>₹{{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-[12px] text-gray-500 dark:text-gray-400">
          <span>Tax (10%)</span>
          <span>₹{{ tax .toFixed(2)}}</span>
        </div>
        <div class="flex justify-between text-[12px] text-gray-500 dark:text-gray-400">
          <span>Shipping</span>
          <span>₹{{ shipping.toFixed(2) }}</span>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-semibold text-lg text-gray-900 dark:text-white">
          <span>Total:</span>
          <span>₹{{ total.toFixed(2) }}</span>
        </div>
        <div class="w-full flex text-center">
          <router-link :to="{name: 'checkout'}" class="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition" @click="checkout">Proceed to Checkout</router-link>
        </div>
        <div class="flex justify-between">
          <button class="w-[45%] border dark:border-gray-600 py-1 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition" @click="closeCart">Continue Shopping</button>
          <button class="w-[45%] border dark:border-gray-600 py-1 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition" @click="cartStore.clearCart">clear Cart</button>
        </div>
      </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import { computed, onMounted, provide, ref, watch, onUnmounted } from 'vue'
import { Trash,ShoppingCart } from 'lucide-vue-next'

const cartStore = useCartStore()
const { cart, isCartOpen } = storeToRefs(cartStore)

watch(isCartOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

function closeCart() { cartStore.closeCart() }
function checkout() { cartStore.closeCart() }
const items = computed(() => {
 
  return cart.value.items
})
const subtotal = computed(() => cartStore.cart.totalPaise / 100)
const tax = computed(() => subtotal.value * 0.1)
const shipping = computed(() => (items.value.length > 0 ? 10 : 0))
const total = computed(() => subtotal.value + tax.value + shipping.value)

onMounted(() => {
  cartStore.fetchCart();
});

const checkoutDetails = ref({
  subtotal,
  totalTax: computed(() => tax.value + shipping.value)
})

provide('checkoutDetails', checkoutDetails)

</script>

<style>
.slide-enter-from { transform: translateX(100%); }
.slide-enter-to { transform: translateX(0); }
.slide-enter-active { transition: transform 0.3s ease; }
.slide-leave-from { transform: translateX(0); }
.slide-leave-to { transform: translateX(100%); }
.slide-leave-active { transition: transform 0.3s ease; }
</style>

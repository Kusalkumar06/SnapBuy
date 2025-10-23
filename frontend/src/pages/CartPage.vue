<template>
  <!-- Overlay -->
  <div v-if="isCartOpen" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" @click="closeCart"></div>

  <!-- Drawer -->
  <transition name="slide">
    <div v-if="isCartOpen" class="absolute right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl flex flex-col z-50" @click.stop>
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 class="text-xl font-bold text-gray-900">Shopping Cart</h2>
        <button @click="closeCart" class="hover:bg-gray-100 p-2 rounded">✕</button>
      </div>

      <!-- Items -->
      <div class="flex-1 overflow-y-auto p-6 space-y-4">
        <div v-if="items.length === 0" class="text-center py-12 text-gray-500">
          🛒 <p class="mt-4">Your cart is empty</p>
          <button @click="closeCart" class="border px-4 py-2 rounded mt-4">Continue Shopping</button>
        </div>
        <div v-else v-for="item in items" :key="item.id" class="flex gap-4 pb-4 border-b border-gray-200 hover:bg-gray-100 p-2 rounded-lg">
          <img :src="item.product.image" class="w-20 h-20 object-cover rounded" />
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-sm truncate">{{ item.product.title }}</h3>
            <p class="text-sm font-bold text-blue-600 mt-1">${{ item.product.price }}</p>
            <div class="flex items-center gap-2 mt-2">
              <button class="border px-2 rounded" @click="updateQuantity(item.product.id, Math.max(1, item.quantity - 1))">-</button>
              <span class="text-sm font-medium w-6 text-center">{{ item.quantity }}</span>
              <button class="border px-2 rounded" @click="updateQuantity(item.product.id, item.quantity + 1)">+</button>
            </div>
          </div>
          <button @click="removeItem(item.product.id)" class="text-red-500 hover:text-red-700">🗑️</button>
        </div>
      </div>

      <div v-if="items.length > 0" class="border-t border-gray-200 p-4 space-y-2 bg-gray-50">
        <div class="flex justify-between text-[12px]  text-gray-500">
          <span>Subtotal</span>
          <span>${{ subtotal }}</span>
        </div>
        <div class="flex justify-between text-[12px] text-gray-500">
          <span>Tax (10%)</span>
          <span>${{ tax}}</span>
        </div>
        <div class="flex justify-between text-[12px] text-gray-500">
          <span>Shipping</span>
          <span>${{ shipping}}</span>
        </div>
        <div class="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg text-gray-900">
          <span>Total:</span>
          <span>${{ total }}</span>
        </div>
        <button class="w-full bg-blue-600 text-white py-1 rounded" @click="checkout">Proceed to Checkout</button>
        <button class="w-full border py-1 rounded" @click="closeCart">Continue Shopping</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import { computed } from 'vue'

const cartStore = useCartStore()
const { cartItems, isCartOpen } = storeToRefs(cartStore)

function closeCart() { cartStore.closeCart() }
function updateQuantity(id, qty) { cartStore.updateQuantity(id, qty) }
function removeItem(id) { cartStore.removeFromCart(id) }
function checkout() { cartStore.closeCart() }

const items = cartItems
const subtotal = computed(() => items.value.reduce((acc, i) => acc + i.price * i.quantity, 0))
const tax = computed(() => subtotal.value * 0.1)
const shipping = computed(() => (items.value.length > 0 ? 10 : 0))
const total = computed(() => subtotal.value + tax.value + shipping.value)
</script>

<style>
.slide-enter-from { transform: translateX(100%); }
.slide-enter-to { transform: translateX(0); }
.slide-enter-active { transition: transform 0.3s ease; }
.slide-leave-from { transform: translateX(0); }
.slide-leave-to { transform: translateX(100%); }
.slide-leave-active { transition: transform 0.3s ease; }
</style>

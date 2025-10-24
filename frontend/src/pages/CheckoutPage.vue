<template>
  <div class="flex px-30 p-8 gap-5">
    <div class="bg-white w-[45%]">
      <h2 class="text-2xl font-bold mb-6">Shipping Address</h2>

      <form @submit.prevent="placeOrder" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
          <input id="name" v-model="form.name" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none "/>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium mb-1 text-gray-700">Email</label>
          <input id="email" v-model="form.email" type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none" />
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium mb-1 text-gray-700">Phone</label>
          <input id="phone" v-model="form.phone" type="tel" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none" />
        </div>

        <div>
          <label for="address" class="block text-sm font-medium mb-1 text-gray-700">Address</label>
          <input id="address" v-model="form.address" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none" />
        </div>

        <div>
          <label for="city" class="block text-sm font-medium mb-1 text-gray-700">City</label>
          <input id="city" v-model="form.city" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none" />
        </div>

        <div>
          <label for="postal" class="block text-sm font-medium mb-1 text-gray-700">Postal Code</label>
          <input id="postal" v-model="form.postalCode" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"/>
        </div>
      </form>
    </div>

    <div class="flex-1 flex-col bg-gray-50">
      <div class="h-[65%] px-8 border-b">
        <h2 class="text-2xl font-bold mb-6">Payment Information</h2>
        <div class="space-y-4">
          <label class="flex items-center gap-3">
            <input type="radio" value="cod" v-model="paymentMethod" />
            Cash on Delivery
          </label>
          <label class="flex items-center gap-3">
            <input type="radio" value="card" v-model="paymentMethod" />
            Credit / Debit Card
          </label>
          <label class="flex items-center gap-3">
            <input type="radio" value="upi" v-model="paymentMethod" />
            UPI / Wallet
          </label>

          <div v-if="paymentMethod === 'card'" class="mt-4 space-y-3">
            <div>
              <label for="cardNumber" class="block text-sm font-medium mb-1 text-gray-700">Card Number</label>
              <input id="cardNumber" v-model="card.number" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none" />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="expiry" class="block text-sm font-medium mb-1 text-gray-700">Expiry</label>
                <input id="expiry" v-model="card.expiry"
                  type="text"
                  placeholder="MM/YY"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label for="cvv" class="block text-sm font-medium mb-1 text-gray-700">CVV</label>
                <input
                  id="cvv"
                  v-model="card.cvv"
                  type="password"
                  maxlength="3"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                />
              </div>
            </div>
          </div>

          <div v-if="paymentMethod === 'upi'" class="mt-4">
            <label for="upi" class="block text-sm font-medium mb-1 text-gray-700">UPI ID</label>
            <input
              id="upi"
              v-model="card.upi"
              type="text"
              placeholder="example@upi"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>
      </div>

      <!-- 25% Order Summary -->
      <div class="flex-1 bg-white px-6 py-3 shadow-inner">
        <h2 class="text-xl font-semibold mb-4">Order Total </h2>
        <div  class="space-y-2">
          <div class="space-y-2" >
            <p>Sub total: ₹{{ totalAmount.toFixed(2) }}</p>
            <p>total-tax: ₹{{ tax.toFixed(2) }}</p>
          </div>

          <div class="flex justify-between font-semibold text-lg pt-3 border-t">
            <span class="underline">Total:</span>
            <span>₹{{ (total).toFixed(2) }}</span>
          </div>

          <div class="w-[100%] flex text-center">
            <button @click="placeOrder" class="w-[100%] bg-orange-700 hover:bg-orange-600 text-white font-[500] py-2 px-4 rounded-lg" >Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const toast = useToast()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: ''
})

const paymentMethod = ref('cod')
const card = ref({ number: '', expiry: '', cvv: '', upi: '' })

const cartStore = useCartStore()

onMounted(() => {
  cartStore.fetchCart()
})

const cartItems = computed(() => cartStore.cart.items)
const totalAmount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.product.price*3 * item.quantity, 0)
)
const tax = computed(() => totalAmount.value * 0.1)
const shipping = computed(() => (cartItems.value.length > 0 ? 10 : 0))
console.log(cartItems.value.length);
const total = computed(() => totalAmount.value + tax.value + shipping.value)


const placeOrder = () => {
  if (!form.value.name || !form.value.address) {
    toast.error('Please fill in your shipping details.', {
      timeout: 2500,
      position: 'top-right',
    })
    return
  }

  cartStore.clearCart()

  toast.success(`Order placed successfully via ${paymentMethod.value.toUpperCase()}! 🎉`, {
    timeout: 3000,
    position: 'top-right',
  })

  setTimeout(() => {
    router.push({ name: 'home' })
  }, 1000)
}

</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}
</style>
 
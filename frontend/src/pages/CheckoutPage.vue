<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B0C15] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
    

    <div class="w-full bg-white dark:bg-[#121420] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center justify-between md:justify-center">

          <span class="md:hidden font-bold text-lg">Checkout</span>
          

          <div class="hidden md:flex items-center space-x-6 text-sm font-medium">
            <div class="flex items-center text-green-600 dark:text-emerald-400">
              <span class="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-emerald-900/30 text-xs mr-2">✓</span>
              Cart
            </div>
            
            <div class="h-px w-8 bg-gray-300 dark:bg-gray-700"></div>
            
            <div class="flex items-center text-blue-600 dark:text-blue-400 relative">
              <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs mr-2 ring-2 ring-blue-500/20 dark:ring-blue-400/20">2</span>
              Checkout
              <span class="absolute -bottom-5 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
            </div>
            
            <div class="h-px w-8 bg-gray-300 dark:bg-gray-700"></div>
            
            <div class="flex items-center text-gray-400 dark:text-gray-500">
              <span class="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700 text-xs mr-2">3</span>
              Payment
            </div>
            
            <div class="h-px w-8 bg-gray-300 dark:bg-gray-700"></div>
            
            <div class="flex items-center text-gray-400 dark:text-gray-500">
              <span class="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 dark:border-gray-700 text-xs mr-2">4</span>
              Confirmation
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        

        <div class="lg:col-span-7 space-y-8">
          <div>
            <h1 class="text-3xl font-bold mb-2">Checkout Details</h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Please enter your shipping information below.</p>
          </div>

          <form @submit.prevent="placeOrder" class="space-y-6">

            <div class="group">
              <label for="name" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">Full Name</label>
              <input 
                id="name" 
                v-model="form.name" 
                type="text" 
                class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                required 
                placeholder="Ex. John Doe" 
              />
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="group">
                <label for="email" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">Email Address</label>
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                  required 
                  placeholder="john@example.com" 
                />
              </div>

              <div class="group">
                <label for="phone" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">Phone Number</label>
                <input 
                  id="phone" 
                  v-model="form.phone" 
                  type="tel" 
                  class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                  required 
                  placeholder="+91 98765 43210" 
                />
              </div>
            </div>


            <div class="group">
              <label for="address" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">Delivery Address</label>
              <input 
                id="address" 
                v-model="form.address" 
                type="text" 
                class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                required 
                placeholder="House No., Street Name, Area" 
              />
            </div>


            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="group">
                <label for="city" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">City</label>
                <input 
                  id="city" 
                  v-model="form.city" 
                  type="text" 
                  class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                  required 
                  placeholder="Mumbai" 
                />
              </div>

              <div class="group">
                <label for="state" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">State</label>
                <input 
                  id="state" 
                  v-model="form.state" 
                  type="text" 
                  class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                  required 
                  placeholder="Maharashtra" 
                />
              </div>

              <div class="group">
                <label for="postal" class="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">Postal Code</label>
                <input 
                  id="postal" 
                  v-model="form.postalCode" 
                  type="text" 
                  class="w-full bg-white dark:bg-[#1A1D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-400/10 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                  required 
                  placeholder="400001" 
                />
              </div>
            </div>
          </form>
        </div>


        <div class="lg:col-span-5">
          <div class="bg-white dark:bg-linear-to-br dark:from-[#1A1D2D] dark:to-[#141625] rounded-3xl p-4 md:p-5 shadow-xl border border-gray-100 dark:border-gray-800">
            
            <h2 class="text-lg font-bold mb-3 flex items-center gap-2">
              <span class="w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
              Payment Information
            </h2>
            

            <div class="space-y-2 mb-4">
              <label 
                class="group relative flex items-center p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-300"
                :class="paymentMethod === 'cod' 
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-500/10' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent'"
              >
                <div class="flex items-center gap-3 w-full">
                  <div class="relative flex items-center justify-center">
                    <input type="radio" value="cod" v-model="paymentMethod" class="peer appearance-none w-3.5 h-3.5 border-2 border-gray-400 rounded-full checked:border-blue-600 dark:checked:border-blue-500 checked:bg-blue-600 dark:checked:bg-blue-500 transition-all" />
                    <div class="absolute w-1.5 h-1.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <div class="flex-1">
                    <span class="font-semibold text-sm block">Cash on Delivery</span>
                    <span class="text-[10px] text-gray-500 dark:text-gray-400">Pay on arrival</span>
                  </div>
                </div>
              </label>

              <label 
                class="group relative flex items-center p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-300"
                :class="paymentMethod === 'card' 
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-500/10' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent'"
              >
                <div class="flex items-center gap-3 w-full">
                  <div class="relative flex items-center justify-center">
                    <input type="radio" value="card" v-model="paymentMethod" class="peer appearance-none w-3.5 h-3.5 border-2 border-gray-400 rounded-full checked:border-blue-600 dark:checked:border-blue-500 checked:bg-blue-600 dark:checked:bg-blue-500 transition-all" />
                    <div class="absolute w-1.5 h-1.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <div class="flex-1">
                    <span class="font-semibold text-sm block">Credit / Debit Card</span>
                    <span class="text-[10px] text-gray-500 dark:text-gray-400">Secure payment</span>
                  </div>

                  <div class="hidden sm:block">
                     <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                </div>
              </label>

              <label 
                class="group relative flex items-center p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-300"
                :class="paymentMethod === 'upi' 
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-500/10' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent'"
              >
                <div class="flex items-center gap-3 w-full">
                  <div class="relative flex items-center justify-center">
                    <input type="radio" value="upi" v-model="paymentMethod" class="peer appearance-none w-3.5 h-3.5 border-2 border-gray-400 rounded-full checked:border-blue-600 dark:checked:border-blue-500 checked:bg-blue-600 dark:checked:bg-blue-500 transition-all" />
                    <div class="absolute w-1.5 h-1.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                  </div>
                  <div class="flex-1">
                    <span class="font-semibold text-sm block">UPI / Wallet</span>
                    <span class="text-[10px] text-gray-500 dark:text-gray-400">Google Pay, PhonePe</span>
                  </div>
                </div>
              </label>




            <div class="h-px bg-gray-200 dark:bg-gray-700 my-3"></div>


            <h3 class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Order Summary</h3>
            <div class="space-y-1.5 mb-3 text-xs">
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹{{ totalAmount.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax (10%)</span>
                <span>₹{{ tax.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>₹{{ shipping.toFixed(2) }}</span>
              </div>
            </div>
            
            <div class="flex justify-between items-end pb-3 border-t border-gray-200 dark:border-gray-700 pt-2">
              <span class="text-gray-500 dark:text-gray-400 font-medium text-sm">Total</span>
              <span class="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-black dark:from-white dark:to-gray-200">
                ₹{{ total.toFixed(2) }}
              </span>
            </div>


            <button @click="placeOrder" 
              class="group w-full bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-bold py-2.5 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Place Order</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            
            <div class="text-center mt-2">
              <p class="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Guaranteed safe & secure checkout
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useOrderStore } from '@/stores/orderStore'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const toast = useToast()
const router = useRouter()
const cartStore = useCartStore()
const orderStore = useOrderStore()

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postalCode: ''
})

const paymentMethod = ref('cod')

onMounted(() => {
  cartStore.fetchCart()
})

const cartItems = computed(() => cartStore.cart.items)
const totalAmount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.product.price*3 * item.quantity, 0)
)
const tax = computed(() => totalAmount.value * 0.1)
const shipping = computed(() => (cartItems.value.length > 0 ? 10 : 0))
const total = computed(() => totalAmount.value + tax.value + shipping.value)

const placeOrder = async () => {
  if (!form.value.name || !form.value.address || !form.value.phone || !form.value.city || !form.value.state || !form.value.postalCode) {
    toast.error('Please fill in all checkout details.', {
      timeout: 2500,
      position: 'top-right',
    })
    return
  }


  const shippingAddress = {
    name: form.value.name,
    phone: form.value.phone,
    address: form.value.address,
    city: form.value.city,
    state: form.value.state, 
    pincode: form.value.postalCode
  }

  try {
    const order = await orderStore.placeOrder(shippingAddress, paymentMethod.value)
    

    toast.success(`Order placed successfully! Order ID: ${order._id}`, {
      timeout: 3000,
      position: 'top-right',
    })
    

    await cartStore.fetchCart()

    setTimeout(() => {
      router.push(`/`)
    }, 1000)

  } catch {
    toast.error(orderStore.error || 'Failed to place order', {
      timeout: 3000,
      position: 'top-right',
    })
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B0C15] text-black dark:text-white transition-colors duration-300 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row gap-8">
        

        <aside class="w-full md:w-64 shrink-0">
          <div class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
            <div class="flex items-center gap-3 px-4 py-4 mb-4 border-b border-gray-100 dark:border-gray-700">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                {{ userStore.user?.username?.charAt(0).toUpperCase() || 'U' }}
              </div>
              <div class="overflow-hidden">
                <p class="font-bold truncate">{{ userStore.user?.username || 'User' }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ userStore.user?.email }}</p>
              </div>
            </div>

            <nav class="space-y-1">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="currentTab = tab.id"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium',
                  currentTab === tab.id 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                ]"
              >
                <component :is="tab.icon" class="w-5 h-5" />
                {{ tab.label }}
              </button>

              <button 
                @click="handleLogout"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 mt-4"
              >
                <LogOut class="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        </aside>


        <main class="flex-1">
          

          <div v-if="currentTab === 'overview'" class="space-y-6">
            <h2 class="text-2xl font-bold">Account Overview</h2>
            <div class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label class="block text-sm text-gray-500 dark:text-gray-400 mb-1">Username</label>
                  <p class="text-lg font-medium">{{ userStore.user?.username }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                  <p class="text-lg font-medium">{{ userStore.user?.email }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-500 dark:text-gray-400 mb-1">Role</label>
                  <p class="text-lg font-medium capitalize">{{ userStore.user?.role || 'User' }}</p>
                </div>
                <div>
                  <label class="block text-sm text-gray-500 dark:text-gray-400 mb-1">Member Since</label>
                  <p class="text-lg font-medium">{{ formatDate(userStore.user?.createdAt) }}</p>
                </div>
              </div>
            </div>
          </div>


          <div v-else-if="currentTab === 'edit-profile'" class="space-y-6">
            <h2 class="text-2xl font-bold">Edit Profile</h2>
            <div class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 max-w-xl">
              <form @submit.prevent="handleUpdateProfile" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Username</label>
                  <input 
                    v-model="profileForm.username" 
                    type="text" 
                    class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                    minlength="3"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2 text-gray-400">Email (Read Only)</label>
                  <input 
                    :value="userStore.user?.email" 
                    type="email" 
                    disabled
                    class="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 cursor-not-allowed"
                  />
                </div>
                <button 
                  type="submit" 
                  :disabled="userStore.loading"
                  class="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="userStore.loading">Updating...</span>
                  <span v-else>Save Changes</span>
                </button>
              </form>
            </div>
          </div>


          <div v-else-if="currentTab === 'security'" class="space-y-6">
            <h2 class="text-2xl font-bold">Security</h2>
            <div class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 max-w-xl">
              <form @submit.prevent="handleChangePassword" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Current Password</label>
                  <div class="relative">
                     <input 
                      v-model="passwordForm.currentPassword" 
                      :type="showCurrentPassword ? 'text' : 'password'"
                      class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                    />
                    <button type="button" @click="showCurrentPassword = !showCurrentPassword" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Eye v-if="showCurrentPassword" class="w-5 h-5" />
                      <EyeOff v-else class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">New Password</label>
                  <div class="relative">
                    <input 
                      v-model="passwordForm.newPassword" 
                      :type="showNewPassword ? 'text' : 'password'"
                      class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      required
                      minlength="6"
                    />
                    <button type="button" @click="showNewPassword = !showNewPassword" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Eye v-if="showNewPassword" class="w-5 h-5" />
                      <EyeOff v-else class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Confirm New Password</label>
                  <input 
                    v-model="passwordForm.confirmPassword" 
                    type="password" 
                    class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  :disabled="userStore.loading"
                  class="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="userStore.loading">Updating...</span>
                  <span v-else>Change Password</span>
                </button>
              </form>
            </div>


            <div class="mt-8 pt-8 border-t border-red-100 dark:border-red-900/30">
              <h3 class="text-xl font-bold text-red-600 dark:text-red-500 mb-4 flex items-center gap-2">
                <AlertTriangle class="w-5 h-5"/> Danger Zone
              </h3>
              <div class="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Deleting your account is permanent. All your data, including orders and wishlist, will be wiped out immediately. This action cannot be undone.
                </p>
                <button 
                  @click="showDeleteModal = true"
                  class="px-5 py-2.5 bg-white dark:bg-[#1A1D2D] text-red-600 dark:text-red-500 font-bold rounded-xl border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all shadow-sm flex items-center gap-2"
                >
                  <Trash2 class="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>


          <div v-else-if="currentTab === 'orders'" class="space-y-6">
            <h2 class="text-2xl font-bold">My Orders</h2>
            

            <div v-if="orderStore.loading" class="flex justify-center py-10">
              <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>


            <div v-else-if="!orderStore.loading && orderStore.orders.length === 0" class="text-center py-10 bg-white dark:bg-[#1A1D2D] rounded-2xl border border-gray-100 dark:border-gray-800">
               <div class="text-5xl mb-3">📦</div>
               <h3 class="text-lg font-bold mb-1">No orders yet</h3>
               <p class="text-gray-500 mb-4">Start shopping to see your orders here.</p>
               <router-link :to="{name: 'shop'}" class="text-blue-500 hover:underline">Browse Products</router-link>
            </div>


            <div v-else class="space-y-4">
              <div v-for="order in orderStore.orders" :key="order._id" 
                   @click="router.push(`/orders/${order._id}`)"
                   class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all cursor-pointer group flex flex-col md:flex-row justify-between md:items-center gap-4">
                
                <div>
                  <div class="flex items-center gap-3 mb-1">
                    <span class="font-mono text-sm text-gray-400">#{{ order._id.slice(-6).toUpperCase() }}</span>
                    <span :class="{
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': order.orderStatus === 'processing',
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400': order.orderStatus === 'shipped',
                      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': order.orderStatus === 'delivered',
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400': order.orderStatus === 'cancelled'
                    }" class="px-2 py-0.5 rounded-full text-xs font-bold capitalize">
                      {{ order.orderStatus }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-500">{{ formatDate(order.createdAt) }}</p>
                </div>

                <div class="flex items-center justify-between md:gap-8">
                  <div class="text-right">
                    <p class="font-bold">₹{{ ((Number(order.totalAmountPaise) || Number(order.totalAmount * 100) || Number(order.totalPrice * 100) || 0) / 100).toFixed(2) }}</p>
                    <p class="text-xs text-gray-500">{{ order.paymentStatus }}</p>
                  </div>
                  <ChevronRight class="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>


  <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">

    <div @click="showDeleteModal = false" class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"></div>
    

    <div class="bg-white dark:bg-[#1A1D2D] rounded-3xl max-w-md w-full p-6 shadow-2xl z-10 relative border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-200">
      <button @click="showDeleteModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <X class="w-5 h-5" />
      </button>

      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-500">
          <AlertTriangle class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold mb-2">Delete Account?</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          This action is irreversible. Please enter your password to confirm deletion.
        </p>
      </div>

      <form @submit.prevent="handleDeleteAccount" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1.5 ml-1">Password</label>
           <div class="relative">
            <input 
              v-model="deletePassword" 
              :type="showDeletePassword ? 'text' : 'password'"
              class="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              placeholder="Enter your password"
              required
            />
            <button type="button" @click="showDeletePassword = !showDeletePassword" class="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Eye v-if="showDeletePassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <button 
            type="button" 
            @click="showDeleteModal = false"
            class="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all is-active"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            :disabled="userStore.loading"
            class="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span v-if="userStore.loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span v-else>Confirm Delete</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useOrderStore } from '@/stores/orderStore'
import { useToast } from 'vue-toastification'
import { User, Shield, Package, LogOut, Eye, EyeOff, ChevronRight, PenSquare, Trash2, AlertTriangle, X } from 'lucide-vue-next'

const router = useRouter()
const userStore = useUserStore()
const orderStore = useOrderStore()
const toast = useToast()

const currentTab = ref('overview')
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showDeleteModal = ref(false)
const deletePassword = ref('')
const showDeletePassword = ref(false)

const tabs = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'edit-profile', label: 'Edit Profile', icon: PenSquare },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'orders', label: 'My Orders', icon: Package },
]

const profileForm = ref({ username: '' })
const passwordForm = ref({ currentPassword: '', newPassword: '', confirmPassword: '' })

onMounted(async () => {
    try {
        await userStore.fetchUserProfile()
        if (userStore.user) {
             profileForm.value.username = userStore.user.username
        }
    } catch (err) {
        console.error("Failed to fetch profile:", err)
    }
    

    await orderStore.fetchMyOrders()
})


watch(() => userStore.user, (newUser) => {
    if (newUser) {
        profileForm.value.username = newUser.username
    }
}, { immediate: true })

const handleLogout = () => {
  userStore.logout()
  router.push({ name: 'login' })
  toast.info('Logged out successfully')
}

const handleUpdateProfile = async () => {
  try {
    const msg = await userStore.updateProfile({ username: profileForm.value.username })
    toast.success(msg)
  } catch (err) {
    toast.error(err.message)
  }
}

const handleChangePassword = async () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    toast.error("New passwords do not match")
    return
  }
  
  try {
    const msg = await userStore.changePassword({
        currentPassword: passwordForm.value.currentPassword,
        newPassword: passwordForm.value.newPassword
    })
    toast.success(msg)

    passwordForm.value = { currentPassword: '', newPassword: '', confirmPassword: '' }
  } catch (err) {
    toast.error(err.message)
  }
}

const handleDeleteAccount = async () => {
  try {
    const msg = await userStore.deleteAccount(deletePassword.value)
    toast.success(msg)
    showDeleteModal.value = false
    router.push({ name: 'home' })
  } catch (err) {
    toast.error(err.message)
  }
}

const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white p-8 rounded-xl w-full max-w-md relative">
        <button @click="close" class="absolute top-3 right-3 text-[32px] text-gray-500 hover:text-gray-800">&times;</button>

        <h2 class="text-2xl font-bold mb-6 text-center">
          {{ isLogin ? 'Login' : 'Register' }}
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div v-if="!isLogin">
            <label for="name" class="block mb-1 ">User Name</label>
            <input id="name" v-model="name" type="text" placeholder="Enter your name" class="w-full py-2 px-3 border rounded text-gray-600 text-[12px] outline-none" required>
          </div>

          <div>
            <label for="email" class="block mb-1">Email</label>
            <input id="email" v-model="email" type="email" placeholder="Enter your email" class="w-full py-2 px-3 border rounded text-gray-600 text-[12px] outline-none" required>
          </div>

          <div>
            <label for="password" class="block mb-1">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Enter your password" minlength="8" class="w-full py-2 px-3 border rounded text-gray-600 text-[12px] outline-none" required>
          </div>

          <div v-if="!isLogin">
            <label for="confirmPassword" class="block mb-1">Confirm Password</label>
            <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirm your password" class="w-full py-2 px-3 border rounded text-gray-600 text-[12px] outline-none" required>
          </div>

          <p v-if="errorMessage" class="text-red-600 text-sm mt-1">{{ errorMessage }}</p>

          <button type="submit" class="w-full bg-[#CF8D3E] text-white px-3 py-2 rounded hover:bg-[#95662d]">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>

        <p class="text-center mt-4 text-[12px]">
          {{ isLogin ? "Not registered yet?" : "Already have an account?" }}
          <span @click="toggleForm" class="text-blue-600 cursor-pointer hover:underline">
            {{ isLogin ? "Register Here" : "Login Here" }}
          </span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'

defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const name = ref('')
const confirmPassword = ref('')
const errorMessage = ref('') 

const userStore = useUserStore()
const toast = useToast()

const close = () => {
  errorMessage.value = ''
  email.value = ''
  password.value = ''
  name.value = ''
  confirmPassword.value = ''
  emit('close')
}

const toggleForm = () => {
  isLogin.value = !isLogin.value
  errorMessage.value = ''
  email.value = ''
  password.value = ''
  name.value = ''
  confirmPassword.value = ''
}

const handleSubmit = async () => {
  errorMessage.value = ''

  if (!isLogin.value && password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match"
    return
  }

  try {
    if (isLogin.value) {
      const msg = await userStore.login({ email: email.value, password: password.value })
      toast.success(msg)
      close()
    } else {
      const msg =await userStore.register({ username: name.value, email: email.value, password: password.value })
      toast.success(msg)
      toggleForm()
    }
    
  } catch (err) {
    errorMessage.value = err.message;
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

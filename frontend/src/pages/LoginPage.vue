<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#f6f5f7] dark:bg-[#111] transition-colors duration-300 font-['Montserrat',sans-serif]">
    <div 
      class="relative bg-white dark:bg-[#222] rounded-2xl shadow-2xl overflow-hidden min-h-[550px] w-[90%] md:w-[868px] mx-4 border border-gray-200 dark:border-gray-800 transition-all duration-300"
      id="container"
    >
      <!-- Sign Up Form Panel (Left initially, moves right) -->
      <div 
        class="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 z-10"
        :class="isSignUp ? 'opacity-100 translate-x-0 md:translate-x-full z-50 animate-show' : 'opacity-0 z-10 -translate-x-full md:translate-x-0'"
      >
        <form @submit.prevent="handleRegister" class="bg-white dark:bg-[#222] flex flex-col items-center justify-center h-full px-8 md:px-12 text-center">
          <h1 class="font-bold m-0 text-black dark:text-white text-2xl md:text-3xl mb-6">Create Account</h1>

          <div class="relative w-full my-3">
            <User class="absolute left-3 top-3.5 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="text" name="name" placeholder="Name" v-model.trim="registerName" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border border-transparent py-3 pl-10 pr-4 w-full outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 rounded-lg" />
          </div>
          <div class="relative w-full my-3">
            <Mail class="absolute left-3 top-3.5 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="email" name="email" placeholder="Email" v-model.trim="registerEmail" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border border-transparent py-3 pl-10 pr-4 w-full outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 rounded-lg" />
          </div>
          <div class="relative w-full my-3">
            <Lock class="absolute left-3 top-3.5 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input :type="showRegisterPassword ? 'text' : 'password'" name="password" placeholder="Password" v-model.trim="registerPassword" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border border-transparent py-3 pl-10 pr-10 w-full outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 rounded-lg" />
            <button type="button" @click="showRegisterPassword = !showRegisterPassword" class="absolute right-3 top-3.5 text-[#333] dark:text-[#ccc] hover:text-black dark:hover:text-white focus:outline-none bg-transparent p-0 border-none m-0 transition-colors">
               <Eye v-if="!showRegisterPassword" class="w-4 h-4" />
               <EyeOff v-else class="w-4 h-4" />
            </button>
          </div>
          <button 
            type="submit" 
            :disabled="userStore.loading"
            class="mt-6 rounded-full border border-black bg-black text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform active:scale-95 focus:outline-none dark:bg-white dark:text-black dark:border-white disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg"
          >
            <span v-if="userStore.loading">Signing Up...</span>
            <span v-else>Sign Up</span>
          </button>
          
          <button 
            type="button" 
            @click="isSignUp = false" 
            class="mt-6 text-sm text-black dark:text-white font-medium md:hidden"
          >
            Already have an account? Sign In
          </button>
        </form>
      </div>

      <!-- Sign In Form Panel (Left initially, stays left) -->
      <div 
        class="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 z-20"
        :class="isSignUp ? 'opacity-0 -translate-x-full md:translate-x-full' : 'opacity-100 translate-x-0'"
      >
        <form @submit.prevent="handleLogin" class="bg-white dark:bg-[#222] flex flex-col items-center justify-center h-full px-8 md:px-12 text-center">
          <h1 class="font-bold m-0 text-black dark:text-white text-2xl md:text-3xl mb-6">Sign in</h1>
          <div class="relative w-full my-3">
            <Mail class="absolute left-3 top-3.5 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="email" name="email" placeholder="Email" v-model.trim="loginEmail" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border border-transparent py-3 pl-10 pr-4 w-full outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 rounded-lg" />
          </div>
          <div class="relative w-full my-3">
            <Lock class="absolute left-3 top-3.5 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input :type="showLoginPassword ? 'text' : 'password'" name="password" placeholder="Password" v-model.trim="loginPassword" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border border-transparent py-3 pl-10 pr-10 w-full outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 rounded-lg" />
            <button type="button" @click="showLoginPassword = !showLoginPassword" class="absolute right-3 top-3.5 text-[#333] dark:text-[#ccc] hover:text-black dark:hover:text-white focus:outline-none bg-transparent p-0 border-none m-0 transition-colors">
               <Eye v-if="!showLoginPassword" class="w-4 h-4" />
               <EyeOff v-else class="w-4 h-4" />
            </button>
          </div>
          <router-link to="/forgot-password" class="text-gray-500 dark:text-gray-400 text-sm no-underline my-2 hover:underline transition-colors">Forgot your password?</router-link>
          
          <button 
            type="submit" 
            :disabled="userStore.loading"
            class="mt-4 rounded-full border border-black bg-black text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform active:scale-95 focus:outline-none dark:bg-white dark:text-black dark:border-white disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg"
          >
            <span v-if="userStore.loading">Signing In...</span>
            <span v-else>Sign In</span>
          </button>
          
          <button 
            type="button" 
            @click="isSignUp = true" 
            class="mt-6 text-sm text-black dark:text-white font-medium md:hidden"
          >
            Don't have an account? Sign Up
          </button>
        </form>
      </div>

      <!-- Desktop Overlay (Moves side to side uncovering forms) -->
      <div 
        class="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-40 hidden md:block"
        :class="isSignUp ? '-translate-x-full' : ''"
      >
        <div 
          class="bg-black dark:bg-white text-white dark:text-black relative -left-full h-full w-[200%] transform transition-transform duration-600 ease-in-out"
          :class="isSignUp ? 'translate-x-1/2' : 'translate-x-0'"
        >
          <!-- Left Overlay Text (Shown when on Sign Up form) -->
          <div 
            class="absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out"
            :class="isSignUp ? 'translate-x-0' : '-translate-x-[20%]'"
          >
            <h1 class="font-bold text-3xl mb-4">Welcome Back!</h1>
            <p class="text-sm font-light leading-6 mb-8 opacity-90">To keep connected with us please login with your personal info</p>
            <button 
              class="rounded-full border border-white dark:border-black bg-transparent text-white dark:text-black text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform active:scale-95 focus:outline-none cursor-pointer" 
              @click="isSignUp = false"
            >
              Sign In
            </button>
          </div>

          <!-- Right Overlay Text (Shown when on Sign In form) -->
          <div 
            class="absolute right-0 flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out"
            :class="isSignUp ? 'translate-x-[20%]' : 'translate-x-0'"
          >
            <h1 class="font-bold text-3xl mb-4">Hello, Friend!</h1>
            <p class="text-sm font-light leading-6 mb-8 opacity-90">Enter your personal details and start your journey with us</p>
            <button 
              class="rounded-full border border-white dark:border-black bg-transparent text-white dark:text-black text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform active:scale-95 focus:outline-none cursor-pointer" 
              @click="isSignUp = true"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-vue-next';

const isSignUp = ref(false);
const userStore = useUserStore();
const router = useRouter();
const toast = useToast();

const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);

const loginEmail = ref('');
const loginPassword = ref('');

const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');

const handleLogin = async () => {
  if (!loginEmail.value || !loginPassword.value) {
    toast.warning("Please fill in all fields.");
    return;
  }
  try {
    await userStore.login({
      email: loginEmail.value, 
      password: loginPassword.value
    });
    toast.success("Login successful!");
    router.push({ name: 'home' });
  } catch (error) {
    toast.error(error.message || "Login failed");
  }
};

const handleRegister = async () => {
  if (!registerName.value || !registerEmail.value || !registerPassword.value) {
    toast.warning("Please fill in all fields.");
    return;
  }
  if (registerPassword.value.length < 6) {
    toast.warning("Password must be at least 6 characters.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(registerEmail.value)) {
    toast.warning("Please enter a valid email address.");
    return;
  }

  try {
    await userStore.register({
      email: registerEmail.value,
      password: registerPassword.value,
      username: registerName.value.replace(/\s+/g, '')
    });

    toast.success("Registration successful! We’ve sent a verification email to your address. If you don’t see it in your inbox, please check your Spam or Promotions folder and mark it as ‘Not Spam’.", {
      timeout: 10000
    });
    isSignUp.value = false;
  } catch (error) {
    toast.error(error.message || "Registration failed");
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.animate-show {
  animation: show 0.6s;
}
</style>

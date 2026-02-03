<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#f6f5f7] dark:bg-[#111] transition-colors duration-300 font-['Montserrat',sans-serif]">
    <div 
      class="relative overflow-hidden w-[768px] max-w-full min-h-[480px] bg-white dark:bg-[#222] rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.5),0_10px_10px_rgba(0,0,0,0.22)]"
      id="container"
    >

      <div 
        class="absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out"
        :class="isSignUp ? 'translate-x-full opacity-100 z-5 animate-show' : 'opacity-0 z-1'"
      >
        <form @submit.prevent="handleRegister" class="bg-white dark:bg-[#222] flex flex-col items-center justify-center p-12 h-full text-center">
          <h1 class="font-bold m-0 text-black dark:text-white text-3xl">Create Account</h1>
          <div class="my-5 flex space-x-2">
            <a href="#" class="border border-[#DDDDDD] dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="border border-[#DDDDDD] dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="border border-[#DDDDDD] dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-linkedin-in"></i></a>
          </div>

          <div class="relative w-full my-2">
            <User class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="text" name="name" placeholder="Name" v-model.trim="registerName" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border-none py-3 pl-10 pr-4 w-full outline-none" />
          </div>
          <div class="relative w-full my-2">
            <Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="email" name="email" placeholder="Email" v-model.trim="registerEmail" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border-none py-3 pl-10 pr-4 w-full outline-none" />
          </div>
          <div class="relative w-full my-2">
            <Lock class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input :type="showRegisterPassword ? 'text' : 'password'" name="password" placeholder="Password" v-model.trim="registerPassword" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border-none py-3 pl-10 pr-10 w-full outline-none" />
            <button type="button" @click="showRegisterPassword = !showRegisterPassword" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] focus:outline-none bg-transparent p-0 border-none m-0">
               <Eye v-if="!showRegisterPassword" class="w-4 h-4" />
               <EyeOff v-else class="w-4 h-4" />
            </button>
          </div>
          <button 
            type="submit" 
            :disabled="userStore.loading"
            class="mt-4 rounded-[20px] border border-black bg-black text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform active:scale-95 focus:outline-none dark:bg-white dark:text-black dark:border-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span v-if="userStore.loading">Signing Up...</span>
            <span v-else>Sign Up</span>
          </button>
        </form>
      </div>


      <div 
        class="absolute top-0 left-0 h-full w-1/2 z-2 transition-all duration-600 ease-in-out"
        :class="isSignUp ? 'translate-x-full' : ''"
      >
        <form @submit.prevent="handleLogin" class="bg-white dark:bg-[#222] flex flex-col items-center justify-center p-12 h-full text-center">
          <h1 class="font-bold m-0 text-black dark:text-white text-3xl">Sign in</h1>
          <div class="my-5 flex space-x-2">
            <a href="#" class="border border-[#DDDDDD] shadow-lg dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="border border-[#DDDDDD] shadow-lg dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="border border-[#DDDDDD] shadow-lg dark:border-[#555] rounded-full inline-flex justify-center items-center h-10 w-10 text-[#333] dark:text-[#ccc]"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span class="text-xs text-[#333] dark:text-[#ccc]">or use your account</span>
          <div class="relative w-full my-2">
            <Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input type="email" name="email" placeholder="Email" v-model.trim="loginEmail" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border-none py-3 pl-10 pr-4 w-full outline-none" />
          </div>
          <div class="relative w-full my-2">
            <Lock class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] w-4 h-4" />
            <input :type="showLoginPassword ? 'text' : 'password'" name="password" placeholder="Password" v-model.trim="loginPassword" required class="bg-[#eee] dark:bg-[#333] text-[#333] dark:text-white border-none py-3 pl-10 pr-10 w-full outline-none" />
            <button type="button" @click="showLoginPassword = !showLoginPassword" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#333] dark:text-[#ccc] focus:outline-none bg-transparent p-0 border-none m-0">
               <Eye v-if="!showLoginPassword" class="w-4 h-4" />
               <EyeOff v-else class="w-4 h-4" />
            </button>
          </div>
          <router-link to="/forgot-password" class="text-[#333] dark:text-[#ccc] text-sm no-underline my-4">Forgot your password?</router-link>
          <button 
            type="submit" 
            :disabled="userStore.loading"
            class="rounded-[20px] border border-black bg-black text-white text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform active:scale-95 focus:outline-none dark:bg-white dark:text-black dark:border-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span v-if="userStore.loading">Signing In...</span>
            <span v-else>Sign In</span>
          </button>
        </form>
      </div>


      <div 
        class="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-40"
        :class="isSignUp ? '-translate-x-full' : ''"
      >
        <div 
          class="bg-black bg-linear-to-r from-[#434343] to-[#000000] dark:bg-none dark:bg-[#f6f5f7] text-white dark:text-black relative -left-full h-full w-[200%] transition-transform duration-600 ease-in-out"
          :class="isSignUp ? 'translate-x-1/2' : 'translate-x-0'"
        >

          <div 
            class="absolute top-0 flex flex-col items-center justify-center h-full w-1/2 text-center px-10 transition-transform duration-600 ease-in-out "
            :class="isSignUp ? 'translate-x-0' : '-translate-x-[20%]'"
          >
            <h1 class="font-bold m-0 text-white dark:text-black text-3xl">Welcome Back!</h1>
            <p class="text-sm font-light leading-5 tracking-wide my-5 text-gray-200 dark:text-[#333]">To keep connected with us please login with your personal info</p>
            <button 
              class="bg-transparent border border-white text-white dark:border-black dark:text-black rounded-[20px] text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform active:scale-95 focus:outline-none" 
              id="signIn" 
              @click="isSignUp = false"
            >
              Sign In
            </button>
          </div>


          <div 
            class="absolute top-0 right-0 flex flex-col items-center justify-center h-full w-1/2 text-center px-10 transition-transform duration-600 ease-in-out"
             :class="isSignUp ? 'translate-x-[20%]' : 'translate-x-0'"
          >
            <h1 class="font-bold m-0 text-white dark:text-black text-3xl">Hello, Friend!</h1>
            <p class="text-sm font-light leading-5 tracking-wide my-5 text-gray-200 dark:text-[#333]">Enter your personal details and start journey with us</p>
            <button 
              class="bg-transparent border border-white text-white dark:border-black dark:text-black rounded-[20px] text-xs font-bold py-3 px-11 tracking-widest uppercase transition-transform active:scale-95 focus:outline-none" 
              id="signUp" 
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

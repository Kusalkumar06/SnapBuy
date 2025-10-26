import { defineStore } from 'pinia'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'vue-router';


export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: Cookies.get('SnapBuyToken') || null,
    loading: false,
    showLoginModal: false, // modal visibility (can be toggled manually)
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login(credentials){
      this.loading = true

      try{
        const res = await axios.post("https://snapbuy-s5tb.onrender.com/auth/login", credentials);
        const token = res.data.token;

        Cookies.set("SnapBuyToken", token, { expires: 7 });

        this.token = token;
        this.user = res.data.user;

        return res.data.message || "Login successful!"
      } catch(err){
        console.log(err)
        const msg = err.response?.data?.message || "Login failed. Please try again.";
        throw new Error(msg);
      } finally{
        this.loading = false
      }
    },

    async register(data) {
      this.loading = true;
      try {
        const res = await axios.post("https://snapbuy-s5tb.onrender.com/auth/register", data);

        return res.data.message || "Registration successful!";
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || "Registration failed. Please try again.";
        throw new Error(msg);
      } finally {
        this.loading = false;
      }
    },

    logout() {
      Cookies.remove("SnapBuyToken")
      const router = useRouter()
      router.push('/')
      this.user = null
      this.token = null
    },
  },
})

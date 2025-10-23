import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [{
        "_id": "7517c1b94f1d342a3cd9e902",
        "product": {
          "_id": "6517a2f14f1d342a3cd9e8f5",
          "title": "Smart Fitness Watch",
          "price": 249,
          "category": "Electronics",
          "image": "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
        },
        "quantity": 1
      },
      {
        "_id": "7517c1b94f1d342a3cd9e902",
        "product": {
          "_id": "6517a2f14f1d342a3cd9e8f5",
          "title": "Smart Fitness Watch",
          "price": 249,
          "category": "Electronics",
          "image": "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
        },
        "quantity": 1
      },
      {
        "_id": "7517c1b94f1d342a3cd9e902",
        "product": {
          "_id": "6517a2f14f1d342a3cd9e8f5",
          "title": "Smart Fitness Watch",
          "price": 249,
          "category": "Electronics",
          "image": "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
        },
        "quantity": 1
      },
      {
        "_id": "7517c1b94f1d342a3cd9e902",
        "product": {
          "_id": "6517a2f14f1d342a3cd9e8f5",
          "title": "Smart Fitness Watch",
          "price": 249,
          "category": "Electronics",
          "image": "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
        },
        "quantity": 1
      },
      {
        "_id": "7517c1b94f1d342a3cd9e902",
        "product": {
          "_id": "6517a2f14f1d342a3cd9e8f5",
          "title": "Smart Fitness Watch",
          "price": 249,
          "category": "Electronics",
          "image": "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
        },
        "quantity": 1
      }

],       // All products in cart
    isCartOpen: false,   // Controls drawer visibility
  }),
  getters: {
    totalPrice: (state) => state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existing = this.cartItems.find(item => item.id === product.id)
      if (existing) existing.quantity += 1
      else this.cartItems.push({ ...product, quantity: 1 })
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
    },
    updateQuantity(id, qty) {
      const item = this.cartItems.find(item => item.id === id)
      if (item) item.quantity = qty
    },
    openCart() { this.isCartOpen = true },
    closeCart() { this.isCartOpen = false },
  }
})

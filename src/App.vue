<template>
  <div id="app">
   <div class="nav-bar"></div>
      <div class="cart">Cart({{ cart.length }})</div>
      <a :href="cheatUrl" target="_blank">CheatSheet</a>
      <productDisplay @add-to-cart="updateCart" :premium="premium" />
    </div>
</template>

<script>
import productDisplay from "./components/ProductDisplay.vue";
  export default {
    data() {
      return {
        cart: [],
        cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
        premium: true
      }
    },
    name: 'App',
    methods: {
      updateCart(id) {
        this.cart.push(id)
      }

    },
    components: {
      productDisplay
    },
  }
</script>


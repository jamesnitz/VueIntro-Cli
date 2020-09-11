<template>
  <div id="app">
   <div class="nav-bar"></div>
      <div class="cart">Cart({{ cart }})</div>
      <a :href="cheatUrl" target="_blank">CheatSheet</a>
      <productDisplay :premium="premium" />
    </div>
</template>

<script>
import productDisplay from "./components/ProductDisplay.vue";
  export default {
    data() {
      return {
        cart: 0,
        cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
        premium: true
      }
    },
    name: 'App',
    methods: {

    },
    components: {
      productDisplay
    },
  }
</script>


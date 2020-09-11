import 
<template>
  <div id="app">
   <div class="nav-bar"></div>
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <a :href="cheatUrl" target="_blank">CheatSheet</a>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: 'socks',
      image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
    }
  },
  name: 'App',
  components: {
  
  }
}
</script>


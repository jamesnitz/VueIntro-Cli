<template>
  <div id="app">
   <div class="nav-bar"></div>
      <div class="cart">Cart({{ cart }})</div>
            <a :href="cheatUrl" target="_blank">CheatSheet</a>
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" />
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <div class="product-details">
              <ul>
                <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
              </ul>
              <ul>
                <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
              </ul>
            </div>
            <div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{ variant.color }}</div>
            <button @click="addToCart" class="button">Add to Cart</button>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
import greenImage from "./assets/images/green.jpg"
import blueImage from "./assets/images/blue.jpg"
export default {
  data() {
    return {
      cart: 0,
      product: 'socks',
      image: greenImage,
      cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {id: 2234, color: 'green', image: greenImage},
        {id: 2235, color: 'blue', image: blueImage}
      ],
      sizes: ['small', 'shmedium', 'smlarge']
    }
  },
  name: 'App',
  methods: {
    addToCart() {
      this.cart++
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  },
  components: {
  }
}
</script>


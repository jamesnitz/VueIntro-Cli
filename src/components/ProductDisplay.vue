<template>
   <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img 
            :class="{'out-of-stock-img': !inStock }" 
            :src="image" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock {{variants[selectedVariant].quantity}} left</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <productDetails :details="details" :sizes="sizes" />
            <div
             v-for="(variant, index) in variants"
             class="color-circle" 
             :key="variant.id" 
             @mouseover="updateVariant(index)"
             :style="{backgroundColor: variant.color}">
            </div>
            <button
              :class="{disabledButton: !inStock }"
              :disabled="!inStock"
              @click="addToCart" 
              class="button">
              Add to Cart
            </button>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div> 
</template>

<script>
import productDetails from "./ProductDetails.vue"
import ReviewForm from "./ReviewForm.vue"
import ReviewList from "./ReviewList.vue"
import greenImage from "../assets/images/green.jpg"
import blueImage from "../assets/images/blue.jpg"
export default {
  name: 'productDisplay',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  components: {
    productDetails,
    ReviewForm,
    ReviewList
  },
  data() {
    return {
      product: 'socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {id: 2234, color: 'green', image: greenImage, quantity: 50},
        {id: 2235, color: 'blue', image: blueImage, quantity: 0}
      ],
      sizes: ['small', 'shmedium', 'smlarge'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock(){
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return '$2.99'
    }
  }
}
</script>

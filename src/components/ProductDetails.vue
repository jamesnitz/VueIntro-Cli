<template>
<div class="product-details">
  <ul>
    <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
  </ul>
  <ul>
    <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
  </ul>
</div>
</template>


<script>
export default {
  name: 'productDetails',
  props: {
    details: {
      type: Array,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    }
  }
}
</script>


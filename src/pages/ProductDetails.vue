<template>
  <div class="py-6 h-screen">
  <!-- Breadcrumbs -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center space-x-2 text-gray-400 text-sm">
      <a href="#" class="hover:underline hover:text-gray-600">Home</a>
      <span>
        <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <a href="#" class="hover:underline hover:text-gray-600">Electronics</a>
      <span>
        <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <span>Headphones</span>
    </div>
  </div>
  <!-- ./ Breadcrumbs -->
  <div class="grid grid-cols-1 sm:grid-cols-5 gap-6 px-20 mt-5">
    <div class="flex align-center justify-center bg-white rounded-lg border shadow-sm p-5 relative col-span-2 ">
      <div class="absolute top-1 right-1">
          <HeartCircle class="h-8 w-8 text-pink-400" />
      </div>
      <div class="">
        <img class="object-contain " :src="product.image" alt="">
      </div >
    </div>
    <div class="bg-blue-900 col-span-3">a</div>

  </div>
  
  </div>

</template>

<script>
import {HeartCircle } from 'mdue'

export default {
   computed: {
    product(){
      return this.$store.getters.getProduct(parseInt(this.$attrs.productID));
      }
  },
  components:{
    HeartCircle
  }
}
</script>

<style>

</style>
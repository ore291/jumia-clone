<template>
  <div class="mt-3 h-auto border rounded-lg bg-white ">
    <div class="flex items-center justify-between px-4 sm:h-[50px]  w-full bg-lightPurpBg  rounded-t">
      <h1 v-html="title" class="font-medium text-xl tracking-wide "></h1>
      <div class="flex items-center justify-center cursor-pointer">
        <h1 class="font-medium text-sm">SEE ALL</h1>
        <ChevronRight class="text-2xl -ml-1  font-normal" />
      </div >
      
    </div >
    
    <div
      v-if="products"
      class="grid grid-cols-hsc grid-rows-hsr  gap-0.5  sm:grid-cols-6 sm:gap-2 my-2 sm:justify-between sm:items-center overflow-x-scroll sm:overflow-hidden grid-flow-col auto-cols-max px-5"
    >
      <div v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
    <div v-else class="flex justify-center items-center">
      <div
        class="spinner-grow inline-block w-8 text-orng h-8 bg-current rounded-full opacity-0"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Product from "./Product.vue";
import {ChevronRight}  from 'mdue'

export default {
  components: {
    Product,
    ChevronRight
  },

  // data() {
  //   return {
  //     randomProducts: null
  //   };
  // },
  props: ["title","products"],
  
  methods: {
    
  },
  
};
</script>

<style></style>

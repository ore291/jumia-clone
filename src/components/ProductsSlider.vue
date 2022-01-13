<template>
  <div class="mt-3 h-auto border rounded-lg bg-white sm:py-4 sm:px-1">
    <h1 class="font-medium text-xl mb-2 ml-4">{{ title }}</h1>
    <div
      v-if="randomProducts"
      class="grid grid-cols-hsc grid-rows-hsr gap-[10px] sm:grid-cols-6 sm:gap-2 sm:justify-between sm:items-center overflow-x-scroll sm:overflow-hidden grid-flow-col auto-cols-max px-5"
    >
      <div v-for="product in randomProducts" :key="product.id">
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

export default {
  components: {
    Product,
  },

  // data() {
  //   return {
  //     randomProducts: null
  //   };
  // },
  props: ["title", "latest",],
  computed:{
    randomProducts(){
      return this.latest ? this.$store.getters.products.slice(0,6) : this.$store.getters.randproducts
    },
    
  },
  methods: {
    
  },
  
};
</script>

<style></style>

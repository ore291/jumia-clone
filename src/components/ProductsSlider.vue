<template>
  <div class="mt-3 border rounded-lg bg-white  sm:py-4 sm:px-1">
    <h1 class="font-medium text-xl mb-2 ml-4">{{title}}</h1>
    <div
      class="grid grid-cols-hsc grid-rows-hsr gap-[10px] sm:grid-cols-6 sm:gap-2 sm:justify-between sm:items-center overflow-x-scroll sm:overflow-hidden grid-flow-col auto-cols-max px-5"
    >
      <div v-for="product in randomProducts" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      
    }
  },
  props: ["title"],
 computed: {
    randomProducts(){
      return this.$store.state.products && this.$store.getters.products.sort(() => 0.5 - Math.random()).slice(0, 6);
    }
  },
};
</script>

<style>
</style>
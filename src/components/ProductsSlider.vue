<template>
  <div class="mt-3 border rounded-lg bg-white  sm:py-4 sm:px-1">
    <h1 class="font-medium text-xl mb-2">Top Selling Items</h1>
    <div
      class="grid grid-cols-hsc grid-rows-hsr gap-[10px] sm:grid-cols-6 sm:gap-2 sm:justify-between sm:items-center overflow-x-scroll sm:overflow-hidden grid-flow-col auto-cols-max px-5"
    >
      <div v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  props: ["products"],
};
</script>

<style>
</style>
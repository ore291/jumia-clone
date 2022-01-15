<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// class="flex-1 overflow-y-auto"
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
</script>

<script>
export default {
  async created() {
    await this.$store.dispatch("fetchProducts");
  },
};
</script>

<template>
  <div class="bg-neutral-100 ">
      <Header v-if="$route.name === 'home'"/>
      <Nav class="sticky top-0 z-50" />
    <router-view> </router-view >
    <Footer v-if="$route.name === 'home'"/>
  </div>
</template>

<style scoped>
</style>
  


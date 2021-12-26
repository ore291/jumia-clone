<script setup>
import Nav from './Nav.vue'
// import { ref } from 'vue'
// hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1
// defineProps({
//   msg: String
// })

// const count = ref(0)
</script>

<template>
  <div >
    <div class="hidden md:block">
      <div class="relative w-full my-0 bg-orng">
      <img
        class="mx-auto mt-0 h-full"
        src="../assets/TopStrip_ChristmasSale.gif"
        alt="top-strip"
      />
    </div>
    <div
      class="flex flex-row  mx-auto text-xs py-1.5 items-center justify-between"
    >
      <div
        class="basis-2/12 justify-start flex flex-wrap justify-center items-center"
      >
        <img class="h-4 mr-1" src="../assets/Asset 1.svg" alt="" />
        <a
          href="#"
          class="text-[#f68b1e] bg-transparent font-medium hover:underline"
          >Sell on Jumia</a
        >
      </div>
      <div
        class="basis-8/12 justify-center  items-center flex flex-row text-[#75757a]"
      >
        <div class="mr-2">
          <img class="h-4" src="../assets/jumia-seeklogo.com.svg" alt="" />
        </div>
        <div class="cursor-pointer">
          <img src="../assets/headerlinks.PNG" alt="">
        </div>
      </div>
      <div class="basis-2/12 justify-end"></div>
    </div>
    </div>
    <Nav />
  </div>
</template>

<style scoped>
</style>

<script setup>

// import { ref } from 'vue'
// hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1
// defineProps({
//   msg: String
// })

// const count = ref(0)
</script>

<template>
  <div class="bg-neutral-100 relative" >
    <div class="hidden md:block ">
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
        class="basis-2/12 justify-center flex flex-wrap  items-center"
      >
        <img class="h-4 mr-1" src="../assets/Asset-1.svg" alt="" />
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
          <!-- <img src="../assets/headerlinks.png" alt=""> -->
        </div>
      </div>
      <div class="basis-2/12 justify-end"></div>
    </div>
    </div>
  </div >
</template>

<style scoped>
</style>

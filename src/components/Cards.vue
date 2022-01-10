<template>
  <div
    class="bg-white my-2 rounded cursor-pointer"
  >
    <div class="flex items-center justify-center h-[50px]  w-full bg-lightPurpBg  rounded-t" v-show="header">
      <p v-html="headerText" class="text-xl font-medium text-text"></p >
    </div>
    <div class=" grid grid-cols-2 gap-x-1 items-center justify-center mx-3 h-[270px] ">
      <div class="flex justify-center object-contain transform transition duration-[50ms] hover:scale-[1.04]">
        <img class="rounded-md" :src="leftImage" alt="" />
      </div >
      <div class="flex justify-center object-contain transform transition duration-[50ms] hover:scale-[1.04]">
        <img class="rounded-md" :src="rightImage" alt="" />
      </div >
    </div >
  </div>
</template>

<script>
export default {
  props: ["header", "leftImage", "rightImage", "headerText"],
};
</script>

<style>
</style>
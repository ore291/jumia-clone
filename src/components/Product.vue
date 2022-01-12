<template>
<div class="w-full sm:w-48 bg-white p-1 hover:shadow-xl sm:transform sm:transition hover:scale-105 cursor-pointer">
    <div class="relative mb-1">
        <span class="text-xs absolute mt-1 min-w-10  right-[8px] text-disc bg-discbg py-1 px-1.5 font-medium align-top">-40%</span >
        <img class="object-contain h-32 sm:h-40 " :src="product.image" :alt="product.title">
    </div >
    <div class="flex flex-col  text-sm w-full tracking-wide align-middle ml-3 pr-4 leading-4">
        <p class="truncate ...">{{product.title}}</p >
        <span class="text-lg font-medium truncate ..."><del>&#8358;</del>{{Intl.NumberFormat('en-US').format(product.price * 413)}}</span >
        <span class="text-xs font-light line-through"><del>&#8358;</del>1200</span >
<ul class="flex justify-start " >
  <li v-for="index in Math.round(product.rating.rate)"  :key='index'>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  </li>
  
</ul>
    </div >
</div >
  
</template>

<script>
export default {
    props: ['product',]
}
</script>

<style>

</style>
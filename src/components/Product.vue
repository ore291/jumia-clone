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
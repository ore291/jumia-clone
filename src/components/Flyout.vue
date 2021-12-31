<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-4 mt-2 place-items-center">
      <div
        class="bg-white hidden sm:block rounded-md hover:shadow-xl shadow-md"
      >
        <div class="pt-2 pl-4 pr-16">
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <CartOutline />
            <span class="text-xs tracking-wide ml-1">Supermarket</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <LotionPlusOutline />
            <span class="text-xs tracking-wide ml-1">Health and Beauty</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <ViewStreamOutline />
            <span class="text-xs tracking-wide ml-1">Electronics</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <TabletCellphone />
            <span class="text-xs tracking-wide ml-1">Phones & Tablets</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <Laptop />
            <span class="text-xs tracking-wide ml-1">Computing</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <Lipstick />
            <span class="text-xs tracking-wide ml-1">Fashion</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <GamepadVariantOutline />
            <span class="text-xs tracking-wide ml-1">Gaming</span>
          </div>
          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <HomeCityOutline />
            <span class="text-xs tracking-wide ml-1">Home & Office</span>
          </div>

          <div class="flex py-3 hover:text-orange-400 hover:cursor-pointer">
            <DotsHorizontalCircleOutline />
            <span class="text-xs  ml-1">Other categories</span>
          </div>
        </div>
      </div>
      <div class="col-span-2  cursor-pointer w-full px-2 sm:p-0">
        <Carousel :autoplay="4500" :items-to-show="1" :wrapAround="true">
          <Slide class="sm:h-full" v-for="(slide, index) in slides" :key="index">
            <img
              class="carousel__item rounded object-contain"
              :src="getSrc(slide)"
              alt="slider-img"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="sm:p-4">
        <div class="grid grid-cols-1 gap-y-2 hidden sm:block place-content-center">
        <div><img class="rounded" src="../assets/BSB---jp.gif" alt="" /></div>
        <div><img class="rounded" src="../assets/PickUp_BSB.gif" alt="" /></div>
      </div>
    </div>
    </div>
    <section class="sm:mx-16 sm:pl-2 sm:my-2 px-2 mt-2">
      <div class="grid grid-cols-4 sm:gap-6  rounded-lg sm:rounded-none place-content-evenly">
      <div class=" h-[100px] sm:h-14 bg-white sm:rounded-md sm:shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/eyc.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Top Deals</p >
      </div>
      <div class=" h-[100px] sm:h-14 bg-white sm:rounded-md sm:shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 mt-3 sm:h-10 sm:w-10 sm:mr-4" src="../assets/official-stores_new.png" alt="">
        <p class="text-xs sm:text-sm text-center text-wrap sm:font-medium sm:tracking-wide">10% Off Everything</p >
      </div>
      <div class=" h-[100px] sm:h-14 bg-white sm:rounded-md sm:shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/jumia-pay.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Borrow Money</p >
      </div>
      <div class="h-[100px] sm:h-14 bg-white sm:rounded-md sm:shadow-lg flex-col sm:flex-row flex items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/jumia-food.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Jumia Food</p >
      </div>
      <div class="h-[100px] sm:h-14 bg-white sm:hidden sm:rounded-md sm:shadow-lg flex-col sm:flex-row flex items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/mobile1.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Accessories</p >
      </div>
      <div class="bg-white h-[100px] sm:h-14 sm:hidden sm:rounded-md sm:shadow-lg flex-col sm:flex-row flex items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/mobile2.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Flash Sales</p >
      </div>
      <div class="h-[100px] sm:h-14 bg-white sm:hidden sm:rounded-md sm:shadow-lg flex-col sm:flex-row flex items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/mobile3.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Phones</p >
      </div>
      <div class="h-[100px] sm:h-14 bg-white sm:hidden sm:rounded-md sm:shadow-lg flex-col sm:flex-row flex items-center justify-center sm:justify-start sm:px-2 sm:py-2 cursor-pointer" >
        <img class="w-[50px] h-[50px] mb-2 sm:h-10 sm:w-10 sm:mr-4" src="../assets/mobile4.png" alt="">
        <p class="text-xs sm:text-sm text-center text-truncate sm:font-medium sm:tracking-wide">Jumia Prime</p >
      </div>
    </div>
    </section >
    
     

  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {
  LotionPlusOutline,
  TabletCellphone,
  Laptop,
  CartOutline,
  ViewStreamOutline,
  Lipstick,
  GamepadVariantOutline,
  HomeCityOutline,
  DotsHorizontalCircleOutline,
} from "mdue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  methods: {
    getSrc(img) {
      const imgUrl = new URL(img, import.meta.url);
      return imgUrl;
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    LotionPlusOutline,
    ViewStreamOutline,
    TabletCellphone,
    Laptop,
    CartOutline,
    Lipstick,
    GamepadVariantOutline,
    HomeCityOutline,
    DotsHorizontalCircleOutline,
  },
  data() {
    return {
      slides: [
        "../assets/_Slider.jpg",
        "../assets/Slider-(3).png",
        "../assets/sx-dec-15.gif",
        "../assets/decSlide1.jpg",
        "../assets/decSlide2.jpg",
        "../assets/decSlide3.jpg",
        "../assets/decSlide4.jpg",
        "../assets/decSlide5.jpg",
        "../assets/Slider_copy.jpg",
        "../assets/price-edit.jpg",
      ],
    };
  },
};
</script>

<style>
.carousel__item {
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .carousel__slide {
  padding: 10px;
} */

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid black; */
  background-color: black !important;
  color: white;
}

@media (max-width: 640px) {
  .carousel__prev,
  .carousel__next {
    display: none;
  }
}
</style>
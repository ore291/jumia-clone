<template>
  <div class="grid grid-cols-4 gap-6 mt-4 place-items-center">
    <div class="bg-red-400">a</div>
    <div class="col-span-2">
      <Carousel :autoplay="2000" :items-to-show="1">
        <Slide v-for="(slide, index) in slides" :key="index">
          <img :src="getSrc(slide)" alt="" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel >
    </div>
    <div class="grid grid-cols-1 gap-3">
      <div><img class="rounded" src="../assets/BSB---jp.gif" alt="" /></div>
      <div><img class="rounded" src="../assets/PickUp_BSB.gif" alt="" /></div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
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
  },
  data() {
    return {
      slides: [
        "../assets/_Slider.jpg",
        "../assets/Flight_Slider.jpg",
        "../assets/Slider-(3).png",
        "../assets/sx-dec-15.gif"
      ],
    };
  },
};
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
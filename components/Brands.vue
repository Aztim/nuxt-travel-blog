<template>
  <!-- brand section  -->
  <section class="brand-container">
    <div class="swiper-container brand-slider">
      <div class="swiper-wrapper">
        <VueSlickCarousel v-bind="settings">
          <div
            class="swiper-slide"
            v-for="img in images"
            :key="img.id">
              <img :src="img.imageUrl" alt="">
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      images: [
        {
          id: 1,
          imageUrl: require("../assets/images/brands/1.jpg")
        },
        {
          id: 2,
          imageUrl: require("../assets/images/brands/2.jpg")
        },
        {
          id: 3,
           imageUrl: require("../assets/images/brands/3.jpg")
        },
        {
          id: 4,
           imageUrl: require("../assets/images/brands/4.jpg")
        },
        {
          id: 5,
           imageUrl: require("../assets/images/brands/5.jpg")
        },
        {
          id: 6,
           imageUrl: require("../assets/images/brands/6.jpg")
        },
      ],
       settings:
        {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 2000,
        "autoplaySpeed": 2000,
        "cssEase": "linear"
      }
    }
  }
}
</script>

<style>
/* .brand-container{
  text-align: center;
} */
</style>


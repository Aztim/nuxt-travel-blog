<template>
  <!-- brand section  -->
  <section class="brand-container">
    <div class="swiper-container brand-slider">
      <div class="swiper-wrapper">
         <swiper class="swiper"
          :options="swiperOption"
        >
          <div
            class="swiper-slide"
            v-for="img in images"
            :key="img.id">
              <img :src="img.imageUrl" alt="">
          </div>

        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // // optional style for arrows & dots
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    // VueSlickCarousel
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
            breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5,
            }
        },

      },
      images: [
        {
          id: 1,
          // imageUrl: require("~/static/img/brands/1.jpg")
          imageUrl: require("~/static/img/brands/1.jpg")
        },
        {
          id: 2,
          imageUrl: require("~/static/img/brands/2.jpg")
        },
        {
          id: 3,
           imageUrl: require("~/static/img/brands/3.jpg")
        },
        {
          id: 4,
           imageUrl: require("~/static/img/brands/4.jpg")
        },
        {
          id: 5,
           imageUrl: require("~/static/img/brands/5.jpg")
        },
        {
          id: 6,
           imageUrl: require("~/static/img/brands/6.jpg")
        },
      ],
      //  settings:
      //   {
      //   "arrows": false,
      //   "dots": false,
      //   "infinite": true,
      //   "slidesToShow": 4,
      //   "slidesToScroll": 1,
      //   "autoplay": true,
      //   "speed": 2000,
      //   "autoplaySpeed": 2000,
      //   "cssEase": "linear"
      // }
    }
  }
}
</script>

<style>

</style>


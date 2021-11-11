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
            :key="img.id"
          >
            <img :src="img.imageUrl" alt="">
          </div>

        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
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
      ]
    }
  }
}
</script>

<style>

</style>


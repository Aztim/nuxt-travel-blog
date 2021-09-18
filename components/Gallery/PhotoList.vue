<template>
  <section class="gallery"  id="gallery">
    <Intro title="Gallery:"/>
  <div class="image-container">
    <Photo
      v-for="photo in photos" :key="photo.id"
      :photo="photo"
      @popupImage="showPopupImage"
    />

    <div class="popup-image" v-show="img">
      <span @click="closePopUpImage">&times;</span>
      <img :src="img" alt="">
    </div>
  </div>

  </section>
</template>

<script>
import Photo from '@/components/Gallery/Photo.vue'
export default {
  components: { Photo },
  props: {
    photos: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      img: null
    }
  },
  methods: {
    showPopupImage (img) {
      this.img = img
    },
    closePopUpImage () {
      this.img = null
    }
  }
}
</script>

<style scoped>

</style>

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

<style lang="scss">

/* Gallery */

.gallery .image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 5px;

  .image {
    height: 350px;
    width: 450px;
    border: 10px solid #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    overflow: hidden;
    cursor: pointer;

    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: .2s linear;
    }

    &:hover img{
      transform: scale(1.1);
    }
  }


  .popup-image {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.9);
    height: 100%;
    width: 100%;
    z-index: 100;
    display: block;

    span{
      position: absolute;
      top: 120px;
      right: 20px;
      font-size: 60px;
      font-weight: bolder;
      color: #fff;
      cursor: pointer;
      z-index: 1000;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid #fff;
      border-radius: 5px;
      width: 750px;
      object-fit: cover;
    }

  }

}

@media (max-width: 768px){
  .gallery .popup-image img {
      width: 95%;
  }
}
</style>

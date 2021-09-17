<template>
  <div class="box" @click="ShowPopupImage">
    <img :src="photo.img" :alt="photo.title">
    <div class="content">
      <h3><i class="fas fa-map-marker-alt"></i>{{ photo.title }}</h3>
      <p>{{ photo.descr }}</p>
    </div>

    <!-- <div class="popup-image">
      <span>&times;</span>
      <img src="~/assets/images/gallery/g-1.jpg" alt="">
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ShowPopupImage() {

    }
  }
  // computed: {
  //   getLink () {
  //     return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
  //   }
  // }
}
</script>

<style>

</style>

<template>
  <div class="image" @click="showPopupImage">
    <img :src="photo.img" :alt="photo.title">

    <div class="content">
      <h3><i class="fas fa-map-marker-alt"></i>{{ photo.title }}</h3>
      <p></p>
    </div>
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
    showPopupImage() {
     this.$emit('popupImage', this.photo.img)
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

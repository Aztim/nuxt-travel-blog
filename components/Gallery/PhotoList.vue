<template>
  <section  id="gallery">
    <div class="box-container">
      <Photo
        v-for="photo in photos" :key="photo.id"
        :photo="photo"
      />
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
  }
}
</script>

<style scoped>
</style>

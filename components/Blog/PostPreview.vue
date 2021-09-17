<template>
  <nuxt-link :to="getLink" class="box">
    <img :src="post.img" :alt="post.title">
    <div class="content">
      <h3><i class="fas fa-map-marker-alt"></i>{{ post.title }}</h3>
      <p>{{ post.descr }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>

<style>

</style>

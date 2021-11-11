<template>
  <nuxt-link :to="getLink" class="box">
    <img :src="post.filePath" :alt="post.title" :style="`height:${img_height}rem`">
    <!-- :style="`height:${img_height}rem`" -->
    <div class="content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
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
    },
    img_height: {
      type: Number,
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

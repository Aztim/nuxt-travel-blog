<template>
  <section class="posts" id="posts">
    <Intro title="My latest posts:"/>
      <div class="box-container">
          <PostPreview
            v-for="post in posts" :key="post.id"
            :admin="admin"
            :post="post" />
      </div>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview.vue'
export default {
  components: { PostPreview },
  props: {
    posts: {
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
.box-container{
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
}

</style>

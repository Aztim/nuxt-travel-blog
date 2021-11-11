<template>
  <section class="posts" id="posts">
    <div class="box-container">
      <PostPreview
        v-for="post in posts" :key="post.id"
        :admin="admin"
        :post="post"
        :img_height="25"
      />
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

<style lang="scss">
.box-container{
  display: flex;
  flex-wrap: wrap;
  gap:2rem;

  .box{
    flex:1 1 30rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
    }

  .box img{
    /* height: 25rem; */
    width:100%;
    object-fit: cover;
  }
}




</style>

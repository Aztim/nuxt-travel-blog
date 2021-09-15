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
.box{
  flex:1 1 30rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}
.box img{
  height: 25rem;
  width:100%;
  object-fit: cover;
}

.content{
  padding:2rem;
}

.content h3{
  font-size:2rem;
  color:#333;
}

/* .content h3 i{
  color:var(--orange);
} */

.content p{
  font-size:1.7rem;
  color:#666;
  padding:1rem 0;
}
</style>

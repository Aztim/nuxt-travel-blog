<template>
  <div>
    <Intro title="My posts: "/>
    <PostsList :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
 data () {
    return {}
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

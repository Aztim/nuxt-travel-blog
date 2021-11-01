<template>
  <section class="admin">
    <PostsList :admin= true :posts="postsLoaded" />
  </section>
</template>

<script>
export default {
  layout: 'admin',
  mounted () {
    this.$store.dispatch('nuxtServerInit')
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style scoped>
</style>
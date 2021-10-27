<template>
  <header>
    <!-- <div id="menu-bar" class="fas fa-bars"></div>/ -->

    <nuxt-link to="/" class="logo">
      <span>Travel</span>Blog
    </nuxt-link>

    <div class="content">
      <nav class="navbar" v-for="link in links" :key="link.title">
        <nuxt-link
          class="navbar-link"
          :title="link.title"
          :to="link.url">
            {{ link.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="icons">
      <nuxt-link to="/admin" v-if="checkAuthUser">
        <i class="fas fa-tools" id="admin-tools"></i>
      </nuxt-link>

      <i v-else
        class="fas fa-user"
        id="login-btn"
        @click="$emit('openAuthWindow')">
      </i>
    </div>
  </header>
</template>


<script>
export default {
  data () {
    return {
      isOpen: false,
      links: [
        { title: 'Blog', url: '/blog' },
        { title: 'Gallery', url: '/gallery' },
        { title: 'About', url: '/about' }
      ]
    }
  },
  computed: {
    checkAuthUser () {
      return this.$store.getters.checkAuthUser
    }
  },
  methods: {}
}
</script>

<style lang="scss">
</style>

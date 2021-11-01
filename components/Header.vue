<template>
  <header>
    <div id="menu-bar"><i class="fas fa-bars" @click="isActive = !isActive"></i></div>

    <nuxt-link to="/" class="logo">
      <span>Travel</span>Blog
    </nuxt-link>

     <!-- <nav class="navbar" :class="{ active: isActive }">
      <a href="#home">home</a>
      <a href="#book">book</a>
      <a href="#packages">packages</a>
      <a href="#services">services</a>
      <a href="#gallery">gallery</a>
      <a href="#review">review</a>
      <a href="#contact">contact</a>
    </nav> -->

    <div class="content">
      <nav class="navbar" :class="{ active: isActive }" v-for="link in links" :key="link.title">
        <nuxt-link
          class="navbar-link"
          :title="link.title"
          :to="link.url">
            {{ link.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="icons">
      <div v-if="checkAuthUser">
        <nuxt-link to="/admin" >
          <i class="fas fa-tools" id="admin-tools"></i>
        </nuxt-link>
        <span @click="logoutUser"><i class="fas fa-sign-out-alt"></i></span>
      </div>


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
      isActive: false,
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
    },
  },
  methods: {
      logoutUser () {
        this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="scss">
</style>

<template>
  <header>
    <!-- <div id="menu-bar" class="fas fa-bars"></div> -->

    <nuxt-link to="/" class="logo">
      <span>Travel</span>Blog
    </nuxt-link>

    <div class="content">
      <nav class="navbar" v-for="link in links" :key="link.title">
        <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
      </nav>

        <div class="icons">
          <i class="fas fa-search" id="search-btn"></i>
        </div>

      <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here...">
        <label for="search-bar" class="fas fa-search"></label>
      </form>
    </div>
  </header>
</template>


<script>
export default {
  data () {
    return {
      links: [
        { title: 'Gallery', url: '/gallery' },
        { title: 'About', url: '/about' }
      ]
    }
  },
  methods: {
    // isOPen () {
    //   this.isOPen = !this.isOPen
    // }
  }
}
</script>

<style lang="scss">

</style>


<template>
  <header>
    <div id="menu-bar" class="fas fa-bars"></div>
  <div class="navbar-content">
    <nuxt-link to="/" class="logo">
      <span>Travel</span>Blog
    </nuxt-link>

    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.title">
          <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
   </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Blog', url: '/blog' },
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


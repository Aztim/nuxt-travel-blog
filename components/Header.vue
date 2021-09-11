<template>
  <header>
    <div class="navbar">
      <div class="nav-center">
        <div class="navbar-header">
          <!-- <div class="logo"> <nuxt-link to="/">Blog</nuxt-link></div> -->
          <nuxt-link to="/">
            <img src="~/assets/images/logo.svg" alt="Beach Resort">
          </nuxt-link>

          <button
            class="nav-btn"
            type="button"
            @click="isOPen"
          >
            <!-- <i class="fas fa-align-right nav-icon"></i> -->
           <i class="fab fa-500px"></i>
          </button>

          <ul :class="[isOPen ? ['nav-links', 'show-nav'] : 'nav-links']">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      links: [
        { title: 'Home', url: '/home' },
        { title: 'Rooms', url: '/Rooms' }
        // { title: 'Topics', url: '/topics' }
      ]
    }
  },
  methods: {
    isOPen () {
      this.isOPen = !this.isOPen
    }
  }
}
</script>

<style lang="scss">

</style>


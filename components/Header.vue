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

      <!-- <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here...">
        <label for="search-bar" class="fas fa-search"></label>
      </form> -->
    </div>

    <div class="icons">
      <nuxt-link to="/admin" v-if="checkAuthUser">
        <i
          class="fas fa-tools"
          id="admin-tools"
        ></i>
      </nuxt-link>

      <i v-else
        class="fas fa-user"
        id="login-btn"
        @click="$emit('openAuthWindow')"></i>
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
  methods: {
    // isOPen () {
    //   this.isOPen = !this.isOPen
    // }
  }
}
</script>

<style lang="scss">
.login-form-container{
  position: fixed;
  top:-120%; left: 0;
  z-index: 10000;
  min-height: 100vh;
  width:100%;
  background:rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form-container.active{
  top:0;
}

.login-form-container form{
  margin:2rem;
  padding:1.5rem 2rem;
  border-radius: .5rem;
  background:#fff;
  width:50rem;
}

.login-form-container form h3{
  font-size: 3rem;
  color:#444;
  text-transform: uppercase;
  text-align: center;
  padding:1rem 0;
}

.login-form-container form .box{
  width:100%;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  margin:.6rem 0;
  border:.1rem solid rgba(0,0,0,.3);
  text-transform: none;
}

.login-form-container form .box:focus{
  border-color: var(--orange);;
}

.login-form-container form #remember{
  margin:2rem 0;
}

.login-form-container form label{
  font-size: 1.5rem;
}

.login-form-container form .btn{
  display: block;
  width:100%;
}

.login-form-container form p{
  padding:.5rem 0;
  font-size: 1.5rem;
  color:#666;
}

.login-form-container form p a{
  color:var(--orange);
}

.login-form-container form p a:hover{
  color:#333;
  text-decoration: underline;
}

.login-form-container #form-close{
  position: absolute;
  top:2rem; right:3rem;
  font-size: 5rem;
  color:#fff;
  cursor: pointer;
}

</style>

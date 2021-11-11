<template>
  <section class="admin">
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <div class="admin_links">
          <nuxt-link to="/admin" class="link linkWhite"> Admin </nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite"> New Post </nuxt-link>
          <nuxt-link to="/admin/comments" class="link linkWhite"> Comments </nuxt-link>
        </div>
      </Intro>
      <nuxt />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Header,Footer  },
  middleware: ['auth-check','auth'],
  methods: {
    // logoutUser () {
    //   this.$store.dispatch('logoutUser')
    //     .then(() => {
    //       this.$router.push('/')
    //     })
    // }
  }
}
</script>

<style lang="scss">
  .admin .heading h1{
  margin: 100px 0px 50px;
}

.admin .admin_links {
  font-size:2.1rem;
  font-weight: bold;
}

.link {
  cursor: pointer;
  // border-bottom: 1px solid #9aa4d6;
  color: #4343aa;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
  &.linkWhite {
    // border-bottom: 1px solid red;
    color: red;
  }
}

</style>
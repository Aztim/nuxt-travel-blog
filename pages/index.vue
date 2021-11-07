<template>
  <div>
    <Promo/>
    <Intro title="My latest posts:"/>
    <PostsList :posts="postsLoaded" />
    <Contacts/>
    <Brands/>
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'
import Brands from '@/components/Brands.vue'

export default {
  components : {
    Promo,
    Contacts,
    Brands
  },
  head () {
    let title = 'My Travel-Blog!',
    descr = 'My Travel-Blog! With Nuxt.js',
    type = 'site'
    return {
      title: title,
      meta: [
        {hid: 'og:title', name: 'og:title', content: title},
        {hid: 'discription', name: 'discription', content: descr},
        {hid: 'og:discription', name: 'og:discription', content: descr},
        {hid: 'og:type', name: 'og:type', content: type}
      ]
    }
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded.slice(0, 4)
    }
  },
  data () {
    return {}
  }
}
</script>

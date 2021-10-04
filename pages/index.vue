<template>
  <div>
    <Promo/>
    <Intro title="My latest posts:"/>
    <PostsList :posts="postsLoaded" />
    <Contacts/>
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'
export default {
  components : {
    Promo,
    Contacts
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

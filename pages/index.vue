<template>
  <div>
    <Promo/>
    <PostsList :posts="posts" />
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
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'Mumbai',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-1.jpg'),
        },
        {
          id: 2,
          title: 'Norway',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-2.jpg'),
        },
        {
          id: 3,
          title: 'Sydney',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-3.jpg'),
        },
        {
          id: 4,
          title: 'Paris',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-4.jpg'),
        }
      ]
    }
  }
}
</script>

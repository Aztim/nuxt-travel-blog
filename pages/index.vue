<template>
  <div>
    <promo/>
    <Intro title="My latest posts:"/>
    <PostsList :posts="posts" />
    <contacts/>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'
export default {
  components : {
    promo,
    contacts
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
        },
        {
          id: 5,
          title: 'Cape Town',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-5.jpg'),
        },
        {
          id: 6,
          title: 'Rome',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-6.jpg'),
        },
        {
          id: 7,
          title: 'Los Angeles',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-7.jpg'),
        },
        {
          id: 8,
          title: 'Moscow',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/p-8.jpg'),
        }
      ]
    }
  }
}
</script>

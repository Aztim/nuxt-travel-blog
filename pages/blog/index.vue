<template>
  <div>
    <Intro title="My posts: "/>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
export default {
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

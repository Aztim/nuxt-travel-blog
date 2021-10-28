<template>
  <div >
    <PhotoList :photos="photos" />
  </div>
</template>

<script>
import PhotoList  from '~/components/Gallery/PhotoList.vue'
export default {
  components: { PhotoList },
  data () {
    return {
      photos: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-1.jpg')
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-2.jpg')
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-3.jpg')
        },
        {
          id: 4,
          title: '4 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-4.jpg')
        },
        {
          id: 5,
          title: '5 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-5.jpg')
        },
        {
          id: 6,
          title: '6 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-6.jpg')
        },
        {
          id: 7,
          title: '7 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-7.jpg')
        },
        {
          id: 8,
          title: '8 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-8.jpg')
        },
        {
          id: 9,
          title: '9 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/static/img/gallery/g-9.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" >
</style>

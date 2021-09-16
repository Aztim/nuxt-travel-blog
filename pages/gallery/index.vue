<template>
  <section class="gallery" id="gallery">
    <Intro title="Gallery: "/>
       <!-- <Intro title="Contact"/> -->
    <PostsList :posts="pictures" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      pictures: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-1.jpg')
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-2.jpg')
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-3.jpg')
        },
        {
          id: 4,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-4.jpg')
        },
        {
          id: 5,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-5.jpg')
        },
        {
          id: 6,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-6.jpg')
        },
        {
          id: 7,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-7.jpg')
        },
        {
          id: 8,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-8.jpg')
        },
        {
          id: 9,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-9.jpg')
        },
        {
          id: 9,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: require('~/assets/images/gallery/g-9.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.gallery .box-container .box{
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border:1rem solid #fff;
  border-radius: .5rem;
  flex:1 1 30rem;
  height: 25rem;
  position: relative;
}

.gallery .box-container .box img{
  height: 100%;
  width:100%;
  object-fit: cover;
}

.gallery .box-container .box .content{
  position: absolute;
  top:-100%; left:0;
  height: 100%;
  width:100%;
  text-align: center;
  background:rgba(0,0,0,.7);
  padding:2rem;
  padding-top: 5rem;
}

.gallery .box-container .box:hover .content{
  top:0;
}

.gallery .box-container .box .content h3{
  font-size: 2.5rem;
  color:var(--orange);
}

.gallery .box-container .box .content p{
  font-size: 1.5rem;
  color:#eee;
  padding:.5rem 0;
}

</style>

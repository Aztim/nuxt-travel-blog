<template>
  <section class="home" id="home">
    <div class="content">
        <h3>adventure is worthwhile</h3>
    </div>

  <div class="controls">
    <span
      v-for="video in video_data"
      :key="video.src"
      class="vid-btn"
      :class="video.id === selectedIndex ? 'active' : null"
      @click="sliderIndicator(video.id)"
      >
    </span>
  </div>

  <div class="video-container">
    <video
      :src="video_data[selectedIndex].img"
      id="video-slider"
      loop
      autoplay
      muted>
    </video>
  </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      video_data: [
        {id: 0, img: require('~/assets/video/vid-1.mp4')},
        {id: 1, img: require('~/assets/video/vid-2.mp4')},
        {id: 2, img: require('~/assets/video/vid-3.mp4')},
        {id: 3, img: require('~/assets/video/vid-4.mp4')},
        {id: 4, img: require('~/assets/video/vid-5.mp4')}
      ],
      selectedIndex: 0
    }
  },
  methods: {
    sliderIndicator(id) {
      this.selectedIndex = id;
    }
  }
}
</script>

<style lang="scss">
.home{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  z-index: 0;

  .content h3 {
    font-size: 4.5rem;
    color:#fff;
    text-transform: uppercase;
    text-shadow: 0 .3rem .5rem rgba(0,0,0,.1);
  }

  .video-container video{
    position: absolute;
    top:0; left: 0;
    z-index: -1;
    height: 100%;
    width:100%;
    object-fit: cover;
  }

  .controls{
    padding:1rem;
    border-radius: 5rem;
    background:rgba(0,0,0,.7);
    position: relative;
    top:10rem;

    .vid-btn{
      height:2rem;
      width:2rem;
      display: inline-block;
      border-radius: 50%;
      background:#fff;
      cursor: pointer;
      margin:0 .5rem;
    }

    .vid-btn.active{
      background:var(--orange);
    }
  }
}









</style>
<template>
  <section class="home" id="home">
  <div class="content">
      <h3>adventure is worthwhile</h3>
      <!-- <p>dicover new places with us, adventure awaits</p>
      <a href="#" class="btn">discover more</a> -->
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
    muted></video>
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


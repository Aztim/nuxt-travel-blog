<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <Intro title="About my blog:"/>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
      <div class="hero">

         <img src="~/static/img/boat/cloud.png" class="cloud" alt="">

          <div class="ocean">
            <img src="~/static/img/boat/water.png" class="water" alt="">
            <div class="boat">
              <img src="~/static/img/boat/boat.png" alt="">
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head () {
      let title = 'About',
      descr = 'About My Blog',
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
    }
  }
</script>


<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
    font-size: 2.5rem;
    padding:.5rem 0;
  }

  .hero {
    width: 100%;
    height: 80vh;
    position: relative;
    background-image: url(~/static/img/boat/background.jpg);
    background-size: cover;
    background-position: center;
    overflow: hidden;

    .cloud {
      height: 250px;
      position: absolute;
      right: 0;
      animation: cloud 10s linear infinite;
    }

    .ocean {
      height: 220px;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;

      .water {
        height: 100%;
        position: absolute;
        right: 0;
        animation: water 10s linear infinite;
      }

      .boat {
        width: 350px;
        position: absolute;
        bottom: 200px;
        left: 50%;
        transform: translateX(-50%);

      img {
          width: 100%;
          -webkit-box-reflect: below 0 linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.6));
          animation: boat 2s linear infinite;
        }
      }
    }
  }
}

@keyframes water {
  0%{
      transform: translateX(0);
  }
  100%{
      transform: translateX(700px);
  }
}

@keyframes boat {
  0%{
      transform: rotate(0deg) translateY(0);
  }
  25%{
      transform: rotate(-1deg) translateY(-3px);
  }
  50% {
      transform: rotate(0deg) translateY(-5px);
  }
  75%{
      transform: rotate(1deg) translateY(-3px);
  }
  100%{
      transform: rotate(0deg) translateY(0);
  }
}

@keyframes cloud {
  0%{
      transform: translateX(0);
  }
  100%{
      transform: translateX(500px);
  }
}
</style>

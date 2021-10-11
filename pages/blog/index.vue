<template>
  <div>
    <!-- <PostsList :posts="postsLoaded" />s -->
    <section class="container blog" >
       <Intro title="My posts: "/>
      <div class="site-content">
        <div class="posts">
          <div class="post-content" v-for="post in postsLoaded" :key="post.id" data-aos="zoom-in" data-aos-delay="200">
            <div class="post-image">
              <div>
                  <img :src="post.img" class="img" alt="blog1" style="height: 600px;">
                     <!-- <PostPreview
                      :post="post"
                      :img_height="700"
                      /> -->
              </div>
              <div class="post-info flex-row">
                  <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                  <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                  <span>2 Comments</span>
              </div>
            </div>

            <div class="post-title">
              <!-- <a href="#">Why should boys have all the fun? it's the women who are making india an
                  alcohol-loving contry</a> -->
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                  adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                  nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                  illum similique veniam tempore unde?
              </p>
              <button class="btn post-btn">Read More &nbsp; <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
          <hr>

          <div class="pagination flex-row">
            <a href="#"><i class="fas fa-chevron-left"></i></a>
            <a href="#" class="pages">1</a>
            <a href="#" class="pages">2</a>
            <a href="#" class="pages">3</a>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixin/aos'
// import PostPreview from '@/components/Blog/PostPreview.vue'
export default {
 data () {
    return {}
  },
//   components: { PostPreview },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  },
  mixins: [aosMixin]
}
</script>

<style scoped>

/* ---------------- Site Content ----------------*/
.blog .heading {
  margin-top: 100px;
}

.post-content{
    width: 90%;
    margin: 0 auto;
}

.post-image, .post-title{
    padding: 1rem 2rem;
    position: relative;
}

.post-image .post-info{
    background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    padding: 1rem;
    position: absolute;
    font-weight: bold;
    bottom: 0%;
    left: 30vw;
    border-radius: 3rem;
}

.post-image > div{
    overflow: hidden;
}

.post-image .img{
    width: 100%;
    transition: all 1s ease;
}

.post-image .img:hover{
    transform: scale(1.3);
}

.post-image .post-info span{
    margin: 0 .5rem;
}

/* .post-content .post-title a{
    font-family: cursive;
    font-size: 1.5rem;
} */

.post-title .post-btn{
  border-radius: 0;
  padding: .7rem 1.5rem;
}

.pagination{
    display: flex;
    justify-content: center;
    color: #3f4954;
    margin: 4rem 0;
}

.pagination a{
    padding: .6rem .9rem;
    border-radius: 2rem;
    margin: 0 .3rem;
    font-family: cursive;
}

.pagination .pages{
    background: #3f4954;
    color: #ffffff;
}

/* -------x-------- Site Content --------x-------*/

@media only screen and (max-width: 1130px){
    .post-info{
        left: 2rem !important;
        bottom: 1.2rem !important;
        border-radius: 0% !important;
    }

    .post-info{
        display: none !important;
    }

    /* footer.footer .container{
        grid-template-columns: repeat(2, 1fr);
    } */
}

@media only screen and (max-width: 520px){
    .post-image{
        height: 40vh;
    }

    /* .site-content .post-content > .post-image .post-info{
        display: none;
    } */

}
</style>
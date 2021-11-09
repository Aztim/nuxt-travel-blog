<template>
  <div>
    <section class="container blog" >
       <Intro title="My posts: "/>
      <div class="site-content">
        <div class="posts">
          <div class="post-content" v-for="post in items" :key="post.id" data-aos="zoom-in" data-aos-delay="200">
            <div class="post-image">
              <div>
                  <img :src="post.filePath" class="img" alt="blog1" style="height: 600px;">
              </div>
              <div class="post-info flex-row" >
                  <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin {{ post.author}}</span>
                  <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;{{ post.updatedDate | date }}</span>
                  <span >{{ commentsLength(post.id, commentsArray) }}</span>
              </div>
            </div>

            <div class="post-title">
              <p>
                {{ post.content }}
              </p>
              <nuxt-link :to="`/blog/${post.id}`">
                <button class="btn post-btn">
                  Read More &nbsp; <i class="fas fa-arrow-right"></i>
                </button>
              </nuxt-link>
            </div>
          </div>
          <hr>

          <paginate
            v-model="page"
            :page-count="pageCount"
            :click-handler="pageChangeHandler"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :containerClass="'pagination'"
            class="pagination"
            >
          </paginate>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Paginate from 'vuejs-paginate'
import aosMixin from '~/mixin/aos'
import paginationMixin from '~/mixin/pagination.mixin'
export default {
  mixins: [aosMixin, paginationMixin],
  data () {
    return {
      number: 0
    }
  },
  async asyncData () {
    let comments = await axios.get(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments.json`)
    let commentsArray = comments.data
     return {
      commentsArray
    }

  },
  components: { Paginate },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  },
  // watch: {
  //   postsLoaded() {
  //     this.setupPagination(this.postsLoaded)
  //   }
  // },

  mounted () {
    this.setupPagination(this.postsLoaded)
  },
  methods: {
    commentsLength(post, ret) {
      let num = 0
      for(let i in ret) {
        if (ret[i].postId === post) {
          num++
        }
      }
      return num
    }
  },

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

/* /!!!!!!!!!!!!!/ */


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
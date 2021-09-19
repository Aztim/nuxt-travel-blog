<template>
  <div class="post">
    <post :post="post" />
    <!-- <comments :comments="comments" /> -->
    <!-- <newComment /> -->
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
// import newComment from '@/components/Comments/NewComment.vue'
// import comments from '@/components/Comments/Comments.vue'

export default {
  components: { post },
  data () {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
      },
      comments: [
        { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur' },
        { name: 'Evgenii', text: 'Lorem ipsum dolor sit amet, consectetur' },
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
   margin-top: 120px;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px
  }
  p {
    color: #999999;
  }
}
.post-body {
  text-align: left;
}

</style>

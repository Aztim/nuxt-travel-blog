<template>
  <section class="post_id" id="post_id">
    <Intro title="Post"/>

    <Post :post="post" />
    <Comments :comments="comments" />
    <NewComment />

  </section>
</template>

<script>
import Post from '@/components/Blog/Post.vue'
import Comments from '@/components/Comments/Comments.vue'
import NewComment from '@/components/Comments/NewComment.vue'


export default {
  components: { Post,Comments, NewComment },
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
        { name: 'John', text: 'Lorem ipsum dolor sit amet, consectetur' },
      ]
    }
  }
}
</script>

<style lang="scss">
.post_id .heading {
  margin-top: 100px;
}


.post_id {
  max-width: 900px;
  margin: 0 auto;
}
.post_id .post-header {
  text-align: center;
  margin-bottom: 5px;
  img {
    margin-bottom: 5px;
    max-width: 400px
  }

  h1 {
    font-size:2.5rem;
  }
  p {
    color: #999999;
    font-size:1.7rem;
  }
}
.post-body {
  text-align: center;
  font-size: 1.1rem;
}

.title{
  margin: 30px 0;
  text-align: center;
}
.comment {
  padding: 20px;
  width: 600px;
  margin-bottom: 20px;
  background-color: #eee;
  .name {
    margin-bottom: 12px;
    font-size: 24px;
    color: #5c4de7;
  }
}
</style>

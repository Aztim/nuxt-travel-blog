<template>
  <section class="post_id" id="post_id">
    <Intro title="Post"/>
    <Post :post="post" />
    <Comments :comments="comments" />
    <NewComment :postId="$route.params.id" />
  </section>
</template>

<script>
import axios from 'axios'

import Post from '@/components/Blog/Post.vue'
import Comments from '@/components/Comments/Comments.vue'
import NewComment from '@/components/Comments/NewComment.vue'


export default {
  components: { Post,Comments, NewComment },
  async asyncData (context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments.json`)
    ])

    let commentsArray = [],
        commentsArrayRes = []
    // Comments
    if(comments.data !== null) {
      // console.log(comments.data)


          Object.keys(comments.data).forEach(key => {

      commentsArray.push(comments.data[key])
    })
    for (let i=0; i < commentsArray.length; i++) {
      if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
        commentsArrayRes.push(commentsArray[i])
      }
    }

      // let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish)
    }

    console.log(commentsArrayRes)


    return {
      post: post.data,
      comments: commentsArrayRes
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
// .comment {
//   padding: 20px;
//   width: 600px;
//   margin-bottom: 20px;
//   background-color: #eee;
//   .name {
//     margin-bottom: 12px;
//     font-size: 24px;
//     color: #5c4de7;
//   }
// }

</style>


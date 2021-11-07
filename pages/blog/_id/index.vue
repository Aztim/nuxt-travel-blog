<template>
  <section class="post_id" id="post_id">
    <Intro title="Post"/>
    <div class="container">
      <Post :post="post" />
      <Comments :comments="comments" />
      <NewComment :postId="$route.params.id" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

import Post from '@/components/Blog/Post.vue'
import Comments from '@/components/Comments/Comments.vue'
import NewComment from '@/components/Comments/NewComment.vue'


export default {
  components: { Post,Comments, NewComment },
  head () {
    let title = this.post.title,
    descr = this.post.descr,
    img = `${this.post.img}`,
    type = 'site'
    return {
      title: title,
      meta: [
        {hid: 'og:title', name: 'og:title', content: title},
        {hid: 'discription', name: 'discription', content: descr},
        {hid: 'og:discription', name: 'og:discription', content: descr},
        {hid: 'og:type', name: 'og:type', content: type},
        {hid: 'og:img', name: 'og:img', content: img}
      ]
    }
  },
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

<style lang="scss" scoped>
.post_id .heading {
  margin-top: 100px;
}

.container {
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
}
</style>


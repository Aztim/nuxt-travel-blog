<template>
  <newPostForm
    :postEdit="post"
    @submit="onSubmit"
  />
</template>

<script>
import axios from 'axios'

import NewPostForm from '~/components/Admin/NewPostForm.vue'
export default {
  components: { NewPostForm },
  layout: 'admin',
  asyncData (contex) {
    return axios.get(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSubmit (post) {
      console.log('Post Editing!')
      this.$store.dispatch('editPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

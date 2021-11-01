<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span> {{ comment.name }} </span></td>
        <td><span> {{ comment.text }} </span></td>
        <td>
          <span v-if="comment.publish" class="status_publish"> Publish </span>
          <span v-else class="status_hiden"> Hiden </span>
        </td>
        <td><span @click="changeComment(comment)" class="link"> Change Status </span></td>
        <td><span @click="deleteComment(comment.id)" class="link"> Delete </span></td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import axios from 'axios'
import commentTable from '@/components/Admin/CommentTable.vue'

export default {
  components: { commentTable },
  layout: 'admin',
  data () {
    return {
      comments: []
    }
  },
  mounted() {
    this.loadComments()
  },
  methods: {
     loadComments () {
      axios
        .get('https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments.json')
          .then((res)=>{
            let commentsArray = []
            Object.keys(res.data).forEach(key => {
              const comment = res.data[key]
              commentsArray.push({ ...comment, id: key })
            })
            this.comments = commentsArray
          })
    },
    changeComment (comment) {
        comment.publish = !comment.publish
        axios
          .put(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
      },
      deleteComment (id) {
        axios
          .delete(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments/${id}.json`)
            .then((res)=>{this.loadComments()})
      }
    }
}
</script>

<style scoped>
  .status_hiden {
    border-bottom: 1px solid #b53f3f;
    color: #b53f3f;
    font-weight: bold;
  }
  .status_publish {
    border-bottom: 1px solid #228B22;
    color: #228B22;
    font-weight: bold;
  }
</style>
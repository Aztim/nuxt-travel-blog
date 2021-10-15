<template>
  <div v-if="comments" class="chat-window">
      <h2 class="title"> New Comment: </h2>
    <!-- <div v-if="error">{{ error }}</div> -->
    <div  class="messages" ref="messages">
      <div v-for="doc in comments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.updatedDate }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="messages">{{ doc.text }}</span>
      </div>
    </div>
  </div>
    <!-- <div class="container">
      <h2 class="title"> Comments: </h2>


      <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messages">
          <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}</span>
            <span class="messages">{{ doc.message }}</span>
          </div>
        </div>
      </div> -->

      <!--  <p v-if="comments.length == 0"> Comments: 0 </p>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>-->
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
  .chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>

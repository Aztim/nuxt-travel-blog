<template>
  <div v-if="comments" class="chat-window">
    <h2 class="title"> Comments: </h2>
    <!-- <div v-if="error">{{ error }}</div> -->
    <div  class="messages">
      <div v-for="com in comments" :key="com.id" class="single">
        <span class="created-at">{{ com.createdAt | date }}</span>
        <span class="name"><i class="fas fa-user"></i> {{ com.name }}</span>
        <span class="messages">{{ com.text }}</span>
      </div>
    </div>
  </div>
    <!-- <p v-if="comments.length == 0"> Comments: 0 </p> -->
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

<style lang="scss">
  .chat-window {
  background: #fafafa;
  padding: 30px 20px;

  .title  {
    text-align: center;
  }

  .single {
    margin: 18px 0;

    .created-at {
      display: block;
      color: #999;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .name {
      font-size: 12px;
      font-weight: bold;
      margin-right: 6px;
    }

    .messages {
      max-height: 400px;
      overflow: auto;
    }
  }
}
</style>


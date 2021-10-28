<template>
  <div class="post-header">
    <img :src="post.filePath" :alt="post.title">
    <h1 class="title"> {{ post.title }} </h1>

    <div class="post-details">
      {{ post.updatedDate | date }}
    </div>
    <p>{{ post.content }}</p>
  </div>

  <!-- <div class="post-body">
    <p> {{ post.content }} </p>
  </div> -->
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .post-header {
    img {
       width: 100%;
      max-width: 100%;
    }

    h1 {
      font-size:2.5rem;
    }

    .post-details {
      font-size:2.1rem;
    }

    p {
      color: #999999;
      font-size:1.7rem;
    }
  }
</style>
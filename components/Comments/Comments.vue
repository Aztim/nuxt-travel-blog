<template>
  <div v-if="comments" class="comments">
    <div class="container">
      <h2 class="title"> Comments: </h2>
       <p v-if="comments.length == 0"> Comments: 0 </p>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </div>
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

</style>

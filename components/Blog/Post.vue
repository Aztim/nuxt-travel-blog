<template>
  <section >
      <div class="post-header">
        <img :src="post.img" :alt="post.title">
        <h1 class="title"> {{ post.title }} </h1>

        <div class="post-details">
          {{ post.updatedDate | date }}
        </div>
        <p>{{ post.content }}</p>
      </div>

      <div class="post-body">
        <p> {{ post.content }} </p>
      </div>
  </section>
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

<style >

</style>
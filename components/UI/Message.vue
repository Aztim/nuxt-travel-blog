<template>
  <div class="message" :class="mesClass">
    <p> {{ message }} </p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.message {
  font-size: 1.9rem;
  padding:.8rem 3rem;
  margin-top: 1rem;
  &.success {
    color: #008000;
  }
  &.error {
    color: #fc5c65;
  }
}
</style>


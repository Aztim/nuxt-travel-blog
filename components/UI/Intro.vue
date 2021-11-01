<template>
  <div class="heading">
    <h1 >
      <span v-for="(l, index) in title"
      :key="index"
      :class="l === ' ' ? 'space' : null"
      >{{l}}</span>
    </h1>
      <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requried: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>

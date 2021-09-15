<template>
  <!-- <section class="intro" id="intro"> -->
     <h1 class="heading">
        <span v-for="(l, index) in letters"
        :key="index"
        :class="l === ' ' ? 'space' : null"
        >{{l}}</span>
      <slot />
    </h1>
  <!-- </section> -->
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
    return {
      letters: []
    }
  },
  mounted () {
    // this.letters = this.title.replace(/\s/g, '').split("")
    this.letters = this.title.split("")
  }
}
</script>

<style lang="scss">
</style>

<template>
  <!-- <div> -->
    <!-- <label> <slot /> </label> -->
    <input
      v-bind="$attrs"
      :type="type"
      :required="required"
      :placeholder="holder"
      @input="$emit('input', $event.target.value)">
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    // value: {
    //   type: String,
    //   default: ''
    // },
    holder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  methods: {
      handleChange () {
        alert('!!!!')
      }
  }
}
</script>

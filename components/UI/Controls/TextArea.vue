<template>
  <div class="control">
    <!-- <label> <slot /> </label> -->
    <textarea
      :value="value"
      :cols="cols"
      :rows="rows"
      :placeholder="holder"
      @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    holder: {
      type: String,
      default: ''
    },
    cols: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: ''
    }
  }
}
</script>

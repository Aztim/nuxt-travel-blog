<template>
  <form  @keypress.enter.prevent="handleSubmit">
  <!-- <form  @submit.prevent="handleSubmit"> -->
    <AppInput
      v-model="comment.name"
      :holder="'Name:'"
      ></AppInput>

    <AppTextArea
      v-model="comment.text"
      :holder="'Type a message and hit enter to send...'"
    >
    </AppTextArea>
    <!-- <div class="error">{{ message}}</div> -->
    <!-- <AppButton type="submit">Submit</AppButton> -->
  </form>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },

  methods: {
    handleSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: true,
        createdAt: new Date(),
        ...this.comment
      })
        .then(()=>{
          this.message = "Submited!"
          // Reset
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e=>{console.log(e)})
    }
  }
}
</script>

<style lang="scss">
  form {
    margin: 10px;
  }

  textarea, input {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }

  input {
    background: #fafafa;;
  }
</style>

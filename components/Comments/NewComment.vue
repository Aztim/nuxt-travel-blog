<template>
  <div class="new-comment">
    <div class="container">
      <h2 class="title"> New Comment: </h2>

      <!-- message -->
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="comment.name"> Name: </AppInput>
        <!-- text -->
        <AppTextArea v-model="comment.text"> Text: </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
    onSubmit () {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
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
.new-comment form{
  flex:1 1 50rem;
  padding:2rem;
  width: 600px;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

// .new-comment form .inputBox{
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

.new-comment .container input,  .container textarea{
  width:100%;
  width:100%;
  margin:1rem 0;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  background:#eee;
  text-transform: none;
}
// .container input{
//   width:100%;
// }
.new-comment .container textarea{
  height: 15rem;
  resize: none;
  width:100%;
}

.new-comment .controls {
  text-align: center;
}
</style>


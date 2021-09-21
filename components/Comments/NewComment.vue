<template>
    <div>
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
      this.message = "Submited!"
      // Reset
      this.comment.name = ''
      this.comment.text = ''
    }
  }
}
</script>

<style lang="scss">
 form{
  flex:1 1 40rem;
  padding: 2rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

form .inputBox{
  padding:.5rem 0;
}

 form .inputBox input{
  width:100%;
  padding:1rem;
  border:.1rem solid rgba(0,0,0,.1);
  font-size: 1.7rem;
  color:#333;
  text-transform: none;
}

form .inputBox h3{
  font-size: 2rem;
  padding:1rem 0;
  color:#666;
}
</style>


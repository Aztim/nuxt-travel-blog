<template>
  <section class="contact" id="contact">
    <Intro title="Contact"/>

    <div class="row">
      <div class="image">
        <img src="~/assets/images/contact-img.svg" alt="">
      </div>

      <form action="" @submit.prevent="onSubmit">
        <!-- <Message v-if="message" :message="message" /> -->
        <div class="inputBox">
          <AppInput v-model="user.name" holder="name"></AppInput>
          <AppInput v-model="user.email" type="email" holder="email"> Email: </AppInput>
        </div>
        <div class="subjectBox">
          <AppInput v-model="user.subject" holder="subject"></AppInput>
        </div>

        <AppTextArea v-model="user.text"  holder="message" cols="30" rows="10"></AppTextArea>

        <Message v-if="message" :message="message" />
        <AppButton v-else type="submit">Submit</AppButton>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        subject: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.message = "Submited!"
      // Reset
      this.user.name = ''
      this.user.email = ''
      this.user.subject = ''
      this.user.text = ''
    }
  }
}
</script>

<style lang="scss">
.contact .row{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  align-items: center;

  .image{
    flex:1 1 35rem;

    img{
      width:100%;
    }
  }

  form{
    flex:1 1 50rem;
    padding:2rem;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
    border-radius: .5rem;

    .inputBox{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }


    .inputBox input, .subjectBox input, textarea{
      width:49%;
      margin:1rem 0;
      padding:1rem;
      font-size: 1.7rem;
      color:#333;
      background:#f7f7f7;
      text-transform: none;
    }

    .subjectBox input{
      width:100%;
    }

    textarea{
      height: 15rem;
      resize: none;
      width:100%;
    }
  }
}
</style>


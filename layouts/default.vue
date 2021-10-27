<template>
  <div>
    <Header @openAuthWindow ="authWindow=true" />

    <div v-if="authWindow" class="login-form-container ">

      <i class="fas fa-times" id="form-close" @click="authWindow=false"></i>

      <form @submit.prevent="onSubmit">
        <h3>login</h3>
        <AppInput v-model="user.email" type="email" class="box" holder="enter your email"></AppInput>
        <AppInput v-model="user.password" type="password" class="box" holder="enter your password"></AppInput>
        <AppButton value="login now" type="submit">Submit</AppButton>
        <AppInput type="checkbox" id="remember"></AppInput>

        <label for="remember">remember me</label>
        <p>forget password? <a href="#">click here</a></p>
        <!-- <p>don't have and account? <a href="#">register now</a></p> -->
      </form>
    </div>

    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Header, Footer },
  data () {
    return {
      authWindow: false,
      user: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authUser', this.user)
        .then((res) => {
          this.$router.push('/admin')

          // Reset
          // this.user.email = ''
          // this.user.password = ''
        })
        .catch((e)=>{
          console.log(e)
          // Reset
          // this.user.email = ''
          // this.user.password = ''
        })
    }
  }

}
</script>


<style lang="scss">

  .login-form-container{
    position: fixed;
    top:0; left: 0;
    z-index: 10000;
    min-height: 100vh;
    width:100%;
    background:rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;

      form {
        margin:2rem;
        padding:1.5rem 2rem;
        border-radius: .5rem;
        background:#fff;
        width:50rem;
      }
      h3{
        font-size: 3rem;
        color:#444;
        text-transform: uppercase;
        text-align: center;
        padding:1rem 0;
      }

      .box{
        width:100%;
        padding:1rem;
        font-size: 1.7rem;
        color:#333;
        margin:.6rem 0;
        border:.1rem solid rgba(0,0,0,.3);
        text-transform: none;
      }

      .box:focus{
        border-color: var(--orange);;
      }

      #remember{
        margin:2rem 0;
      }

      label{
        font-size: 1.5rem;
      }

      .btn{
        display: block;
        width:100%;
      }

      p{
        padding:.5rem 0;
        font-size: 1.5rem;
        color:#666;
      }

      a{
        color:var(--orange);
      }

      a:hover{
        color:#333;
        text-decoration: underline;
      }

      #form-close{
        position: absolute;
        top:2rem; right:3rem;
        font-size: 5rem;
        color:#fff;
        cursor: pointer;
      }
  }
</style>
<template>
  <div>
    <Header
      @openAuthWindow ="authWindow=true"
    />

    <div v-if="authWindow" class="login-form-container ">

      <i class="fas fa-times" id="form-close" @click="authWindow=false"></i>

      <form @submit.prevent="onSubmit">
        <h3>login</h3>
        <input type="email" class="box" placeholder="enter your email" v-model="user.email">
        <input type="password" class="box" placeholder="enter your password" v-model="user.password">
        <input type="submit" value="login now" class="btn">
        <input type="checkbox" id="remember">
        <label for="remember">remember me</label>
        <p>forget password? <a href="#">click here</a></p>
        <p>don't have and account? <a href="#">register now</a></p>
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
      }
    }
  },
  methods: {
    onSubmit () {
        console.log(this.use)
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
}

.login-form-container.active{
  top:0;
}

.login-form-container form{
  margin:2rem;
  padding:1.5rem 2rem;
  border-radius: .5rem;
  background:#fff;
  width:50rem;
}

.login-form-container form h3{
  font-size: 3rem;
  color:#444;
  text-transform: uppercase;
  text-align: center;
  padding:1rem 0;
}

.login-form-container form .box{
  width:100%;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  margin:.6rem 0;
  border:.1rem solid rgba(0,0,0,.3);
  text-transform: none;
}

.login-form-container form .box:focus{
  border-color: var(--orange);;
}

.login-form-container form #remember{
  margin:2rem 0;
}

.login-form-container form label{
  font-size: 1.5rem;
}

.login-form-container form .btn{
  display: block;
  width:100%;
}

.login-form-container form p{
  padding:.5rem 0;
  font-size: 1.5rem;
  color:#666;
}

.login-form-container form p a{
  color:var(--orange);
}

.login-form-container form p a:hover{
  color:#333;
  text-decoration: underline;
}

.login-form-container #form-close{
  position: absolute;
  top:2rem; right:3rem;
  font-size: 5rem;
  color:#fff;
  cursor: pointer;
}

</style>
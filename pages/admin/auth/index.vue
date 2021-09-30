<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email"> Login: </AppInput>
        <AppInput type="password" v-model="user.password"> Password: </AppInput>

        <div class="controls">
          <AppButton> Login! </AppButton>
        </div>

      </form>

      <!-- <form @submit.prevent="onSubmit">
        <h3>login</h3>
          <input type="email" class="box" placeholder="enter your email">
          <input type="password" class="box" placeholder="enter your password">
          <input type="submit" value="login now" class="btn">
          <input type="checkbox" id="remember">
          <label for="remember">remember me</label>
        <p>forget password?
          <a href="#">click here</a>
        </p>
        <p>don't have and account? <a href="#">register now</a></p>
      </form> -->
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // Reset
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>


<style lang="scss">
.auth {
  text-align: center;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  input {
    min-width: 460px;
    background-color: darkgrey;
  }
}
</style>

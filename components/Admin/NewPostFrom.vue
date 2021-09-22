<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title" holder="title">  </AppInput>
        <AppInput v-model="post.descr" holder="descr"></AppInput>
        <AppInput v-model="post.img" holder="img"></AppInput>
        <AppTextArea v-model="post.content" holder="content"></AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnDanger" @click="cancel"> Cancel </AppButton>
          <AppButton @click="onSubmit"> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      requreid: false
    }
  },
  data () {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.post)
    },
    cancel () {
      this.$router.push('/admin/')
    }
  }
}
</script>

<style scoped>

.controls {
  text-align: center;
  margin: 20px 0;
}
label, input, textarea {
  background-color: #eee;
}
label {
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
}
input {
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
}
textarea {
  padding: 30px 27px;
  border-radius: 14px;
}
input, textarea {
  width: 100%;
}
</style>

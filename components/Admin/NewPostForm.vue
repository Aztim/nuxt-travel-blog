<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
         <AppInput v-model="post.author" holder="author"></AppInput>
        <AppInput v-model="post.title" holder="title">  </AppInput>
        <!-- <AppInput  v-model="post.img" type="file" holder="img"></AppInput> -->
        <input type="file"  @change="handleChange">
        <AppTextArea v-model="post.content" holder="content"></AppTextArea>

        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="onCancel"> Cancel </div>
          <AppButton > Save </AppButton>
          <AppButton > {{file}} </AppButton>
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
        author: '',
        title: '',
        img: '',
        file: '',
        content: ''
      },
      file: null,
      types: ['image/png', 'image/jpeg', 'image/jpg']
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.post)
    },
    onCancel () {
      this.$router.push('/admin/')
    },
    handleChange (e) {
      const selected = e.target.files[0]

      if (selected && this.types.includes(selected.type)) {
          this.file = selected

          // fileError.value = null
      }
      // else {
      //     file.value = null
      //     fileError.value = 'Please, select an image file (png or jpeg)'
      // }
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

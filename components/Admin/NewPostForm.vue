<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
         <AppInput v-model="post.author" holder="author"></AppInput>
        <AppInput v-model="post.title" holder="title">  </AppInput>
        <!-- <AppInput  @change="handleChange" type="file" holder="post.filePath"></AppInput> -->
        <input type="file"  @change="handleChange" holder="post.filePath">
        <AppTextArea v-model="post.content" holder="content"></AppTextArea>

        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="onCancel"> Cancel </div>
          <AppButton > Save </AppButton>
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
        content: '',
      },

      types: ['image/png', 'image/jpeg', 'image/jpg']
    }
  },
  methods: {
     onSubmit () {
      if (this.file) {
         return this.$store.dispatch('uploadImage', this.file)
          .then(res => {
            this.post.filePath = res
            this.$emit('submit', this.post)
          })
      }
      else {
        this.post.filePath = "https://firebasestorage.googleapis.com/v0/b/travel-blog-ffe19.appspot.com/o/images%2Fno-image.png?alt=media&token=8d586fb7-71e4-4084-9091-853fb9bdf07e"
        this.$emit('submit', this.post)
      }
    },
    onCancel () {
      this.$router.push('/admin/')
    },

    handleChange (e) {
      const selected = e.target.files[0]

      if (selected && this.types.includes(selected.type)) {
        this.file = selected
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

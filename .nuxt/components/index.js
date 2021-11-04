export { default as Brands } from '../../components/Brands.vue'
export { default as Contacts } from '../../components/Contacts.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Promo } from '../../components/Promo.vue'
export { default as BlogPost } from '../../components/Blog/Post.vue'
export { default as BlogPostPreview } from '../../components/Blog/PostPreview.vue'
export { default as BlogPostsList } from '../../components/Blog/PostsList.vue'
export { default as AdminCommentTable } from '../../components/Admin/CommentTable.vue'
export { default as AdminNewPostForm } from '../../components/Admin/NewPostForm.vue'
export { default as Comments } from '../../components/Comments/Comments.vue'
export { default as CommentsNewComment } from '../../components/Comments/NewComment.vue'
export { default as GalleryPhoto } from '../../components/Gallery/Photo.vue'
export { default as GalleryPhotoList } from '../../components/Gallery/PhotoList.vue'
export { default as UIIntro } from '../../components/UI/Intro.vue'
export { default as UIMessage } from '../../components/UI/Message.vue'
export { default as UIControlsButton } from '../../components/UI/Controls/Button.vue'
export { default as UIControlsInput } from '../../components/UI/Controls/Input.vue'
export { default as UIControlsPagination } from '../../components/UI/Controls/Pagination.vue'
export { default as UIControlsTextArea } from '../../components/UI/Controls/TextArea.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

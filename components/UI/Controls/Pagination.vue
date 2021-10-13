<template>
  <div class="pagination flex-row">
    <a href="#"><i class="fas fa-chevron-left"></i></a>
    <ul>
      <li
        class="pages"
        v-for="page in pages"
        :key="page"
      >
          <nuxt-link :to="{path: url, query: {page: page}}">
        {{ page }}
        </nuxt-link>
      </li>
    </ul>
      <a href="#"><i class="fas fa-chevron-right"></i></a>
  </div>
</template>

<script>
import {range} from '~/mixin/utils'
export default {
 name: 'Pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    // getLink () {
    //   return this.admin ? `url${this.post.id}` : `/blog/${this.post.id}`

    // },
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  }
}
</script>

<style scoped>

</style>
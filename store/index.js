import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
  token: null
})

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
  },
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  addComment (state, comment) {
    state.commentsLoaded.push(comment)
  }
}

export const actions = {
  nuxtServerInit ({commit}, contex) {
    return axios.get('https://travel-blog-ffe19-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push( { ...res.data[key], id: key } )
        }
        // console.log(postsArray)
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  addPost ({commit}, post) {
    return axios.post('https://travel-blog-ffe19-default-rtdb.firebaseio.com/posts.json', post)

      .then(res => {
        console.log({...post, id: res.data.name })
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => console.log(e))
  },

  editPost ({commit, state}, post) {
    return axios.put(`https://travel-blog-ffe19-default-rtdb.firebaseio.com/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment ({commit},comment) {

    return axios.post('https://travel-blog-ffe19-default-rtdb.firebaseio.com/comments.json', comment)
    .then(res => {
      console.log(comment)
      commit('addComment',{ ...post, id: res.data.name })
    })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }
}
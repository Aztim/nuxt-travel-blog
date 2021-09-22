import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3569f527 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _426f8a69 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1b8a2cc4 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _ee1f3a28 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _daf4dbb8 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _32340af0 = () => interopDefault(import('../pages/admin/comments/index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _06ebee69 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _0cbae694 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _cfabf4ee = () => interopDefault(import('../pages/blog/_id/index.vue' /* webpackChunkName: "pages/blog/_id/index" */))
const _65261469 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3569f527,
    name: "about"
  }, {
    path: "/admin",
    component: _426f8a69,
    name: "admin"
  }, {
    path: "/blog",
    component: _1b8a2cc4,
    name: "blog"
  }, {
    path: "/gallery",
    component: _ee1f3a28,
    name: "gallery"
  }, {
    path: "/admin/auth",
    component: _daf4dbb8,
    name: "admin-auth"
  }, {
    path: "/admin/comments",
    component: _32340af0,
    name: "admin-comments"
  }, {
    path: "/admin/new-post",
    component: _06ebee69,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _0cbae694,
    name: "admin-postId"
  }, {
    path: "/blog/:id",
    component: _cfabf4ee,
    name: "blog-id"
  }, {
    path: "/",
    component: _65261469,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

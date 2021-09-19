import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3569f527 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _1b8a2cc4 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _ee1f3a28 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
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
    path: "/blog",
    component: _1b8a2cc4,
    name: "blog"
  }, {
    path: "/gallery",
    component: _ee1f3a28,
    name: "gallery"
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

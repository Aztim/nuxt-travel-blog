export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'nuxt-travel-blog',
    title: 'nuxt-travel-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'yandex-verification', content: 'KEY' },
      // { name: 'google-site-verification', content: 'KEY' },
      // { hid: 'description', name: 'description', content: 'Travel-blog' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'},
    ]
  },

// Animation
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    // { src: '~/assets/default.scss', lang: 'scss' },
    // { src: '~/assets/main.css', lang: 'css' }
  ],

  script:[
    {scrollToTop: true}
    // {src: "https://unpkg.com/swiper@7/swiper-bundle.min.js", crossorigin: "anonymous"}
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js',
    '~plugins/date-filter.js',
    '~plugins/swiper.js',
    {src: '~plugins/vue-paginate.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['@nuxtjs/google-analytics', { id: 'UA-KEY' }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: KEY,
    //   webvisor: false,
    //   clickmap: true,
    //   trackLinks: true
    // }],

  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios',
      'vuejs-paginate'
    ]
  },
  // Firebase key
  env: {
    fbAPIKey: process.env.MY_SECRET_KEY
  }
}

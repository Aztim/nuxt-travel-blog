export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-hotel-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // link: [
    //   {rel:"stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/default.scss',
    '@/assets/main.css'
    // { src: '~/assets/default.scss', lang: 'scss' },
    // { src: '~/assets/main.css', lang: 'css' }
  ],

  script:[
    {src: "https://kit.fontawesome.com/4d36f93e30.js", crossorigin: "anonymous"},
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

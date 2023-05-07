export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'auratech-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
        crocrossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,600&family=Poppins:wght@400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/phone-mask.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/router',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    routes: [
      {
        name: 'home',
        path: '/',
        component: '~/pages/index.vue',
      },
      {
        name: 'contacts',
        path: '/contacts',
        component: '~/pages/contacts.vue',
      },
      {
        name: 'application',
        path: '/application',
        component: '~/pages/application.vue',
      },
    ],
  },

  generate: {
    dir: 'docs'
  }
}

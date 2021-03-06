
// `DEPLOY_ENV` が `MASTER` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'MASTER' ? {
  router: {
    base: '/'
  }
} : {}

module.exports = {
  ...routerBase
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** add h.inomata
  
  env:{
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  */
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

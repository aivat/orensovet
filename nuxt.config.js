module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  
  css: [
    'assets/main.css'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}

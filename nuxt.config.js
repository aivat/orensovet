const axios = require('axios')

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
  },
  path: '/blog', component: 'blog/_index',
  cache: true,
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      { name: 'yandex-verification', content: 'd018a734873d45f8' },
      { name: 'google-site-verification', content: 'QaGfxx4EGsb75n5G-2TS3wr8_PF4A2SkcfsqjMn44lE' },
      { hid: 'og:locale', property: 'og:locale', content: 'ru_ru' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OrenSovet' },
      { name: 'application-name', content: 'OrenSovet' }
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
    '@nuxtjs/pwa',
    ['@nuxtjs/yandex-metrika',
      {
        id: '47481130',
        webvisor: true,
        clickmap:true
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }],
    '@nuxtjs/sitemap'  
  ],
  generate: {
    routes: function () {
      return axios.get('https://orensovet.ru/api/v1/articlesall?all=1')
      .then((response) => {
          return response.data.map((articles) => {
            return '/blog/article-' + articles.id + '-' + articles.title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
            function (all, ch, space, words, i) {
                if (space || words) {
                    return space ? '-' : '';
                }
                var code = ch.charCodeAt(0),
                    index = code == 1025 || code == 1105 ? 0 :
                        code > 1071 ? code - 1071 : code - 1039,
                    t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                        'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                        'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                        'shch', '', 'y', '', 'e', 'yu', 'ya'
                    ];
                return t[index];
            });
          })
      })
    }
  },
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://orensovet.ru',
    generate: true, // Enable me when using nuxt generate
    routes () {
      return axios.get('https://orensovet.ru/api/v1/articlesall?all=1')
      .then((response) => {
          return response.data.map((articles) => {
            return '/blog/article-' + articles.id + '-' + articles.title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
            function (all, ch, space, words, i) {
                if (space || words) {
                    return space ? '-' : '';
                }
                var code = ch.charCodeAt(0),
                    index = code == 1025 || code == 1105 ? 0 :
                        code > 1071 ? code - 1071 : code - 1039,
                    t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                        'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                        'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                        'shch', '', 'y', '', 'e', 'yu', 'ya'
                    ];
                return t[index];
            });
          })
      })
    }
  }
}

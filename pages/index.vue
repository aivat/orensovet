<template>
  <div class="content-wrap">
    <AppHeaderMenuMain/>
    <AppContentServices/>
    <AppContentPlus/>
    <AppContentReviews/>
    <AppContentJobs/>
    <AppLastArticle/>
  </div>
</template>

<script>
  import AppHeaderMenuMain from '~/components/AppHeaderMenuMain.vue'
  import AppContentServices from '~/components/AppContentServices.vue'
  import AppContentPlus from '~/components/AppContentPlus.vue'
  import AppContentJobs from '~/components/AppContentJobs.vue'
  import AppContentReviews from '~/components/AppContentReviews.vue'
  import AppLastArticle from '~/components/AppLastArticle.vue'

  export default {
    components: {
      AppHeaderMenuMain,
      AppContentServices,
      AppContentPlus,
      AppContentJobs,
      AppContentReviews,
      AppLastArticle
    },
    head () {
        return {
            title: 'ОренСовет - юридическая компания Оренбурга',
            meta: [
                { hid: 'description', name: 'description', content: 'ОренСовет - ведущая юридическая компания в Оренбурге, оказывающая услуги по представлению интересов в суде, составлению договоров, оформлению недвижимости и по другим юридическим вопросам.' },
                { hid: 'keywords', name: 'keywords', content: 'юрист оренбург бесплатный юрист онлайн консультация юриста юридические услуги оренбург вопрос юристу' },
                { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'ОренСовет - юридическая компания' },
                { hid: 'og:title', property: 'og:title', content: 'ОренСовет - юридическая компания' },
                { hid: 'og:description', property: 'og:description', content: 'ОренСовет - ведущая юридическая компания в Оренбурге, оказывающая услуги по представлению интересов в суде, составлению договоров, оформлению недвижимости и по другим юридическим вопросам.' },
                { hid: 'og:image', property: 'og:image', content: this.path('vash_sovetnik_orenburg') }
            ]
        }     
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      },
      path(name) {
          return require('~/assets/img/team/' + name + '.jpg')
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
 
<style>
.content-wrap {
  display: block;
}
</style>

<template>
  <div class="content-wrap">
    <AppHeaderMenuMain/>
    <AppContentServices/>
    <AppContentPlus/>
    <AppContentReviews/>
    <AppContentJobs/>
    <AppLastArticle :articles="articles"></AppLastArticle>
  </div>
</template>

<script>
import axios from 'axios'
  import AppHeaderMenuMain from '~/components/AppHeaderMenuMain.vue'
  import AppContentServices from '~/components/AppContentServices.vue'
  import AppContentPlus from '~/components/AppContentPlus.vue'
  import AppContentJobs from '~/components/AppContentJobs.vue'
  import AppContentReviews from '~/components/AppContentReviews.vue'
  import AppLastArticle from '~/components/AppLastArticle.vue'

  export default {
      asyncData ({ params, error }) {
        return axios.get(`https://orensovet.ru/api/v1/articlesindex?all`)
        .then((response) => {
            return { 
                articles: response.data
            }
        })
        .catch((e) => {
            error({ statusCode: 404, message: 'Страница не найдена' })
        })
    },
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
                { hid: 'keywords', name: 'keywords', content: 'юрист оренбург бесплатный юрист онлайн юридическая консультация юриста юридические услуги оренбург вопрос юристу' },
                { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'ОренСовет - юридическая компания' },
                { hid: 'og:title', property: 'og:title', content: 'ОренСовет - юридическая компания' },
                { hid: 'og:description', property: 'og:description', content: 'ОренСовет - ведущая юридическая компания в Оренбурге, оказывающая услуги по представлению интересов в суде, составлению договоров, оформлению недвижимости и по другим юридическим вопросам.' },
                { hid: 'og:image', property: 'og:image', content: this.path('vash_sovetnik_orenburg') }
            ]
        }     
    },
    methods: {
      path(name) {
          return require('~/assets/img/team/' + name + '.jpg')
      }
    }
  }
</script>
 
<style>
.content-wrap {
  display: block;
}
</style>

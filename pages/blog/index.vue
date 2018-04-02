<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-blog">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="blog-wrapper">
                    <ul>
                        <li v-for="article in articles" :key="article.id">
                            <nuxt-link v-bind:to="reversedLink(article.id, article.title)">
                                <header>
                                    <time> {{ article.date }}</time>
                                    <div class="wrap-author">
                                        <span class="logo-author">
                                            {{ reversedLogoName(article.author) }}
                                        </span>
                                        <span> {{ article.author }}</span>
                                    </div>
                                </header>
                                <section>
                                    {{ article.title }}
                                </section>
                                <article class="text">
                                    {{ article.annotation }}
                                </article>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="table-wrapper">
                </div>
          </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from '~/components/AppBreadcrumbs.vue'

export default {
    data () {
        return {
            breadcrumbs: [{
                id: 1,
                name: 'Главная',
                link: '/',
                seen: true
            }, {
                id: 2,
                name: 'Блог',
                link: '/blog',
                seen: false
            }],
            articles: [{
                id: 1,
                title: 'Семейные споры',
                date: '17 марта 2018 г.',
                author: 'Самат Баймешов',
                annotation: 'Семейное право регулирует определённый вид общественных отношений – семейные отношения, которые возникают из факта брака и принадлежности к семье. Большая часть этих отношений носит не имущественный характер, но часто они переплетаются с имущественными отношениями.'
            }, {
                id: 2,
                title: 'Оформление недвижимости',
                date: '07 авгувста 2018 г.',
                author: 'Владислав Черненко',
                annotation: 'Оформление недвижимости — это обязательная процедура. По закону объекты, которые не были зарегистрированы и не прошли надлежащее оформление недвижимости в регистрационных органах, не считаются принадлежащими своему фактическому владельцу. Вот и поговорим о том, как именно осуществляется эта процедура и что для нее требуется.'
            }, {
                id: 3,
                title: 'Взыскание долгов',
                date: '31 апреля 2018 г.',
                author: 'Сергей Рачилин',
                annotation: 'Обращение в юридическую компанию позволит на гарантированно законных основаниях организовать переговоры с должником и поможет решить проблему во внесудебном порядке.'
            }, {
                id: 4,
                title: 'Семейные споры',
                date: '17 марта 2018 г.',
                author: 'Самат Баймешов',
                annotation: 'Семейное право регулирует определённый вид общественных отношений – семейные отношения, которые возникают из факта брака и принадлежности к семье. Большая часть этих отношений носит не имущественный характер, но часто они переплетаются с имущественными отношениями.'
            }, {
                id: 5,
                title: 'Оформление недвижимости',
                date: '07 авгувста 2018 г.',
                author: 'Владислав Черненко',
                annotation: 'Оформление недвижимости — это обязательная процедура. По закону объекты, которые не были зарегистрированы и не прошли надлежащее оформление недвижимости в регистрационных органах, не считаются принадлежащими своему фактическому владельцу. Вот и поговорим о том, как именно осуществляется эта процедура и что для нее требуется.'
            }, {
                id: 6,
                title: 'Взыскание долгов',
                date: '31 апреля 2018 г.',
                author: 'Сергей Рачилин',
                annotation: 'Обращение в юридическую компанию позволит на гарантированно законных основаниях организовать переговоры с должником и поможет решить проблему во внесудебном порядке.'
            }]
        }
    },
    components: {
        AppBreadcrumbs
    },
    computed: {
    },
    methods: {
        reversedLogoName(author) {
            console.log(author)
            let newLogo = ''
            author.split(' ').map(function(name) {
                    newLogo = newLogo + name[0].toUpperCase()
            })
            return newLogo
        },
        reversedLink(id, title) {
            let text = id + '-' + title
            return 'blog/article-' + text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
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
        }
    }
}
</script>
 
<style scoped>
.container {
    width: 100%; 
}

.content {
  display: flex;
}

.content-blog {
  flex-direction: column;
  color: black;
  justify-content: center;
  height: 100%;
  background-color: rgb(241, 241, 241); 
  /* width: 900px; */
}

.content-title-h2 {
    color: black;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    background-color: rgb(247, 56, 56);
    background-color: rgb(0, 0, 0, 0.1);
    padding: 5px 15px;
}

.breadcrumbs-wrapper {
    padding: 10px 5px;
}

h2 {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
    line-height: 28px;
}

.text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.blog-wrapper {
    padding: 0 5px;
}

li {
    list-style-type: none;
    border-radius: 2px;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    padding: 20px 0;
    background-color: white;
}
ul {
    padding-left: 0; 
    margin: 0;
}
a {
    text-decoration: none;
    color: black;
}
header {
    display: flex;
    font-weight: 300;
    color: rgb(129, 129, 129);
    font-size: 12px;
    /* align-items: flex-start; */
    /* justify-content: space-between; */
}
section {
    font-size: 20px;
    margin-top: 6px;
    margin-bottom: 10px;
}

article {

}

header, section, article {
    padding: 0px 10px;
}
.wrap-author {
    display: flex;
}
.logo-author {
    display: inline-block;
    text-align: center;
    height: 14px;
    width: 16px;
    background-color: #FF4100;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: white;
    font-size: 9px;
    margin: 0 5px;
    padding-top: 2px;
    /* line-height: 8px; */
}
@media all and (min-width: 500px) {
    .content-blog {
        background-color: white;
    }

    li {
        margin-bottom: 20px;
    }
}
@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 900px; 
    }

    .content-title-h2 {
        width: 500px;
        /* background-color:  rgb(247, 56, 56); */
    }
}
</style>

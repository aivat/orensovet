<template>
<div class="content-wrap">
<AppHeaderMenu/>
  <div class="article-content article-content-background">
      <div class="article-container">
          <div class="article-content article-content-article">
                <div class="article-breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>    
                <div class="article-blog-wrapper">
                    <article class="article-article">
                        <header class="article-header-article">
                            <time> {{ article.date }}</time>
                            <div class="article-wrap-author">
                                <span class="article-logo-author"> {{ logo }} </span>
                                <span> {{ article.author }}</span>
                            </div>
                        </header>
                        <h1 class="article-h1"> {{ article.title }} </h1>
                        <div class="article-annotation"> {{ article.annotation }} </div>
                        <div class="article-text" v-html="article.content"></div>
                    </article>
                </div>
                <!-- <div class="list-loader article-blog-wrapper" v-if="loading">
                    <article class="article-article">
                        <header class="article-header-article article-loader-header">
                        </header>
                        <section class="article-loader-h1">
                        </section>
                        <div class="article-text article-loader-text" >
                        </div>
                    </article>
                </div> -->
          </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeaderMenu from '~/components/AppHeaderMenu.vue'
import AppBreadcrumbs from '~/components/AppBreadcrumbs.vue'
import axios from 'axios'

export default {
    data () {
        return {
            idArticle: '',
            loading: true,
            test: ''
        }
    },
    asyncData ({ params, error }) {
        let qwe = params.id.split('-')[1]
        return axios.get(`https://orensovet.ru/api/v1/articles/${qwe}`)
        .then((response) => {
            return { 
                article: response.data,
                breadcrumbs: [{
                    id: 1,
                    name: 'Главная',
                    link: '/',
                    seen: true
                }, {
                    id: 2,
                    name: 'Блог',
                    link: '/blog',
                    seen: true
                }, {
                    id: 3,
                    name: '',
                    link: '',
                    seen: false
                }]
            }
        })
        .catch((e) => {
            error({ statusCode: 404, message: 'Страница не найдена' })
        })
    },
    components: {
        AppBreadcrumbs,
        AppHeaderMenu
    },
    computed: {
        logo() {
            let newLogo = ''
            this.article.author.split(' ').map(function(name) {
                newLogo = newLogo + name[0].toUpperCase()
            })
            return newLogo
        }
    },
    created: function () {
        this.breadcrumbs[2].name = this.article.title
        this.breadcrumbs[2].link = { name: 'blog-id', params: { id: this.reversedLink(this.article.id, this.article.title) } }
    },
    head () {
        return {
            title: this.article.title,
            meta: [
                { hid: 'description', name: 'description', content: this.article.annotation },
                { hid: 'keywords', name: 'keywords', content: 'юридическая практика в оренбурге ' + this.article.keywords },
                { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.article.title },
                { hid: 'og:title', property: 'og:title', content: this.article.title },
                { hid: 'og:description', property: 'og:description', content: this.article.annotation } 
            ]
        }     
    },
    methods: {
        reversedLink(id, title) {
            let text = 'article-' + id + '-' + title
            return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
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
 
<style>
.content-wrap {
  display: block;
}
.article-loader-header, .article-loader-h1, .article-loader-text {
    background-color: rgba(14, 127, 202, 0.315);
    border-radius: 4px;
    margin: 5px 10px;
}

.article-loader-header {
    height: 20px;
}

.article-loader-h1 {
   height: 60px; 
}

.article-loader-text {
    height: 700px;
}
.article-container {
    width: 100%; 
}
.article-content {
  display: flex;
}
.article-content-article {
  flex-direction: column;
  color: black;
  justify-content: center;
  height: 100%;
  background-color: rgb(241, 241, 241); 
}
.article-breadcrumbs-wrapper {
    padding: 10px 5px;
}
.article-h1 {
    font-size: 24px;
    margin: 20px 0;
    font-weight: 600;
    line-height: 28px;
}
.article-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
.article-blog-wrapper {
    padding: 0 5px;
    margin-bottom: 50px;
}
.article-header-article {
    display: flex;
    font-weight: 300;
    color: rgb(110, 110, 110);
    font-size: 12px;
}
.article-article {
    background-color:white;
    border-radius: 2px; 
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    padding: 20px 0;
}
.article-header-article, .article-annotation, .article-text, .article-h1 {
    padding: 0px 10px;
}
.article-annotation {
    font-size: 16px;
    font-weight: 500;
}
.article-wrap-author {
    display: flex;
}
.article-logo-author {
    display: inline-block;
    text-align: center;
    height: 14px;
    width: 16px;
    background-color: #DD2C00;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: white;
    font-size: 9px;
    margin: 0 5px;
    padding-top: 2px;
}
blockquote {
    border-left: 4px solid rgb(247, 56, 56);
    font-size: 24px;
    line-height: 32px;
    margin: 10px;
    padding-left: 20px;
}

@media all and (min-width: 500px) {
    .article-h1 {
        font-size: 34px;
        line-height: 40px;
    }
}

@media (min-width: 1200px) {
    .article-content {
        justify-content: center;
    }
    .article-container {
        width: 900px; 
    }
    .article-content-article {
        background-color: white;
    }
    .article-content-title-h2 {
        width: 500px;
    }
    .article-article {
        background-color:white; 
        box-shadow: none;
        padding: 12px 0;
    }
    .article-header-article, .article-annotation, .article-text, .article-h1 {
        padding: 0px;
    }
    .article-breadcrumbs-wrapper {
        padding: 10px 5px;
    }
}
</style>

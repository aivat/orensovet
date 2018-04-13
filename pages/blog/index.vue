<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-blog">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="blog-wrapper" >
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
                <div class="list-loader blog-wrapper" v-if="loading">
                    <ul>
                        <li v-for="article in articlesLoading" :key="article.id">
                            <div>
                                <header class="list-loader-header-header list-loader-header">
                                    <div class="wrap-author">
                                        <span> </span>
                                    </div>
                                </header>
                                <section class="list-loader-header-section list-loader-header">
                                </section>
                                <article class="list-loader-header-article list-loader-header" >
                                    
                                </article>
                            </div>
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
import axios from 'axios'

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
            articles:[],
            loading: true,
			error: false,
            lastArticle: 0,
            scrolled: false,
            articlesLoading: [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }, {
                id: 4
            }]
        }
    },
    components: {
        AppBreadcrumbs
    },
    head: {
      title: 'Блог'
    },
    computed: {
        resourseUrl() {
			return 'http://lba.ru/api/v1/articles?lastArticle='+this.lastArticle
		}
    },
    created() {
        if (process.browser) {    
			 window.addEventListener('scroll', this.handleScroll)
        }
        this.fetchData()
        // this.setGetTimeOut() 
    },
    methods: {
        setGetTimeOut() {
            setTimeout(()=>{this.fetchData()}, 100);
        },
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
                }) + '#start';
        },
        fetchData () {
            this.loading = true
            axios.get(this.resourseUrl)
                .then(response =>{
                        this.articles = this.articles.concat(response.data)
                        this.loading = false
                        this.lastArticle = this.articles[this.articles.length - 1].id - 15
                })
                .catch(e => {
                        console.log(e.message)
                        this.error = true
                        this.loading = false
                });
		},
		handleScroll (event) {
            // почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
            let scrollTop = window.pageYOffset,
                listOffsetHeight = document.body.offsetHeight,
                listScrollHeight = document.body.scrollHeight

            let diffHeight = listScrollHeight - listOffsetHeight

            if (diffHeight <= (scrollTop+40) && !this.loading && !this.error) {
                this.fetchData ();
            }
		}
    }
}
</script>
 
<style scoped>
.list-loader {
    color: black;
}
.list-loader-header {
    background-color: rgba(14, 127, 202, 0.315);
    border-radius: 4px;
    margin: 5px 10px;
}

.list-loader-header-article {
    height: 140px;
}

.list-loader-header-section {
    height: 40px;
}

.list-loader-header-header {
    height: 20px;
}
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

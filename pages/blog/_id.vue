<template>
  <div class="article-content article-content-background">
      <div class="article-container">
          <div class="article-content article-content-article">
                <div class="article-breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="article-blog-wrapper">
                    <article class="article-article">
                    <header class="article-header-article">
                        <time> {{ articleTest.date }}</time>
                        <div class="article-wrap-author">
                            <span class="article-logo-author">
                                {{ reversedLogoName(articleTest.author) }}
                            </span>
                            <span> {{ articleTest.author }}</span>
                        </div>
                    </header>
                    <h2 class="article-h2">{{ articleTest.title }}</h2>
                    <div class="article-annotation">{{ articleTest.annotation }}</div>
                    <div class="article-text" v-html="articleTest.text"></div>
                    </article>
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
            idArticle: '',
            loading: false,
			error: false,
            articleTest: '',
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
            }],
            articles: [{
                id: 1,
                title: 'Семейные споры',
                date: '17 марта 2018 г.',
                author: 'Самат Баймешов',
                annotation: 'Семейное право регулирует определённый вид общественных отношений – семейные отношения, которые возникают из факта брака и принадлежности к семье. Большая часть этих отношений носит не имущественный характер, но часто они переплетаются с имущественными отношениями.',
                text: '<p> Семейные споры зачастую сопровождаются бурными сценами, которые мешают решать даже простейшие вопросы, поэтому они требуют участия опытного семейного юриста с момента их возникновения. Только с его помощью можно без потери времени оформить : <ul> <li> расторжение брака, в том числе признание его недействительным; </li> <li> раздел имущества между супругами; </li> <li> взыскание алиментов, в том числе установить фиксированный размер оплаты; </li> <li> установить или оспорить отцовство, лишить родительских прав; </li> <li> определить порядок общения с ребенком после развода и т.п.</li> </ul> </p> <p> Но этим перечнем семейные дела не ограничиваются, ведь здесь могут быть затронуты и взаимоотношения детей и родителей, бабушек и дедушек с внуками, сестер, братьев и т.д. <blockquote>Юридическая и судебная практика подобных дел многочисленна и разнообразна, поэтому привлечение к ним юристов помогает серьезно уменьшить время на разбирательства.</blockquote> </p> <p> Особенность семейных споров заключается даже не в том, что большую их часть можно разрешить только в судебном порядке, несмотря на личный характер многих из них, но и то, что многие после принятия судом решения требуют обращения в службу судебных приставов. Юристы по семейному праву компании «Ваш Советник» в г. Оренбурге могут сопровождать такие дела не только на этапе обращения в суд, но и вплоть до окончания процесса взыскания задолженностей, раздела имущества и т.д.</p> <p> Чтобы семейные споры, раздел имущества, порядок общения с детьми не стали причиной для бесконечных конфликтов, наилучшим вариантом является наем специалистов юридической компании «Ваш Советник». </p> <p> Разрешение семейных споров с помощью юриста становится простым, даже бытовым делом, т.к. любые требования обоих супругов или иных родственников сразу подводятся под правовую базу, получают оценку и рекомендации по дальнейшему развитию. Такая форма общения может стать залогом сохранения семьи, пусть даже и с наличием в жизни постоянного контроля со стороны юриста.</p> <p> Юрист по семейным спорам пригодится даже в таких случаях, когда супруги не готовы к разводу, но имеют различное мнение на управление совместным имуществом, заключают брачный контракт или соглашение и многих других случаях. Многие юристы имеют не только юридический опыт, но еще и навыки психологической помощи, что позволит ряд конфликтов свести к нулю путем переговоров, советов и предложением альтернативных вариантов, например, по воспитанию ребенка. </p> <p> Постоянные конфликты могут рано или поздно привести к психологическому срыву не только у взрослых, но и у детей, которые более чувствительны и тяжело переживают эти моменты. Главное преимущество специалиста в том, что отсутствие конфликтов и скандалов приведет к более комфортной атмосфере для детей, которые сильно страдают, когда им приходится наблюдать, как ругаются их родители. </p> <p>Юристы компании «Ваш Советник» по семейным вопросам в Оренбурге помогают решать споры, которые вытекают с: брачных отношений; раздела имущества при расторжении брака; определения размера алиментов; продажи общего имущества и многое другое.'
            }, {
                id: 2,
                title: 'Оформление недвижимости',
                date: '07 авгувста 2018 г.',
                author: 'Владислав Черненко',
                annotation: 'Оформление недвижимости — это обязательная процедура. По закону объекты, которые не были зарегистрированы и не прошли надлежащее оформление недвижимости в регистрационных органах, не считаются принадлежащими своему фактическому владельцу. Вот и поговорим о том, как именно осуществляется эта процедура и что для нее требуется.',
                text: 'qweasdzc'
            }, {
                id: 3,
                title: 'Взыскание долгов',
                date: '31 апреля 2018 г.',
                author: 'Сергей Рачилин',
                annotation: 'Обращение в юридическую компанию позволит на гарантированно законных основаниях организовать переговоры с должником и поможет решить проблему во внесудебном порядке.',
                text: 'qweasdvfvfvfv'
            }, {
                id: 4,
                title: 'Семейные споры',
                date: '17 марта 2018 г.',
                author: 'Самат Баймешов',
                annotation: 'Семейное право регулирует определённый вид общественных отношений – семейные отношения, которые возникают из факта брака и принадлежности к семье. Большая часть этих отношений носит не имущественный характер, но часто они переплетаются с имущественными отношениями.',
                text: 'qweasd1145454'
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
        resourseUrl() {
			return 'https://orensovet.ru/api/blog/'+this.idArticle
		}
    },
    created(){
        this.fetchData()
        this.updateBreadcrumbs()
        // this.idArticle = this.parseLink(this.$route.params.id)
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
        },
        parseLink(link) {
            return link.split('-')[1]
        },
        fetchData () {
            this.loading = true
            this.idArticle = this.parseLink(this.$route.params.id)
            console.log(this.resourseUrl)
            this.articleTest = this.articles[this.idArticle-1]
            // axios.get(this.resourseUrl)
            //     .then(response =>{
            //         //this.books = response.data
            //         console.log(response)
            //         this.books = this.books.concat(response.data)
            //         //this.resourseUrl = ''
            //         this.loading = false
            //         this.count = this.count + 10
            //         this.first = this.first + 1
            //     })
            //     .catch(e => {
            //         console.log(e.message)
            //         this.error = true
            //         this.loading = false
            //     });
        },
        updateBreadcrumbs() {
            this.breadcrumbs[2].name = this.articleTest.title
            this.breadcrumbs[2].link = this.$route.params.id
        }
    }
}
</script>
 
<style>
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
  /* width: 900px; */
}


.article-breadcrumbs-wrapper {
    padding: 10px 5px;
}

h2 {
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
    color: rgb(129, 129, 129);
    font-size: 12px;
    /* align-items: flex-start; */
    /* justify-content: space-between; */
}
.article-article {
    background-color:white;
    border-radius: 2px; 
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    padding: 20px 0;
}

.article-header-article, .article-annotation, .article-text, .article-h2 {
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

blockquote {
    border-left: 4px solid rgb(247, 56, 56);
    font-size: 24px;
    line-height: 32px;
    margin: 10px;
    padding-left: 20px;
}
@media all and (min-width: 500px) {
    h2 {
        font-size: 34px;
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
        /* background-color:  rgb(247, 56, 56); */
    }

    .article-article {
        background-color:white; 
        box-shadow: none;
        /* padding: 0; */
    }

    .article-header-article, .article-annotation, .article-text, .article-h2 {
        padding: 0px;
    }
}
</style>

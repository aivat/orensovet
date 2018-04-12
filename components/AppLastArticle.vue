<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-reviews">
            <div class="content-title">
              <p class="content-title-h2">Новое в блоге</p>
              <!-- <p class="content-title-h2">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</p> -->
            </div>
            <div class="content-main">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                    <!-- <div class="swiper-slide" v-for="banner in banners" :key="banner.id"> -->
                        <div class="swiper-slide" v-for="article in articles" :key="article.id">
                          <div class="ban">
                            <nuxt-link class="swiper-link" v-bind:to="reversedLink(article.id, article.title)">
                                <header>
                                    <time> {{ article.date }}</time>
                                    <div class="wrap-author">
                                        <span class="logo-author">
                                            <!-- {{ article.author }} -->
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
                          </div>
                        </div>
                    <!-- </div> -->
                  </div>
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
    data() {
      return {
        articles:{
          // 0: {
          //   id: "1",
          //   title: "Списали долг по микрозайму"
          // },	  	  
          // 1: {
          //   id: "2",
          //   title: "В Оренбургском суде юристы"
          // },
          // 2: {
          //   id: "3",
          //   title: "Оформление недвижимости"
          // }
        },
        art: {},
        loading: true,
        error: false,
        resourseUrl: 'http://lba.ru/api/v1/articlesall?all=1',
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted() {
      this.fetchDataLast()
    },
    methods: {
      fetchDataLast () {
        this.loading = true
        axios.get(this.resourseUrl)
            .then(response =>{
                    console.log(response)
                    this.loading = false
                    this.articles = response.data
                    this.articles.map((name) => {
                      this.art = this.art.concat(name)
                    })
                    console.log(this.articles)
                    console.log(this.art)
            })
            .catch(e => {
                    console.log(e.message)
                    this.error = true
                    this.loading = false
            });
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
    }
  }
</script>
 
<style scoped>

/* .my-swiper {
    height: 300px;
    width: 100%;
} */
.swiper-link {
    display: block;
    border-radius: 2px;
    margin-bottom: 10px;
    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14); */
    padding: 0px 20px 30px 30px; 
    margin: 5px;
    /* background-color: white; */
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
.container {
    width: 100%; 
}

.content {
  display: flex;
}

.content-reviews {
  flex-direction: column;
  /* margin: 20px 0 50px 0; */
}
.content-main {
  margin-bottom: 20px;
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color: #222222;
    font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 400;
}

.slide-wrap {
  padding: 0 40px 30px 50px;
  font-size: 14px;
  line-height: 22px;
}
.slide-wrap-bottom {
  display: flex;
  justify-content: flex-end;
}

.slide-wrap-bottom-wrap {
  margin-top: 10px;
  /* padding: 0 10px; */
}

.slide-wrap-bottom-wrap-name>a {
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px dashed black;
    color: black;
    padding: 0 4px 0 0;
    font-weight: 500;
    font-size: 17px;
}

.slide-wrap-bottom-wrap-name>a:hover {
  color: #f00000;
}
.slide-wrap-bottom-wrap-info {
  color: rgb(129, 129, 129);
  font-size: 12px;
}
@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }
    .content-reviews {
      padding: 20px 0;
    }
    .content-title-h2 {
      margin: 20px 0;
    }
    .swiper-link {
      width: 650px;
      padding-top: 20px;
      /* padding: 40px 40px 20px 50px; */
      /* font-size: 20px;
      font-weight: 300;
      line-height: 30px; */
      /* color: #032c55; */
      /* align-items: center; */
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    }
    .ban {
      display: flex;
      justify-content: center;
    }

    section {
      font-size: 32px;
      font-weight: 600;
    }
    .text {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
    }
}
</style>

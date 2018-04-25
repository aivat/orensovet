<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-blog">
            <div class="content-title">
              <p class="content-title-h2">НОВОЕ В БЛОГЕ</p>
            </div>
            <div class="blog-wrapper">
                <ul class="blog-wrapper-list">
                    <li v-for="article in articles" :key="article.id">
                        <nuxt-link v-bind:to="{ name: 'blog-id', params: { id: reversedLink(article.id, article.title) } }">
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
          </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
   props: {
        articles: {
            type: Array
        }
    },
    data() {
      return {
        // articles: [],
        // loading: true,
        // error: false,
        // resourseUrl: 'http://lba.ru/api/v1/articlesindex?all'
      }
    },
    created() {
        // this.fetchDataLast()
    },
    methods: {
      reversedLogoName(author) {
          let newLogo = ''
          author.split(' ').map(function(name) {
                  newLogo = newLogo + name[0].toUpperCase()
          })
          return newLogo
      },
      fetchDataLast () {
        this.loading = true
        axios.get(this.resourseUrl)
            .then(response =>{
                    this.loading = false
                    this.articles = response.data
            })
            .catch(e => {
                    console.log(e.message)
                    this.error = true
                    this.loading = false
            });
		  },
      reversedLink(id, title) {
            let text = id + '-' + title
            return 'article-' + text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
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
  /* background-color: rgb(241, 241, 241);  */
  /* width: 900px; */
}
.content-title {
   display: flex;
   justify-content: center
}
.content-title-h2 {
    color: #222222;
    color:black;
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 300;
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
    margin-bottom: 30px;
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
    color: rgb(110, 110, 110);
    font-size: 12px;
    /* align-items: flex-start; */
    /* justify-content: space-between; */
}
section {
    font-size: 20px;
    margin-top: 6px;
    margin-bottom: 10px;
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
    background-color: #DD2C00;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: white;
    font-size: 9px;
    margin: 0 5px;
    padding-top: 2px;
}
@media all and (min-width: 500px) {
    .content-blog {
        background-color: white;
    }

    li {
        margin-bottom: 20px;
    }
.blog-wrapper {
    margin-bottom: 50px;
}

    .blog-wrapper-list {
      display: flex;
      justify-content: space-between;
    }
    .blog-wrapper-list>li:first-child {
      margin-right: 40px;
    }
  .blog-wrapper-list>li {
    flex-grow: 1;
    flex-basis: 0;
  }
  .content-title-h2 {
    font-size: 30px;
    margin-top: 45px;
    margin-bottom: 30px;
    font-weight: 300;
  }
    
}
@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }

    .content-title-h2 {
        width: 500px;
    }
}
</style>

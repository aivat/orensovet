<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-content">
            <div class="content-title">
              <p class="content-title-h2">ЮРИДИЧЕСКИЕ УСЛУГИ</p>
            </div>
            <div class="content-main">
              <ul class="services">
                <li v-for="article in articles" :key="article.id">
                    <nuxt-link :to="article.link" class="services-href">
                      {{ article.title }}
                    </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isActive: true,
        articles: [
          {
            id: 1,
            title: 'СЕМЕЙНЫЕ СПОРЫ',
            link: 'blog/article-1-semeynye-spory'
          },
          {
            id: 2,
            title: 'ВЗЫСКАНИЕ ДОЛГОВ',
            link: 'blog/article-2-vzyskanie-dolgov'
          },
          {
            id: 3,
            title: 'КАДАСТРОВЫЕ СПОРЫ',
            link: 'blog/article-3-kadastrovye-spory'
          },
          {
            id: 4,
            title: 'СПОРЫ С БАНКАМИ',
            link: 'blog/article-4-spory-s-bankami'
          },
          {
            id: 5,
            title: 'СТРАХОВЫЕ СПОРЫ',
            link: 'blog/article-5-strahovye-spory'
          },
          {
            id: 6,
            title: 'ЖИЛИЩНЫЕ СПОРЫ',
            link: 'blog/article-6-zhilishchnye-spory'
          },
          {
            id: 7,
            title: 'CПОРЫ С ЗАСТРОЙЩИКАМИ',
            link: 'blog/article-7-spory-s-zastroyshchikami'
          },
          {
            id: 8,
            title: 'ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ',
            link: 'blog/article-8-zashchita-prav-potrebiteley'
          },
          {
            id: 9,
            title: 'ОФОРМЛЕНИЕ НЕДВИЖИМОСТИ',
            link: 'blog/article-9-oformlenie-nedvizhimosti'
          }
        ]
    }
  },
  methods: {
      even: function () {
        if (process.browser) {
              let width = window.innerWidth
              if (width < 1000) {
                this.articles.splice(6, 3)
          }
        }
      }
  },
  mounted: function () {
    this.even()
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

.content-content {
  flex-direction: column;
  margin-bottom: 30px;
}

.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color:black;
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 300;
}

.services {
    list-style-type: none;
	  text-decoration: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
   justify-content: center;
}

.services-href {
	display: inline-block;
	padding: 20px 30px;
	text-decoration: none;
	color: inherit;
	font-size: 16px;	
	font-weight: 500;
  width: 200px;
}
.services li {
    border: 1px solid #0070ba;
    margin-right: 10px;
    margin-top: 10px;
    background-color: white;
    cursor: pointer;
    border-radius: 40px;
	text-align: center;
	color: #0070ba;
}

.services li:hover {
    color: white;
	background-color: rgb(0, 112, 186);
	border: 1px solid rgb(0, 112, 186);
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    transition-duration: 0.2s;
    transition-timing-function: initial;
    transition-delay: initial;
    transition-property: box-shadow, background-color, border;
    
}

@media (min-width: 500px) {
    .content-title-h2 {
    font-size: 30px;
    margin-top: 45px;
    margin-bottom: 25px;
    font-weight: 300;
  }
      .content-content {
      margin-bottom: 75px;
    }
}


@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }
    .services-href {
      width: 310px;
    }
    .content-title-h2 {
      font-size: 30px;
    }

}
</style>

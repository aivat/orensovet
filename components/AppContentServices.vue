<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-content">
            <div class="content-title">
              <!-- <p class="content-title-h2">ЮРИДИЧЕСКИЕ УСЛУГИ</p> -->
              <p class="content-title-h2 h2-edit">Юридические услуги</p>
            </div>
            <div class="content-main">
                <ul class="services">
                  <li>
                    <a href="/services/semejnye-spory.html" class="services-href">
                      СЕМЕЙНЫЕ СПОРЫ
                    </a>
                  </li>
                  <li>
                    <a href="/services/vzyskanie-dolgov.html" class="services-href">
                    ВЗЫСКАНИЕ ДОЛГОВ
                    </a>
                  </li>
                  <li>
                    <a href="/services/kadastrovye-spory.html" class="services-href">
                    КАДАСТРОВЫЕ СПОРЫ
                    </a>
                  </li>
                  <li>
                    <a href="/services/spory-s-bankami.html" class="services-href">
                    СПОРЫ С БАНКАМИ
                    </a>
                  </li>
                  <li>
                    <a href="/services/strahovye-spory.html" class="services-href">
                    СТРАХОВЫЕ СПОРЫ
                    </a>
                  </li>
                  <li>
                    <a href="/services/zhilishchnye-spory.html" class="services-href">
                    ЖИЛИЩНЫЕ СПОРЫ
                    </a>
                  </li>
                  <li v-bind:class="{ 'services-href-visible': isActive }">
                    <a href="/services/spory-s-zastrojshchikami.html" class="services-href">
                    CПОРЫ С ЗАСТРОЙЩИКАМИ
                    </a>
                  </li>
                  <li v-bind:class="{ 'services-href-visible': isActive }">
                    <a href="/services/zashchita-prav-potrebitelej.html" class="services-href">
                    ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ
                    </a>
                  </li>
                  <li v-bind:class="{ 'services-href-visible': isActive }">
                    <a href="/services/oformlenie-nedvizhimosti.html" class="services-href">
                      ОФОРМЛЕНИЕ НЕДВИЖИМОСТИ
                    </a>
                  </li>
              </ul>
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
            link: 'blog/article-1-semeynye-spory#start'
          },
          {
            id: 2,
            title: 'ВЗЫСКАНИЕ ДОЛГОВ',
            link: 'blog/article-2-vzyskanie-dolgov#start'
          },
          {
            id: 3,
            title: 'КАДАСТРОВЫЕ СПОРЫ',
            link: 'blog/article-3-kadastrovye-spory#start'
          },
          {
            id: 4,
            title: 'СПОРЫ С БАНКАМИ',
            link: 'blog/article-4-spory-s-bankami#start'
          },
          {
            id: 5,
            title: 'СТРАХОВЫЕ СПОРЫ',
            link: 'blog/article-5-strahovye-spory#start'
          },
          {
            id: 6,
            title: 'ЖИЛИЩНЫЕ СПОРЫ',
            link: 'blog/article-6-zhilishchnye-spory#start'
          },
          {
            id: 7,
            title: 'CПОРЫ С ЗАСТРОЙЩИКАМИ',
            link: 'blog/article-7-spory-s-zastroyshchikami#start'
          },
          {
            id: 8,
            title: 'ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ',
            link: 'blog/article-8-zashchita-prav-potrebiteley#start'
          },
          {
            id: 9,
            title: 'ОФОРМЛЕНИЕ НЕДВИЖИМОСТИ',
            link: 'blog/article-9-oformlenie-nedvizhimosti#start'
          }
        ]
    }
  },
  mounted: function () {
     if (process.browser) {
          let width = window.innerWidth
          if (width > 1000) {
            this.isActive = false;
          }
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

.content-content {
  flex-direction: column;
  margin: 20px 0 50px 0;
}
.content-main {
  /* margin-bottom: 40px; */
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color: #222222;
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
}
.h2-edit {
  font-weight: 400;
}
.services-href-visible {
  display: none;
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
/*	width: 310px;*/
}
.services li {
    border: 1px solid #0070ba;
/*    padding: 20px 30px;*/
    margin-right: 10px;
    margin-top: 10px;
    background-color: white;
/*    flex-basis: 310px; */
    cursor: pointer;
    border-radius: 40px;
	text-align: center;
	color: #0070ba;
}

.services li:hover {
    background-color: #FFB640;
    color: white;
    border: 1px solid #FFB640;
	background-color: rgb(0, 112, 186);
	border: 1px solid rgb(0, 112, 186);
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    transition-duration: 0.2s;
    transition-timing-function: initial;
    transition-delay: initial;
    transition-property: box-shadow, background-color, border;
    
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
    .content-content {
      padding: 20px 0;
    }
}
</style>

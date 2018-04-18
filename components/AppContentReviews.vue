<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-reviews">
            <div class="content-title">
              <!-- <p class="content-title-h2">Отзывы о нашей работе</p> -->
              <p class="content-title-h2">ОТЗЫВЫ О НАШЕЙ РАБОТЕ</p>
            </div>
            <div class="content-main">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                      <div class="ban">
                          <div class="slide-wrap">
                            <div class="slide-wrap-text">
                              {{ banner.text }}
                            </div>
                            <div class="slide-wrap-bottom">
                              <div class="slide-wrap-bottom-wrap">
                                <div class="slide-wrap-bottom-wrap-name">
                                  <a :href="banner.link">{{ banner.name }}</a>
                                </div>
                                <div class="slide-wrap-bottom-wrap-info">
                                  {{ banner.info }}
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
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
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
    data() {
      return {
        banners: {
          2: {
            id: "1",
            name: "Мадина",
            info: "27 лет, Оренбург",
            text: "Хочу поблагодарить юристов компании за успешное взыскание денежных средств по полученному решению суда! Неустойку получили в полном обьеме! Тот самый случай когда результат превысил ожидания. Спасибо за грамотную работу на каждом этапе, начиная от подготовки и составления документов для суда, заканчивая итоговым решением и получением денег на руки.",
            link: "https://vk.com/id72506129"
          },	  	  
          1: {
            id: "2",
            name: "Альбина",
            info: "31 год, Оренбург",
            text: "Я была дольщиком в строящемся доме. Стройка то замораживалась, то возобновлялась. Я ждала не один год, когда застройщик подберется к строительству моего этажа. Решила вернуть свои деньги, но застройщик отказывался это делать. Тогда я обратилась к специалистам юридической компании «ОренСовет» за помощью в решении моего вопроса. Деньги вернули, из доли я вышла и купила вторичку! Также хочу сказать спасибо за грамотно составленный договор купли-продажи квартиры.",
            link: "https://vk.com/id58497687"
          },
          3: {
            id: "3",
            name: "Николай",
            info: "27 лет, Оренбург",
            text: "Хотелось бы оставить положительный отзыв о работе юриста юридической компании «ОренСовет» Рачилина Сергея Юрьевича в качестве представителя - в общении он всегда убедителен, что является очень ценным качеством, так как связано с умением отстоять интересы клиента. Также понравился его ответственный подход к делу, профессионализм и надежность. Большое спасибо за проделанную работу! В целом также понравилась организованность и стиль работы компании.",
            link: "https://vk.com/id150409915"
          }
        },
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
    }
  }
</script>
 
<style scoped>
.ban {
  /* background-color: violet; */
  width: 100%;
  /* height: 200px; */
}
.my-swiper {
    height: 300px;
    width: 100%;
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
    color:black;
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 400;
}

.slide-wrap {
  padding: 0 40px 30px 50px;
  font-size: 16px;
  line-height: 26px;
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
  color: rgb(110, 110, 110);
  font-size: 12px;
}
@media all and (min-width: 500px) {
    .content-title-h2 {
    font-size: 30px;
    margin-top: 45px;
    margin-bottom: 30px;
    font-weight: 300;
  }
    .content-reviews {
      padding-bottom: 20px;
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
      margin-bottom: 0;
    }
    .slide-wrap{
      width: 650px;
      padding: 40px 40px 20px 50px;
      font-size: 20px;
      font-weight: 300;
      line-height: 30px;
      color: #032c55;
      /* align-items: center; */
    }
    .ban {
      display: flex;
      justify-content: center;
    }
}
</style>

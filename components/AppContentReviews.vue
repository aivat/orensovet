<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-content">
            <div class="content-title">
              <p class="content-title-h2 title-h2-main">Отзывы о нашей работе</p>
            </div>
            <div class="content-main">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="banner in banners">
                      <div class="ban"> {{ banner }}
                        </div>
                      <!-- <img :src="banner"> -->
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
export default {
    data() {
      return {
                banners: [
          '_nuxt/img/fon6.b16ad27.jpg',
          '_nuxt/img/fon6.b16ad27.jpg',
          '_nuxt/img/fon6.b16ad27.jpg'
        ],
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
  background-color: violet;
  width: 100%;
  height: 200px;
}
.my-swiper {
    height: 300px;
    width: 100%;
}
.my-swiper     .swiper-slide {
   height: 300px;
    width: 100%;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }

.my-swiper.swiper-pagination>.swiper-pagination-bullet {
           height: 300px;
    width: 100%;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
        background-color: red;
}

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
  margin-bottom: 40px;
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color: #222222;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
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
}
</style>

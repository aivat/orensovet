<template>
  <div id ="contentPlus" v-bind:class="{ 'content-plus-lazy-background': isActive }" class="content content-background">
      <div class="gradient">
      <div class="container">
          <div class="content content-plus">
                <div class="list-item-title">
                  <div class="item">
                      <p class="content-title-h2">В нашем профессиональном активе</p>
                  </div>
              </div> 
              <div class="digits-wrapper">
                    <div class="digit-wrapper">
                      <div class="digit-wrapper-h2">5 лет</div> 
                      <div class="digit-wrapper-content">успешной работы</div> 
                  </div>
                  <div class="digit-wrapper">
                      <div class="digit-wrapper-h2">> 10 млн ₽</div> 
                      <div class="digit-wrapper-content">взысканных сумм</div> 
                  </div>
                    <div class="digit-wrapper">
                      <div class="digit-wrapper-h2">93 %</div> 
                      <div class="digit-wrapper-content">выигранных дел в арбитражных судах и судах общей юрисдикции</div> 
                  </div>
              </div>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: false
        }
    },
    created() {
        if (process.browser) {    
			 window.addEventListener('scroll', this.handleScroll)
        }
    },
    methods: {
		handleScroll (event) {
            // почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
            let qwe = contentPlus.getBoundingClientRect();

            if ( qwe.top < window.innerHeight && !this.isActive) {
                this.isActive = true
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
.gradient {
    width: 100vw;
    height: 100%;
    background: linear-gradient(to right, rgba(73, 9, 9, 0.603) 0%, rgba(9, 75, 12, 0.308) 100%);
    display: flex;
    justify-content: center;
}

.content-plus {
  flex-direction: column;
  color: white;
  justify-content: center;
  height: 100%;
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color: white;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    background-color: rgb(247, 56, 56);
    background-color: rgb(0, 0, 0, 0.1);
    padding: 5px 15px;
}
.content-background {
    height: 553px;
	background-color: #f7f9fa;
	padding: 0;
    
    opacity: 1;
    background-position: center center / cover;
    background-repeat: no-repeat;
}

.content-plus-lazy-background {
    background: url(~assets/img/fon6.jpg)  center center / cover no-repeat;
}
.digits-wrapper {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
}

.digit-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
/*    justify-content: center;*/
    opacity: 1;
}
.digit-wrapper-h2 {
    font-size: 30px;
    padding: 10px;
    font-weight: 600;
}

.digit-wrapper-content {
    font-size: 20px;
    line-height: 29px;
    font-weight: 300;
    text-align: center;
}
@media all and (min-width: 500px) {
    .digits-wrapper {
		flex-direction: row;
    }
    .content-title-h2 {
        width: 400px;
        margin: auto;
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
        /* background-color:  rgb(247, 56, 56); */
    }
    .list-item-title {
        margin-bottom: 70px;

    }
    .digit-wrapper-content {
        width: 300px;
    }
    .digit-wrapper {
        background-color: rgba(0, 0, 0, 0.3);
        margin-right: 20px;
        /* border: 4px solid rgb(247, 56, 56); */
    }
}
</style>

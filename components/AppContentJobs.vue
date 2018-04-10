<template>
  <div class="content content-background">
      <div class="gradient">
      <div class="container">
          <div class="content content-jobs">
                <div class="content-jobs-top">
                    <div class="content-jobs-top-title">
                        БЕЗОПАСНЫЕ УСЛОВИЯ РАБОТЫ
                        <p class="span-red">ГАРАНТИРУЮТСЯ ДОГОВОРОМ С НАШЕЙ КОМПАНИЕЙ</p>
                    </div>
                    <br>
                    <div class="content-jobs-top-content">
                        <span class="content-jobs-text">
                            Чтобы получить услуги юриста, необходимо записаться на прием. Это можно сделать любым удобным способом:
                        </span>
                        <ul class="content-jobs-top-content-list">
                            <li>воспользовавшись на сайте сервисом <a href="#" class="content-jobs-top-content-link"> «Заказать звонок»</a>;</li>
                            <li >позвонив по телефону в Оренбурге: <a  href="tel: +7 (3532) 608-464" class="content-jobs-top-content-link">+7 (3532) 608-464</a></li>
                        </ul> 
                    </div>
                    <div class="call-wrap">
                        <div class="call" @click="showModal = true">
                            <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>                            
                            Заказать звонок
                        </div>
                    </div>                   
                </div>
                <div class="content-jobs-bottom">
                    <div class="content-jobs-top-title">
                        ПОРЯДОК РАБОТЫ:
                    </div>
                    <div class="content-jobs-bottom-content">
                        <ul class="content-jobs-list">
                            <li class="content-jobs-list-item">
                                <div class="content-jobs-top-title">
                                    ШАГ 1
                                </div>
                                <div class="content-jobs-text">
                                    Вы звоните/оставляете заявку на прием
                                </div>
                            </li>
                            <li class="content-jobs-list-item">
                                <div class="content-jobs-top-title">
                                    ШАГ 2
                                </div>
                                <div class="content-jobs-text">
                                    Мы договариемся о встрече
                                </div>
                            </li>
                            <li class="content-jobs-list-item">
                                <div class="content-jobs-top-title">
                                    ШАГ 3
                                </div>
                                <div class="content-jobs-text">
                                    При встрече мы обсуждаем проблему, определяем цель и условия сотрудничества
                                </div>
                            </li>
                            <li class="content-jobs-list-item">
                                <div class="content-jobs-top-title">
                                    ШАГ 4
                                </div>
                                <div class="content-jobs-text">
                                    Мы добиваемся нужного Вам результата
                                </div>
                            </li>                                                        
                        </ul>  
                    </div>
                </div>
          </div>
          <div class="">
            <AppModalCall v-if="showModal" v-on:close="showModal = false"></AppModalCall>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
import AppModalCall  from '~/components/AppModalCall.vue'

export default {
    data () {
      return {
        showModal: false
      }
    },
    components: {
        AppModalCall
    }
  }
</script>
 
<style scoped>
.call-wrap {
    margin: 25px 0;
    display: flex;
    justify-content: center;
}
.call {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(247, 56, 56);
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    width: 150px;
    font-size: 14px;
    color: #ffffff;
    background-color:rgb(247, 56, 56);
    font-weight: 500;
    cursor: pointer;
    transition: box-shadow .15s ease-in-out;
     -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; 
}

.call:hover {
    border: 1px solid rgb(247, 56, 56);
    background-color:rgb(216, 33, 33);
}

.call:active {
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px rgb(216, 33, 33);
}

.call:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #99D6D6;
}
.call>svg {
    margin-right: 5px;
}
.container {
    width: 100%; 
}

.content {
  display: flex;
}
.gradient {
    width: 100vw;
    height: 100%;
    background: linear-gradient(to right, rgba(33, 34, 36, 0.9) 0%, rgba(16, 38, 70, 0.8) 100%);  
    display: flex;
    justify-content: center;
}

.content-jobs {
  flex-direction: column;
  color: white;
  margin-top: 20px;
  line-height: 18px;
  margin-bottom: 40px;
  /* font-size: 16px; */
}

.content-title {
  display: flex;
  justify-content: center;
}

.content-jobs-top-title {
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
    /* text-align: center; */
    font-weight: 700;
    line-height: 26px;
}

.span-red {
    background-color: rgb(247, 56, 56);
    margin: 0;
    padding: 2px 10px;;
}
.content-jobs-top-content-list>li {
    margin-bottom: 7px;
}

.content-jobs-top-content-link {
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px dashed white;
    color: white;
}

.content-jobs-list {
    margin-left: 0;
    padding-left: 0;
}
.content-jobs-list-item {
  list-style-type: none; 
  border: 4px solid rgb(247, 56, 56);
  margin-bottom: 15px;
  padding: 30px 30px;
  /* height: 120px; */
}
.content-jobs-top, .content-jobs-bottom {
    padding: 0 30px;
}
.content-background {
	padding: 0;
    background: url(~assets/img/fon7.jpg)  center center / cover no-repeat, linear-gradient(to right, rgba(9, 5, 47, .85) 0%, rgba(49, 29, 94, .85) 100%);
    opacity: 1;
    background-position: center center / cover;
    background-repeat: no-repeat;
}

@media all and (min-width: 500px) {
    .digits-wrapper {
		flex-direction: row;
    }
}
@media (min-width: 1200px) {
    .content {
        /* justify-content: center; */
    }
    .content-jobs {
        flex-direction: row;
        margin-top: 70px;
        font-size: 16px;
    }

    .container {
        width: 1200px; 
    }

    .call-wrap {
        margin-top: 80px;
    }
    .content-jobs-top {
        width: 650px;
    }
    .content-jobs-bottom {
        flex-grow:3;
        flex-shrink: 2;
    }
    .content-jobs-list {
        display: flex;
        flex-wrap: wrap;
    }
    .content-jobs-list-item {
        width: 200px;
    }
    .content-jobs-list-item:nth-child(2n+1) {
        margin-right: 15px;
    }
    .gradient {
        background: linear-gradient(to right, rgba(33, 34, 36, 0.7) 0%, rgba(16, 38, 70, 0.8) 100%);  
    }
}
</style>

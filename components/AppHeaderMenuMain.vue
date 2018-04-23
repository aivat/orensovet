<template>
  <header class="header header-background">
      <div class="gradient">
        <div class="container">
            <div class="header header-content">
                <div class="header-menu">
                    <ul class="menu">
                        <li>
                            <nuxt-link to="/">О БЮРО</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/team">КОМАНДА</nuxt-link>
                        </li>
                        <li class="link-margin">
                            <nuxt-link to="/contacts">КОНТАКТЫ</nuxt-link>
                        </li>
                        <li>
                            <div class="submenu-svg">
                                <svg fill="#FFFFFF" height="24" viewBox="0 4 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                </svg>
                            </div>
                            <div class="triangle-up">
                            </div>
                            <div class="triangle-up-transparent"> 
                            </div> 
                            <ul class="submenu">
                                <li>
                                    <nuxt-link to="/price">ЦЕНЫ</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/blog">БЛОГ</nuxt-link>
                                </li>
                            </ul>
                        </li>					
                    </ul>
                </div>
                <div class="header-logo">
                    <div class="header-logo-name">
                        <h1 class="header-logo-name-h1">
                                ЮРИДИЧЕСКАЯ КОМПАНИЯ
                            <strong class="header-logo-name-title">
                                ОРЕНСОВЕТ
                            </strong>
                        </h1>
                        <img src="~assets/img/logo2.png" alt="ВАШ ЮРИСТ">
                        <h2 class="header-logo-name-h2">
                            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                        </h2>
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
                    <div class="header-logo-slogan">
                        Главное достояние юриста — способность всегда быть уверенным в себе.
                        Мы уверены в своей работе, поэтому гарантируем логичное решение вашей проблемы. 
                    </div>
                </div>
            </div>
            <div id="start"></div>
            <div class="">
                <AppModalCall v-if="showModal" v-on:close="showModal = false"></AppModalCall>
            </div>
            </div>
    </div>
  </header>
</template>

<script>
import AppModalCall  from '~/components/AppModalCall.vue'

export default {
    data () {
      return {
        showModal: false,
        isActive: false
      }
    },
    components: {
        AppModalCall
    },
    mounted: function () {
        this.isActive = true
    }
  }
</script>

<style scoped>
#start {
    height: 1px;
}

.gradient {
    width: 100vw;
    height: 100%;
    background: linear-gradient(to right, rgba(26, 9, 9, 0.7) 0%, rgba(6, 7, 6, 0.7) 100%);
    display: flex;
    justify-content: center;
}

.call-wrap {
    margin: 25px 0;
    display: flex;
    justify-content: center;
}
.call {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(211, 47, 47);
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    width: 150px;
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    transition: box-shadow .15s ease-in-out;
     -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; 
}
.call>svg {
    margin-right: 5px;
}
.call:hover {
    background-color:rgb(211, 47, 47);
}

.call:active {
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px rgb(211, 47, 47);
}

.call:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #99D6D6;
}
.container {
    width: 100%; 
}

.header {
    display: flex;
    font-size: 14px;
    padding: 0;
}

.header-content {
    flex-direction: column;
}

.header-menu {
    display: flex;
    justify-content: center;
}

.header-background {
    background: url(~static/fon5.jpg) center center / cover no-repeat;
    height: 650px;
}

.header-logo {
    margin-top: 95px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-logo-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.header-logo-name>img {
    width: 160px;
    height: 160px;
}

.header-logo-name-h1 {
    display: flex;   
    font-size: 14px;
    font-weight: 400;
    flex-direction: column;
    align-items: center;
    margin: 0;
}

.header-logo-name-title {
    font-size: 48px;
    font-weight: 500;
}
.header-logo-name-h2 {
    margin: 0;
    font-size: 18px;
    background-color: rgb(211, 47, 47);
    padding: 10px 20px;
    font-weight: 400;
}
.header-logo-slogan {
    color: white;
    margin-top: 0px;
    text-align: center;
    line-height: 27px;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 400;
}
.menu {
	margin: 0;
	padding: 0;
	display: flex;
    position: relative;
    font-size: 14px;
}

li {
	list-style-type: none;
	text-decoration: none;
}

.menu>li {
    margin-left: 10px;
}

.menu>li:first-child {
	margin-left: 0;
}
.submenu-svg {
    padding: 10px 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
}
li>a {
	display: block;
	color: white;
	text-decoration: none;
	padding: 10px 5px;
	border-bottom: 2px solid transparent;
    /* font-size: 14px; */
    font-weight: 500;
}

.menu>li>a:hover {
	border-bottom: 2px solid white;
}

.menu>li:last-child>a:hover {
	border-bottom: 2px solid transparent;
}

.menu>li:last-child {
    position: absolute;
    right: 0;
}
.menu>li:hover>.submenu {
	display: block;
}
.menu>li:hover>.triangle-up-transparent, .menu>li:hover>.triangle-up {
	display: block;
}
.link-margin {
    margin-right: 40px;
}

.triangle-up {
    display: none;
    position: relative;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid white;
    top: -20px;
    right: -13px;
        box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 
    0 3px 14px 2px rgba(0,0,0,0.12), 
    0 5px 5px -3px rgba(0,0,0,0.2);
}

.triangle-up-transparent {
    display: none;
    position: relative;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 6px solid rgba(0, 0, 0, 0.644);
    border-bottom: 6px solid white;
    top: -24px;
    right: -14px;
    z-index: 10;
}
.submenu {
    display: none;
    position: absolute;
    padding: 0;
    /* border: 2px solid white; */
    border-radius: 2px;
    top: 37px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.644);
    background-color: white;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 
    0 3px 14px 2px rgba(0,0,0,0.12), 
    0 5px 5px -3px rgba(0,0,0,0.2);
    padding: 10px 0;
}

.submenu>li>a {
    padding: 5px 20px 5px 40px;
    color: black;
     color: #676767;

}

.submenu>li>a:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

.exact-active-link {
    border-radius: 2px 2px 0 0;
	border-bottom: 2px solid white;
}
.submenu>li>.exact-active-link {
    border-bottom: 2px solid transparent;
    background-color: rgba(255, 255, 255, .2)
}
@media (min-width: 500px) {
    .header-menu {
        display: flex;
        justify-content: flex-end;
    }
}

@media (min-width: 1000px) {
    .header-logo-slogan {
        width: 800px;
        margin-top: 20px;
    }
    .header-background {
        height: 580px;
    }
}

@media (min-width: 1200px) {
    #start {
        height: 1px;
    }
    .header {
        justify-content: center;
    }
    .header-logo {
        margin-top: 20px;
    }
    .container {
        width: 1200px; 
    }
    .header-logo-name {
        margin-top: 20px;
    }
}
</style>

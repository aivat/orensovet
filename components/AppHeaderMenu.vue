<template>
  <header class="header header-background">
      <div class="container">
          <div class="header header-content">
            <div class="header-menu">
                <ul class="menu">
                    <li>
                        <!-- <a href="#" class="menu-active">О БЮРО</a> -->
                        <nuxt-link to="/">О БЮРО</nuxt-link>
                    </li>
                    <li>
                        <!-- <a href="#">КОМАНДА</a> -->
                        <nuxt-link to="/team#start">КОМАНДА</nuxt-link>
                    </li>
                    <li class="link-margin">
                        <nuxt-link to="/contacts#start">КОНТАКТЫ</nuxt-link>
                    </li>
                    <li>
                        <a href="#">
                            <svg fill="#FFFFFF" height="24" viewBox="0 4 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                        </a>
                        <ul class="submenu">
                            <li>
                                <nuxt-link to="/price#start">ЦЕНЫ</nuxt-link>
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
                    <p>
                        ЮРИДИЧЕСКОЕ БЮРО
                    </p>
                    <p class="header-logo-name-h1">
                        ВАШ СОВЕТНИК
                    </p>
                    <img src="~assets/img/logo2.png" alt="ВАШ ЮРИСТ">
                    <p class="header-logo-name-h2">
                        БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                    </p>
				</div>
                <div class="call-wrap">
                        <div class="call">
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
    </div>
  </header>
</template>

<script>

export default {
    data () {
      return {
        online: true
      }
    }
  }
</script>

<style scoped>
#start {
    height: 1px;
    /* margin-bottom: 80px; */
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
    border: 2px solid rgb(247, 56, 56);
    /* border: 4px solid blue; */
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    width: 150px;
    color: #ffffff;
    /* background-color:rgb(247, 56, 56); */
    font-weight: 500;
    cursor: pointer;
    /* box-shadow: 0 0 0 2px #FFFFFF; */
    /* box-shadow: 0 0 0 2px transparent, 0 0 0 4px rgb(216, 33, 33); */
    transition: box-shadow .15s ease-in-out;
     -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; 
}
.call>svg {
    margin-right: 5px;
}
.call:hover {
    background-color:rgb(216, 33, 33);
}

.call:active {
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px rgb(216, 33, 33);
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
}

.header-content {
    flex-direction: column;
}

.header-menu {
    display: flex;
    justify-content: center;
}

.header-background {
    background: url(~assets/img/fon3.jpg) center center / cover no-repeat;
    height: 710px;
}

.header-logo {
    margin-top: 95px;
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
.header-logo-name>p {
    margin: 0;
}
.header-logo-name-h1 {
    font-size: 28px;
}

.header-logo-name-h2 {
    
    font-size: 18px;
    background-color: dodgerblue;
    background-color: rgb(247, 56, 56);
    padding: 10px 20px;
}
.header-logo-slogan {
    color: white;
    margin-top: 0px;
    text-align: center;
    line-height: 27px;
    padding: 0 20px;
    font-size: 20px;
}
.menu {
	margin: 0;
	padding: 0;
	display: flex;
    position: relative;
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
.link-margin {
    margin-right: 40px;
}
.submenu {
    display: none;
    position: absolute;
    padding: 0;
    border: 2px solid white;
    top: 37px;
    right: 10px;
    /* background-color: rgba(0, 0, 0, 0.2) */
}

.submenu>li>a {
    padding: 10px 30px 10px 30px;
}

.submenu>li>a:hover {
    background-color: rgba(255, 255, 255, .1)
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
        /* margin-bottom: 80px; */
    }
    .header {
        justify-content: center;
    }
    .header-logo {
        margin-top: 50px;
    }
    .container {
        width: 1200px; 
    }
    .submenu>li>a {
        padding: 10px 10px 10px 50px;
    }
    .header-logo-name {
        margin-top: 20px;
    }
}
</style>

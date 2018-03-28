<template>
  <header class="header header-background">
      <div class="container">
          <div class="header header-content">
            <div class="header-menu">
                <ul class="menu">
                    <li>
                        <a href="#" class="menu-active">О БЮРО</a>
                    </li>
                    <li>
                        <a href="#">КОМАНДА</a>
                    </li>
                    <li class="link-margin">
                        <a href="#">КОНТАКТЫ</a>
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
                                <a href=#>ЦЕНЫ</a>
                            </li>
                            <li>
                                <a href=#>БЛОГ</a>
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
		  		<div class="header-logo-slogan">
			  		Главное достояние юриста — способность всегда быть уверенным в себе.
                    Мы уверены в своей работе, поэтому гарантируем логичное решение вашей проблемы. 
			  	</div>
            </div>
        </div>
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
    height: 640px;
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
    margin-top: 50px;
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
        width: 750px;
    }
}

@media (min-width: 1200px) {
    .header {
        justify-content: center;
    }
    .header-logo {
        margin-top: 50px;
    }
    .header-background {
        height: 550px;
    }
    .container {
        width: 1200px; 
    }
    .submenu>li>a {
        padding: 10px 10px 10px 50px;
    }
}
</style>

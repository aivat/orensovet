<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-content">
            <div class="content-title">
              <p class="content-title-h2 title-h2-main">ЮРИДИЧЕСКИЕ УСЛУГИ</p>
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
                  <li class="services-href-visible">
                    <a href="/services/spory-s-zastrojshchikami.html" class="services-href">
                    CПОРЫ С ЗАСТРОЙЩИКАМИ
                    </a>
                  </li>
                  <li class="services-href-visible">
                    <a href="/services/zashchita-prav-potrebitelej.html" class="services-href">
                    ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ
                    </a>
                  </li>
                  <li class="services-href-visible">
                    <a href="/services/oformlenie-nedvizhimosti.html" class="services-href">
                      ОФОРМЛЕНИЕ НЕДВИЖИМОСТИ
                    </a>
                  </li>
              </ul>
            </div>
          </div>
    </div>
  </div>
</template>

<script>

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
    font-size: 30px;
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
}
</style>

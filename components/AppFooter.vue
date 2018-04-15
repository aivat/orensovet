<template>
  <footer class="content content-background">
      <div class="container">
          <div class="content content-footer">
            <div class="foot-cont">
                  <div class="footer-left">
					  <div class="footer-item footer-item-tel">
						  <div class="fotter-title footer-item-tel-title">
                              <div class="footer-item-tel-title-h2">ТЕЛЕФОНЫ</div>
                        </div>
                          <p class="fotter-desc"><a  href="tel:8(3532)608-464" class="dot-2">8 (3532) 608-464</a></p>
                          <p class="fotter-desc"><a  href="tel:8(932)533-99-31" class="dot-2">8 (932) 533  99-31</a></p>
					  </div>
                  </div>
                  <div class="footer-left">
					  <div class="footer-item">
						  <div class="fotter-title">
                              <div class="footer-item-tel-title-h2">ВРЕМЯ РАБОТЫ</div>

                            </div>
						  <p class="fotter-desc">Пн-Пт: с 09:00 до 19:00</p>
						  <p class="fotter-desc">Сб-Вс: выходные</p>	
					  </div>
                  </div>
                  <div class="footer-left">
					  <div class="footer-item">
						  <div class="fotter-title">
                              <div class="footer-item-tel-title-h2">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
                            </div>
						  <p class="fotter-desc">
                              <a href="https://vk.com/orensovet" class="dot-2">Мы ВКонтакте</a>
                          </p>
					  </div>
                  </div>
                  <div class="footer-left">
					  <div class="footer-item">
						  <div class="fotter-title"><div class="footer-item-tel-title-h2">САЙТ РАЗРАБОТАН</div></div>
						  <p class="fotter-desc">
                              <a href="https://lba.su" class="dot-2">веб-студией "ЭльБиЭй"</a>
                          </p>
					  </div>
                  </div>
            </div>
            <div class="foot-cont foot-cont-copy">
                <div class="fotter-title-copy">
                    © 2018 ООО "Ваш Советник", ИНН 5609187971
                </div>
            </div>
          </div>
    </div>
  </footer>
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
.gradient {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
}

.content-footer {
  flex-direction: column;
    margin-bottom: 20px;
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 400;
}
.content-background {
	padding: 0;
    color: black;
    background-color: rgb(241, 241, 241);
     
}

.dot-2 {
	text-decoration: none;
	border-bottom: 1px dashed black;
    color: black;
}

.dot-2:hover {
    color: #f00000;
 }

.fotter-desc {
    color: black;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
}
.fotter-title {
    font-weight: 300;
    margin-bottom: 8px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 18px;
 }
.footer-item ul {
    margin: 0;
    padding: 0;
}
.footer-item ul li {
	list-style-type: none;
	padding-top: 10px;
}

.footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.footer-item-tel {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

.footer-item-tel-title {
    margin-bottom: 5px;
}
.footer-item-tel>a {
    display: inline-block;
    padding-top: 8px;
}

.foot-cont-copy {
    display: flex;
    justify-content: center;
}
.fotter-title-copy {
    margin-top: 40px;
    font-size: 12px;
    color: rgb(110, 110, 110);
}
@media all and (min-width: 500px) {

}
@media (min-width: 1200px) {
    .foot-cont {
        display: flex;
        justify-content: space-around;
    }
    .foot-cont-copy {
        margin-top: 35px;
    }

    .footer-item {
        align-items: flex-start;
    }
    .content {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }
    .content-footer {
        margin-top: 30px;
    }

}
</style>

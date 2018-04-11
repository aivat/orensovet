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
    /* background: linear-gradient(to right, rgba(73, 9, 9, 0.603) 0%, rgba(9, 75, 12, 0.308) 100%); */
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
    /* color: white; */
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 400;
}
.content-background {
    /* height: 553px; */
	/* background-color: #f7f9fa; */
	padding: 0;
    /* background-color: rgba(245, 243, 243, 0.733);

    background-color: rgba(22, 22, 22, 0.918);

    background-image: radial-gradient(circle farthest-side at center bottom,#009cde,#003087 125%);
    
    opacity: 1;
    color: #0070ba;
     color: #f7f5f5;
      /* color: black; */
         color: #757575;
     color: #181818;
      /* background-image: radial-gradient(circle farthest-side at center bottom,rgb(59, 59, 59),#000 125%);  */
      /* background-color: rgb(59, 59, 59); */
       background-color: white;
       color: black;
       background-color: rgb(241, 241, 241);
     /* background: url(~assets/img/fon7.jpg)  center center / cover no-repeat, linear-gradient(to right, rgba(9, 5, 47, .85) 0%, rgba(49, 29, 94, .85) 100%); */ 
    /* background-position: center center / cover;
    background-repeat: no-repeat; */
     
}

.dot-2 {
	text-decoration: none;
	border-bottom: 1px dashed black;
    /* border-bottom: 1px dashed white; */
    color: black;
    /* color:white; */
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
    /* color:white; */
}
.fotter-title {

    font-weight: 300;
    margin-bottom: 8px;
    margin-top: 20px;
    /* width: 100%; */
    display: flex;
    /* background-color:rgb(247, 56, 56); */
    /* background-color: #2a2a2b; */
     /* background-image: radial-gradient(circle farthest-side at center bottom,#009cde,#003087 125%); */
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    /* color: white; */
    font-size: 18px;
    /* color:white; */
 }
.footer-item ul {
    margin: 0;
    padding: 0;
}
.footer-item ul li {
	list-style-type: none;
	padding-top: 10px;
}

.footer-item ul li a {
	/* color:white; */
}
.footer-item {
    /* font-size: 18px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.footer-item-tel {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* font-size: 18px; */
    color: black;
    /* color: white; */
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
    color: #9299a2;
}
@media all and (min-width: 500px) {

}
@media (min-width: 1200px) {
    .foot-cont {
        display: flex;
        justify-content: space-around;
        /* flex-direction: column; */
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

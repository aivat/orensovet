<template>
  <header class="header-top sticky header">
      <div class="container">
          <div class="header-top">
            <div class="header-left">
                <i class="iconic-location"></i>
                <a href="kontakt.html" class="href-contact href-contact-adress">
                    г. Оренбург, ул. Салмышская, д. 34/5, офис 207
                </a> 
            </div>
            <div class="header-right">
                <i class="iconic-telephone"></i>
                <a  href="tel: 608-464" class="href-contact">
                    608-464
                </a>
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

.header {
    box-shadow: 0 -1px 8px rgba(0,0,0,.3);
    padding: 5px 0;
}
.container {
    width: 100%; 
}
.header-top {
    display: flex;
    justify-content: space-between;
    background-color: white;
}

.header-left, .header-right {
   display: flex;
   padding: 10px 10px;
}

.sticky {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 0;
}

.href-contact {
	text-decoration: none;
	border-bottom: 1px dashed #000000;
    color: black;
}

.href-contact:hover {
    color: #f00000;
 }

.href-contact-adress {
    width: 195px;
}

.iconic-location {
	display: inline-block;
	width: 16px;
    height: 16px;
    background-image: url(~assets/img/location.png);
	background-repeat: no-repeat;
}

.iconic-telephone {
	width: 22px;
    height: 20px;
    background-image: url(~assets/img/telephone2.png);
	background-repeat: no-repeat;
}

@media (min-width: 500px) {
    .href-contact-adress {
        width: auto;
    }
}

@media (min-width: 1200px) {
    .header {
        justify-content: center;
    }
    .container {
        /*display: block;*/
        width: 1200px; 
    }

}
</style>

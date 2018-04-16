<template>
  <header class="header-top sticky header">
      <div class="container">
          <div class="header-top">
            <div class="header-left">
                <nuxt-link class="href-contact href-contact-adress" to="/contacts#start">
                    <svg class="iconic iconic-adress" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    <div>г. Оренбург, ул. Салмышская, д. 34/5, офис 207</div>
                </nuxt-link>
            </div>
            <div class="header-right">
                <a  href="tel: 608-464" class="href-contact">
                    <svg class="iconic" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
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
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');

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
    z-index: 9999;
}

.header-left, .header-right {
   display: flex;
   padding: 10px 10px;
}
.header-left {
    padding-right: 0;
}

.header-right {
    padding-left: 0;
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
	/* border-bottom: 2px dashed #000000; */
    color: black;
    color: #676767;
    font-weight: 500;
    display: flex;
    align-items: center;
    font-size: 13px;
}

.href-contact:hover {
    color: #f00000;
 }

.href-contact-adress {
    width: 215px;
}

.iconic-adress {
    width: 34px;
    height: 34px;
}
.iconic {
    margin-right: 5px;
    fill: currentColor;
}

@media (min-width: 360px) {
    .href-contact-adress {
        width: 235px;
    }

    .href-contact {
        font-size: 14px;
    }
}

@media (min-width: 500px) {
    .href-contact-adress {
        width: auto;
    }
    .iconic-adress {
        width: 24px;
        height: 24px;
    }
}

@media (min-width: 1200px) {
    .header {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }
    .href-contact {
        font-size: 16px;
    }
}
</style>

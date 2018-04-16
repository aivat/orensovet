<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-contacts">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="text-wrapper">
                    <h2>Контактные данные</h2>
                    <div class="text" itemscope itemtype="http://schema.org/LegalService">
                        Наименование юридического лица: <span itemprop="legalName">ООО "Ваш Советник"</span><br>
                        Коммерческое обозначение: <span itemprop="name">Юридическое бюро "Ваш Советник"</span> <br>
                        Адрес: <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressRegion">г. Оренбург</span>, <span itemprop="streetAddress">ул. Салмышская, д. 34/5</span>, 2 этаж, офис № 207</span><br>
                        Телефон: <span itemprop="telephone">+7 (3532) 608-464</span><br>
                        ИНН: <span>5609187971</span> <br>
                        КПП: <span>560901001</span> <br> 
                        ОГРН: <span>1175658024299</span><br>Время работы:
                        <time itemprop="openingHours" datetime="Mo, Tu, We, Th, Fr 09:00-19:00"><span>Пн-Пт: с 09:00 до 19:00</span></time><br>
                        Цены: <span itemprop="priceRange">0 - 100 000 ₽</span><br>
                        <img src="~assets/img/logo.png" itemprop="image" width="50px">                 
                        
                    </div>
                </div>
          </div>
    </div>
    <div class="map-wrapper">
        <yandex-map 
        :coords="[51.827540, 55.158256]"
        zoom="16"
        style="width: 98vw; height: 600px;"
        :cluster-options="{
            1: {clusterDisableClickZoom: true}
        }"
        :behaviors="['multiTouch']"
        :controls="['trafficControl', 'zoomControl', 'geolocationControl', 'fullscreenControl']"
        >

            <ymap-marker 
            marker-id='1'
            marker-type="placemark"
            :coords="[51.827540, 55.158256]"
            hint-content="Юридическое бюро 'Ваш Советник', ул. Салмышская, д. 34/5, офис № 207"
            :balloon="{header: 'Юридическое бюро Ваш Советник', body: 'Оренбург, ул. Салмышская, д. 34/5, офис № 207<br> Тел.: 608-464', footer: 'Пн-Пт: с 09:00 до 19:00'}"
            :icon="{color: 'blue', glyph: 'court'}"
            cluster-name="1"
            ></ymap-marker>

        </yandex-map>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AppBreadcrumbs from '~/components/AppBreadcrumbs.vue'
import YmapPlugin from 'vue-yandex-maps'
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'
if (process.browser) {
  Vue.use(YmapPlugin)
}
// new Vue({
//   components: { yandexMap, ymapMarker }
// })

export default {
    data () {
        return {
            breadcrumbs: [{
                id: 1,
                name: 'Главная',
                link: '/',
                seen: true
            }, {
                id: 2,
                name: 'Контакты',
                link: '/contacts',
                seen: false
            }]
            // placemarks: [
            //     {
            //         coords: [51.827540, 55.158256],
            //         properties: {}, // define properties here
            //         options: {}, // define options here
            //         clusterName: "1",
            //         balloonTemplate: '<div>"Your custom template"</div>',
            //         callbacks: { click: function() {} }
            //     }
            // ]
        }
    },
    components: {
        AppBreadcrumbs
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
.content-background {
  flex-direction: column;
  align-items: center;
}
.content-contacts {
  flex-direction: column;
  color: black;
  justify-content: center;
  height: 100%;
  /* width: 900px; */
}

.content-title-h2 {
    color: black;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    background-color: rgb(247, 56, 56);
    background-color: rgb(0, 0, 0, 0.1);
    padding: 5px 15px;
}

.breadcrumbs-wrapper {
    padding: 10px 5px;
}

h2 {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
    line-height: 28px;
}

.text {
    margin: 16px 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 28.8px;
}

.text-wrapper, .table-wrapper {
    padding: 0 5px;
}

p {
    margin: 0;
}

span {
    font-weight: 400;
}

@media all and (min-width: 500px) {
}
@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 900px; 
    }

    .content-title-h2 {
        width: 500px;
        /* background-color:  rgb(247, 56, 56); */
    }
}
</style>

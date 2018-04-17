<template>
  <div class="content content-background">
    <div class="container">
          <div class="content content-contacts">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="contacts-wrapper">
                    <div class="contacts-wrapper-wrapper" itemscope itemtype="http://schema.org/LegalService">
                        <div class="contacts-wrapper-header">
                            <div class="contacts-wrapper-header-wrap">
                                <div class="contacts-wrapper-header-legalname">
                                    ОренСовет
                                </div>
                                <div class="contacts-wrapper-header-ooo">
                                    Юридическая компания
                                </div>
                            </div>
                            <img src="~assets/img/logo.png" width="70px" height="70px" itemprop="image">   
                        </div>
                        <div class="contacts-wrapper-main">
                            <div>
                                Наименование юридического лица:
                                <span itemprop="legalName"> 
                                    ООО "Ваш Советник"
                                </span>
                            </div>                       
                            <div>
                                Коммерческое обозначение: 
                                <span itemprop="name"> 
                                    Юридическая компания "ОренСовет"
                                </span>
                            </div>
                            <div>
                                Cайт:
                                <a href="https://orensovet.ru" class="contacts-wrapper-main-link" title="orensovet.ru" itemprop="url"> 
                                    orensovet.ru
                                </a>
                            </div>
                            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                Адрес:
                                <span itemprop="addressRegion">
                                    г. Оренбург
                                </span>
                                <span itemprop="streetAddress">
                                    ул. Салмышская, д. 34/5</span>
                                <span>, 2 этаж, офис № 207
                                </span>
                            </div>
                            <div>
                                Телефон: 
                                <span itemprop="telephone"> 
                                    +7 (3532) 608-464
                                </span>
                            </div>
                            <div>
                                ИНН: 
                                <span> 
                                    5609187971
                                </span>
                            </div> 
                            <div>
                                КПП: 
                                <span> 
                                    560901001
                                </span>
                            </div> 
                            <div>
                                ОГРН:
                                <span> 
                                    1175658024299
                                </span>
                            </div>
                            <div>
                                Время работы:
                                <span itemprop="openingHours" datetime="Mo, Tu, We, Th, Fr 09:00-19:00"> 
                                    Пн-Пт: с 09:00 до 19:00
                                </span>
                            </div>
                            <div>
                                Цены:
                                <span itemprop="priceRange"> 
                                    0 - 100 000 ₽
                                </span>
                            </div>                                                 
                        </div>
                        <div class="contacts-wrapper-footer">
                            <h2>Социальные профили</h2>
                            <div class="contacts-wrapper-footer-wrap">
                                <a itemprop="sameAs" href="https://vk.com/orensovet" title="Вконтакте" class="vk soc">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z"/>
                                    </svg>
                                    <span class="contacts-footer-title-link">ВКонтакте</span>
                                </a>
                                <a itemprop="sameAs" href="https://www.instagram.com/vashsovetnik56" title="Инстаграм" class="soc">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/>
                                    </svg>
                                    <span class="contacts-footer-title-link">Инстаграм</span>
                                </a>
                            </div>
                        </div>
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
.content-background {
    background-color: rgb(241, 241, 241); 
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
    font-size: 18px;
    margin: 0;
    font-weight: 400;
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
.contacts-wrapper {
    padding: 0 5px;
}
.contacts-wrapper-wrapper {
    border-radius: 2px;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    padding: 20px 5px;
    background-color: white;
}
.contacts-wrapper-header {
    display: flex;
    padding-top: 10px;
    padding-bottom: 30px;
    justify-content: space-between;
    align-items: center;
}
.contacts-wrapper-header-legalname {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
}

.contacts-wrapper-header-ooo {
    color: rgb(110, 110, 110);
    line-height: 18px;
}
.contacts-wrapper-main {
    font-size: 16px;
    font-weight: 300;
    line-height: 28.8px;
}
.contacts-wrapper-main>div>span {
    font-weight: 500;

}

.contacts-wrapper-main-link {
    text-decoration: none;
    font-weight: 500;
    color:#0070ba;
}

.contacts-wrapper-main-link:hover{
    text-decoration: underline;
}

.contacts-wrapper-footer {
    margin-top: 20px;
}

.contacts-wrapper-footer-wrap {
    margin-top: 10px;
    display: flex;
}
.vk {
    margin-right: 10px;
}

a>svg {
    fill: currentColor;
}
.soc {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: rgb(0,152,223);
    /* justify-content: center; */
    /* width: 100px; */
}
.soc:hover {
color: #0070ba;
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

    .content-background { 
        background-color: white;
    }
    .contacts-wrapper-wrapper {
        box-shadow: none;
        padding: 0;
    }
    .contacts-wrapper-header {
        width: 250px;

    }
    .contacts-wrapper-footer {
        margin-bottom: 30px;
    }
    .contacts-wrapper-header {
        padding-bottom: 10px;
    }
}
</style>

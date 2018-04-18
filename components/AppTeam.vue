<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-price">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
                <div class="text-wrapper">
                    <h1>Наша команда</h1>
                    <p class="text">
                      Юридическое бюро «Ваш Советник» - это профессиональная команда высококвалифицированных юристов, являющихся экспертами в области арбитражного, гражданского права, в сфере корпоративной практики, разрешения споров интеллектуальной собственности, сопровождения сделок любого уровня сложности в недвижимости и строительстве.

                        Юридическое бюро «Ваш Советник» работает с организациями и частными лицами в Оренбурге и регионах РФ. Наши сотрудники имеют обширный и разнообразный опыт работы.

                        Мы строго соблюдаем принципы уважения, конфиденциальности и ответственности. Любой Клиент, обратившийся к нам за поддержкой, получает квалифицированную помощь. Каждый Клиент для нас уникален, и мы предлагаем именно те решения, которые оптимально подойдут для его конкретного вопроса. Важно и то, что мы предлагаем не только грамотную и эффективную юридическую поддержку, но и приемлемую стоимость юридических услуг.
                    </p>
                </div>
                <div class="team-wrapper">
                                          
                    
                    <ul class="team-list">
                        <li class="team-list-item" v-for="item in team" :key="item.id">
                            <img class="team-list-item-img" :src="path(item.linkImg)" :alt=" 'юрист Оренбурга ' + item.name">
                            <div class="team-list-item-info">
                                <div class="team-list-item-info-name">
                                    {{ item.name }}

                                </div>
                                <div class="team-list-item-info-merit" v-html="item.merit">

                                </div>
                                <div class="team-list-item-info">

                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
          </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from '~/components/AppBreadcrumbs.vue'

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
                name: 'Команда',
                link: '/team',
                seen: false
            }],
            team: [{
                id: 1,
                name: 'Черненко Владислав Александрович',
                linkImg: "urist-orenburg-chernenko",
                merit: '<p>Управляющий партнер</p><ul><li>Выпускник Московской государственной юридической академии;</li> <li>Магистр корпоративного права МГЮА;</li> <li>Член ассоциации юристов России;</li> <li>Автор научных работ по темам: "Незаконное предпринимательство", "Защита прав акционеров: законодательство и правоприменительная практика", "Договор коммерческой концессии (франчайзинга)";</li> <li>Узкий специалист в области корпоративного права и сопровождения бизнеса;</li> <li>7 субъектов РФ - охват арбитражной практики;</li> <li>4 года практической деятельности.</li> </ul>'
            }, {
                id: 2,
                name: 'Бурзайкина Мария Александровна',
                linkImg: "urist-orenburg-mariya",
                merit: '<p>Юрист</p><ul><li>Выпускница Московской государственной юридической академии;</li> <li> Магистр в сфере материального права и судебной формы его применения в гражданском судопроизводстве;</li> <li>Автор научных работ по темам: "Механизм правового регулирования отношений несостоятельности (банкротства)", "Злоупотребление процессуальными правами";</li> <li>Специалист в области банкротства физических и юридических лиц;</li> <li> 3 года практической деятельности.</li> </ul>'
            }, {
                id: 3,
                name: 'Баймешов Самат Сагимбаевич',
                linkImg: "urist-orenburg-baimeshov",
                merit: '<p>Управляющий партнёр</p><ul><li>Выпускник Московского государственного юридического университета им. О.Е. Кутафина;</li> <li>Магистр в сфере гражданского права и процесса;</li> <li>Член ассоциации юристов России;</li> <li>В профессиональном активе свыше 5 лет совместной практики с ведущими юристами и адвокатами Оренбурга;</li> <li>Автор научных работ по темам: "Защита жилищных прав граждан", "Правовое регулирование долевого строительства: состояние, проблемы, пути решения", "Проблемы практического применения различных способов защиты прав собственности на недвижимость";</li> <li>Специалист в области страховых и банковских споров.</li></ul>'
            }, {
                id: 5,
                name: 'Рачилин Сергей Юрьевич',
                linkImg: "urist-orenburg-rachilin",
                merit: '<p>Управляющий партнер</p><ul><li>Выпускник Московоской государственной юридической академии им. О.Е. Кутафина;</li><li>Магистр в сфере материального права и судебной формы его применения в гражданском судопроизводстве. Член ассоциации юристов России;</li><li>В профессиональном активе более 1000 часов бесплатных консультаций для населения;</li><li>Автор научных работ по темам: "Работодательская правосубъектность юридического лица", "Механизм реализации защиты нарушенных прав в судебном порядке", "Понятие и признаки работодателей - юридических лиц", "Правовой механизм регулирования инвестирования в РФ";</li><li>Специалист в области досудебного урегулирования гражданско-правовых споров.</li></ul>'
            }, {
                id: 4,
                name: 'Мавлимбердина Алина Наилевна',
                linkImg: "urist-orenburg-alina",
                merit: '<p>Юрист</p><ul><li>Выпускница Московской государственной юридической академии им. О.Е. Кутафина;</li><li>Магистр в сфере материального права и судебной формы его применения в гражданском судопроизводстве;</li><li>Автор научных работ по темам: «Гражданско-правовое регулирование услуг в сфере общественного питания", «Понятие корпоративного спора, причины его возникновения», «Особенности рассмотрения корпоративных споров", "Проблемы правового регулирования венчурного инвестирования в международном частном праве", "Правовой механизм регулирования инвестирования в РФ";</li><li>Специалист в области договорного права.</li></ul>'
            }]
        }
    },
    methods: {
        path(name) {
            return require('~/assets/img/team/' + name + '.jpg')
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

.content-price {
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

h1 {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
    line-height: 28px;
}

.text {
    font-size: 16px;
    font-weight: 300;
    line-height: 28.8px;
}

.team-wrapper, .text-wrapper {
    padding: 0 5px;
}

.team-list {
    margin: 0; 
    padding: 0; 
}
.team-list-item {
    list-style-type: none; 
    display: flex;
    margin-bottom: 20px;
    background-color:white;
    border-radius: 2px; 
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    padding: 20px 5px;
    flex-direction: column;
}

.team-list-item-img {
    border-radius: 2px;
    width: 88vw;
    align-self: center;
}
.team-list-item-info {
    padding: 5px 10px;
}
.team-list-item-info-name {
    font-size: 24px;
    font-weight: 500;
    padding-top: 10px;
}
.team-list-item-info-merit {
    font-size: 16px;
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

    .team-list-item {
        flex-direction: row;
    }

    .team-list-item-img {
        width: auto;
        height: 320px;
        align-self: stretch;
    }

    .team-list-item-info {
        padding-top: 0;
        padding-left: 20px;
    }

    .team-list-item-info-name {
        padding-top: 0;
    }
}
</style>

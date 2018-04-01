<template>
  <div class="content content-background">
      <div class="container">
          <div class="content content-price">
                <div class="breadcrumbs-wrapper">
                    <AppBreadcrumbs :bread="breadcrumbs"></AppBreadcrumbs>
                </div>
            <!-- <AppBreadcrumbs ></AppBreadcrumbs> -->
                <div class="text-wrapper">
                    <h2>Стоимость наших услуг</h2>
                    <p class="text">
                      Стоимость юридических услуг в Оренбурге от Юридического бюро "ВАШ СОВЕТНИК" варьируется в зависимости от сложности вопроса, а также количества ресурсов, затраченных на его решение. Тем не менее, прайс на наши услуги действительно является наиболее доступным для всех наших клиентов. Поэтому мы гарантируем, что при обращении в наш правовой центр, Вам предоставят помощь по наиболее объективной и лояльной стоимости. Для получения более подробной информации обращайтесь к нашим специалистам либо приезжайте в офис. Мы ответим на все Ваши вопросы! Ориентировочно ознакомиться с ценовой политикой нашего правового центра Вы можете в представленной таблице. Юридическое бюро "ВАШ СОВЕТНИК"  - качественные юридические услуги по доступной цене.
                    </p>
                </div>
                <div class="table-wrapper">
                    <table class="table-price">
                        <thead>
                            <tr>
                                <th>№</th>        
                                <th>Услуга</th>
                                <th>Цена</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>1</td>        
                            <td>Юридическая консультация</td>
                            <td>бесплатно</td>
                        </tr>        
                        <tr>
                            <td>2</td>         
                            <td>Юридическая помощь адвоката по уголовным делам</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>3</td>         
                            <td>Помощь юриста в спорах о ДТП (автоюрист)</td>
                            <td>От 1000 ₽</td>
                        </tr>    
                        <tr>
                            <td>4</td> 
                            <td>Помощь юриста в административных спорах</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>5</td> 
                            <td>Помощь юриста в семейных делах (алименты, порядок определения общения с ребенком, наследство, раздел имущества)</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>6</td> 
                            <td>Помощь юриста в регистрации ИП</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>7</td> 
                            <td>Помощь юриста в регистрации ООО</td>
                            <td>От 3000 ₽</td>
                        </tr>    
                        <tr>
                            <td>8</td> 
                            <td>Помощь юриста в закрытие ИП</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>9</td> 
                            <td>Помощь юриста в закрытие ООО</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>10</td> 
                            <td>Представление интересов заемщика перед кредитором (Антиколлектор)</td>
                            <td>От 1000 ₽</td>
                        </tr>
                                                <tr>
                            <td>11</td>        
                            <td>Помощь юриста в возврате страховки по кредиту</td>
                            <td>От 1000 ₽</td>
                        </tr>        
                        <tr>
                            <td>12</td>         
                            <td>Осуществление взыскания долгов с юридических, физических лиц и госучереждений для юридических лиц</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>13</td>         
                            <td>Осуществление взыскания долгов с юридических, физических лиц и госучереждений для физических лиц</td>
                            <td>От 1000 ₽</td>
                        </tr>    
                        <tr>
                            <td>14</td> 
                            <td>Помощь юриста в земельных спорах</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>15</td> 
                            <td>Помощь юриста в оформлении недвижимости</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>16</td> 
                            <td>Помощь юриста в снижении кадастровой стоимости объекта</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>17</td> 
                            <td>Помощь юриста в приватизации жилых и нежилых помещений</td>
                            <td>От 3000 ₽</td>
                        </tr>    
                        <tr>
                            <td>18</td> 
                            <td>Помощь юриста в приватизации жилья</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>19</td> 
                            <td>Помощь юриста в узаконивание самовольных построек</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>20</td> 
                            <td>Помощь юриста в области защиты прав потребителей</td>
                            <td>От 500 ₽</td>
                        </tr>
                        <tr>
                            <td>21</td>        
                            <td>Представительство в суде</td>
                            <td>От 3000 ₽</td>
                        </tr>        
                        <tr>
                            <td>22</td>         
                            <td>Юридическое сопровождение сделок</td>
                            <td>От 3000 ₽</td>
                        </tr>
                        <tr>
                            <td>23</td>         
                            <td>Составление договоров и других официальных документов</td>
                            <td>От 1000 ₽</td>
                        </tr>    
                        <tr>
                            <td>24</td> 
                            <td>Подготовка исковых заявлений в суд</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>25</td> 
                            <td>Помощь юриста в спорах с пенсионным фондом</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>26</td> 
                            <td>Помощь юриста в решении трудовых споров</td>
                            <td>От 1000 ₽</td>
                        </tr>
                        <tr>
                            <td>27</td> 
                            <td>Юридическое обслуживание организаций</td>
                            <td>От 1000 ₽</td>
                        </tr> 
                        <tr>
                            <td>28</td> 
                            <td>Осуществление процедуры: банкротства юридических лиц</td>
                            <td>От 10000 ₽</td>
                        </tr>
                        <tr>
                            <td>29</td> 
                            <td>Осуществление процедуры: банкротство физических лиц</td>
                            <td>От 5000 ₽</td>
                        </tr>
                        <tr>
                            <td>30</td> 
                            <td>Помощь юриста в спорных жилищных вопросах</td>
                            <td>От 3000 ₽</td>
                        </tr>
                    </table>
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
                name: 'Цены',
                link: '/price',
                seen: false
            }]
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

h2 {
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

.text-wrapper, .table-wrapper {
    padding: 0 5px;
}

.table-price {
    border: 1px solid #c9d0d6;
    background-color: white;
    border-radius: 2px;
    width: 100%;
    padding: 0;
    margin: 0;
    border-collapse: collapse;
}

.table-price thead tr th, .table-price tr td {
/*    background-color: #E0E6EB;*/
    padding: 5px 10px;
}

.table-price thead tr th {
    text-align: left;
    background-color: white;
}

.table-price tr {
    background-color: #E3E7EB;
}

.table-price tr:nth-child(2n+1){
    background-color: white;
}

.table-price tr:hover {
    background-color: #FFB640;
    border-color: #FFB640;
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

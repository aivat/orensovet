<template>
    <div name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div v-if="!showResult" class="modal-actions">
                        <h2 class="modal-h2">Заказать звонок специалиста</h2>
                        <div class="modal-input">
                            <label>Как к вам обращаться:</label>
                            <input class="modal-input-input" type="text" size="20" v-model="client.name">
                        </div>
                        <div class="modal-input">
                            <label>Номер телефона:</label>
                            <input class="modal-input-input" type="tel" v-model="client.tel">
                        </div>
                        <div v-if="error">
                            Заполните все поля!
                        </div>
                        <div class="modal-wrap-action">
                            <button @click="$emit('close')">Закрыть</button>
                            <button v-on:click="postClient()">Отправить</button>
                        </div>
                    </div>
                    <div v-if="showResult" class="modal-result">
                        Заявка принята! Мы вам перезвоним!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  axios from 'axios'

export default {
    components: {
    },
    data () {
        return {
            client: {
                name: 'test',
                tel: ''
            },
            error: false,
            showResult: false
        }
    },
    computed: {
        isValid: function () {
            if ( this.client.name == '' || this.client.tel == '') {
                return false
            } else return true
        }
    },
    methods: {  
            postClient () {
                if ( this.isValid ) {
                    // axios.post('http://testik.ru/books/new', this.book)
                    // .then(response => {
                    //     console.log('данные =', response);
                    //     router.push({ path: '/' })
                    // })
                    // .catch(e => {
                    //   console.log(e.message)
                    // })  
                    this.error = false
                    this.showResult = true
                    this.setGetTimeOut()
                    // this.$emit('close')
                } else {
                    this.error = true
                }  
            },
            setGetTimeOut() {
                setTimeout(()=>{ 
                    this.showResult = false
                     this.$emit('close')
                }, 2000);
            },
    }
}
</script>
 
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    padding: 20px 25px;
}

.modal-h2 {
    margin-top: 0;
}
.modal-input {
    margin-bottom: 15px;
}

.modal-input-input {
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 4px;
    padding: 9px 14px;
    outline-color: rgba(9, 145, 236, 0.411);
    outline-width: 1px;
    /* outline-style: none; */
}
.modal-input>label {
    display: inline-block;
    width: 155px;
}

.modal-wrap-action {
    display: flex;
    justify-content: space-between;
}
</style>

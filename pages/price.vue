<template>
  <div class="content-wrap">
    <AppHeaderMenu/>
    <AppPrice/>
  </div>
</template>

<script>
import AppPrice from '~/components/AppPrice.vue'
import AppHeaderMenu from '~/components/AppHeaderMenu.vue'

export default {
    head () {
      return {
          title: 'Цены',
          meta: [
              { hid: 'description', name: 'description', content: 'Здесь вы можете ознакомиться с актуальными ценами на юридические услуги, а так же оценить весь спектр предоставляемых услуг.' }
          ]
      }     
    },
    components: {
      AppPrice,
      AppHeaderMenu
    }
}
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>

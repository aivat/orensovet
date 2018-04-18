<template>
  <div class="content-wrap">
    <AppHeaderMenu/>
    <AppContacts/>
  </div>
</template>

<script>
import AppContacts from '~/components/AppContacts.vue'
import AppHeaderMenu from '~/components/AppHeaderMenu.vue'


export default {
    head () {
      return {
          title: 'Контакты',
          meta: [
              { hid: 'description', name: 'description', content: 'Контактные данные и карточка организации юридической компании ОренСовет.' }
          ]
      }     
    },
    components: {
      AppContacts,
      AppHeaderMenu
    }
}
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>
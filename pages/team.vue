<template>
  <div class="content-wrap" id="teamStart">
    <AppHeaderMenu/>
    <AppTeam/>   
  </div>
</template>

<script>
  import AppTeam from '~/components/AppTeam.vue'
  import AppHeaderMenu from '~/components/AppHeaderMenu.vue'

  export default {
    components: {
      AppTeam,
      AppHeaderMenu
    },
    head: {
      title: 'Команда'
    },
    head () {
      return {
          title: 'Команда',
          meta: [
              { hid: 'description', name: 'description', content: 'Управляющие партнеры, ведущие специалисты и юрисконсульты, их регалии и достижения.' },
              { hid: 'keywords', name: 'keywords', content: 'резюме регалии юриста управляющие партнеры' },
              { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Команда | ОренСовет' },
              { hid: 'og:title', property: 'og:title', content: 'Команда | ОренСовет' },
              { hid: 'og:description', property: 'og:description', content: 'Управляющие партнеры, ведущие специалисты и юрисконсульты, их регалии и достижения.' }  
          ]
      }     
    },
    beforeUpdate: function () {
      if (window.innerWidth>500) {
        window.scrollTo(0,500)
      } else window.scrollTo(0,100)
    }
  }
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>

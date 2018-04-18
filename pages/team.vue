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
              { hid: 'description', name: 'description', content: 'Управляющие партнеры, ведущие специалисты и юрисконсульты, их регалии и достижения.' }
          ]
      }     
    },
    beforeUpdate: function () {
      if (window.innerWidth>500) {
        window.scrollTo(0,500)
      } else window.scrollTo(0,100)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>

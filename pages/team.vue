<template>
  <div class="content-wrap" id="teamStart">
    <AppTeam/>
  </div>
</template>

<script>
  import AppTeam from '~/components/AppTeam.vue'

  export default {
    components: {
      AppTeam
    },
    data () {
      return {
        online: true
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

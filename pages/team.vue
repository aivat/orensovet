<template>
  <div class="content-wrap">
      <AppContentReviews/>
    <AppContentServices/>
  </div>
</template>

<script>
  import AppContentServices from '~/components/AppContentServices.vue'
  import AppContentReviews from '~/components/AppContentReviews.vue'
  export default {
    components: {
      AppContentServices,
      AppContentReviews
    },
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
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

<template>
  <div id="app">
    <AppHeader/>
    <AppHeaderMenu/>
    <nuxt nuxt-child-key="none" role="main" />
    <AppFooter/>
    <AppUp/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppHeaderMenu from '~/components/AppHeaderMenu.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppUp from '~/components/AppUp.vue'

export default {
  components: {
    AppHeader,
    AppHeaderMenu,
    AppFooter,
    AppUp
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 14px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial;
}
</style>

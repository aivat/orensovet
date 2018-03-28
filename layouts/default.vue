<template>
  <div id="app">
    <AppHeader/>
    <AppHeaderMenu/>
    <nuxt nuxt-child-key="none" role="main" />
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppHeaderMenu from '~/components/AppHeaderMenu.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppHeaderMenu,
    AppFooter
  }
}
</script>

<style>

body {
  margin: 0;
  font-size: 14px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial;
  src: url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
}
</style>

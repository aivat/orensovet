<template>
  <div class="content-wrap">
    <AppPrice/>
  </div>
</template>

<script>
import AppPrice from '~/components/AppPrice.vue'

export default {
    head: {
      title: 'Цены'
    },
    components: {
      AppPrice
    }
}
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>

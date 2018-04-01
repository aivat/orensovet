<template>
  <div class="content-wrap">
    <AppContacts/>
  </div>
</template>

<script>
import AppContacts from '~/components/AppContacts.vue'



export default {
    components: {
      AppContacts
    }
}
</script>
 
<style scoped>
.content-wrap {
  display: block;
}
</style>
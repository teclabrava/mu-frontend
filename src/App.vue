<template>
  <div>
    <NavMain/>
    <router-view></router-view>
    <FooterMain/>
    <notifications group="notifications" />
  </div>
</template>
<script>
import FooterMain from '@/components/Footer.vue'

import NavMain from '@/components/Nav'

export default {
  name: 'HomePage',
  components: {
    NavMain,
    FooterMain
  }
}
</script>
<style lang="scss">
</style>

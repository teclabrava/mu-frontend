<template>
  <div class="page-login admin layout-full page-dark">
    <div class="page text-center pt-5">
      <div class="page-content p-5">
        <Login msg="Accede a la plataforma"/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/AdminLogin'
import '../assets/css/login.css'
export default {
  name: 'AdministracionView',
  components: {
    Login
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="page-login layout-full">
    <div class="page">
      <div class="container-fluid g-0">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="site-navbar-small text-center">
              <div class="p-4">
                <div class="col-12 col-xl-8 offset-xl-2 pt-5">
                  <h1 class="title text-primary">Contactenos</h1>
                  <p class="">Por favor déjanos tus comentarios</p>
                  <hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem est, porttitor et metus
                    vel, ultricies vulputate mauris. Suspendisse maximus, odio ut egestas rhoncus, turpis ex tincidunt
                    ante, ac dignissim eros nisi ac nunc. Aliquam neque massa, ultricies a ullamcorper vel, porttitor
                    vel nunc. Vestibulum eget augue in sem ultricies vestibulum sit amet eu purus. Proin erat nunc,
                    imperdiet eget augue at, vehicula hendrerit orci. Nam tristique justo neque. Fusce at odio eget
                    turpis sodales porta. Praesent quis lorem efficitur, accumsan metus eget, convallis metus. Quisque
                    pharetra in libero et consectetur. Integer sed dictum orci. Nam quis erat sed justo convallis
                    posuere id at quam. Praesent a enim vel dolor placerat semper. Vestibulum nec sodales ante.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div id="contact-form">
              <Contact msg="Accede a la plataforma"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '@/components/ContactForm.vue'
import '../assets/css/contactanos.css'

export default {
  name: 'ContactanosView',
  components: {
    Contact
  }
}
</script>

<style scoped>

</style>

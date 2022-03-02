<template>
  <div class="site-navbar-small">
    <div class="page-login layout-full">
      <div class="page">
        <div class="container-fluid g-0">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="site-navbar-small text-center">
                <div class="p-4">
                  <div class="col-12 col-xl-8 offset-xl-2 pt-5">
                    <h1 class="title text-primary">Contáctanos</h1>
                    <p class="">Por favor déjanos tus comentarios.</p>
                    <hr/>
                    <div class="my-5">
                      <p><strong>Mañu</strong> proviene de la palabra <em>Mañumen</em> que significa compensar o premiar,
                        del cual se reduce su texto para simplificar y dar una escencia amigable.</p>
                    </div>
                    <div class="my-5">
                      <p>Nuestro lema:</p>
                      <p><strong>¡Aquí te reconocemos!</strong></p>
                    </div>
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

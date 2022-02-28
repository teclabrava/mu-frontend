<template>
  <div class="page-login layout-full page-dark">
    <div class="page">
      <div class="page-content p-5">
        <Login msg="Accede a la plataforma"/>
      </div>
      <section id="instrucciones" class="p-5 mb-4">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="text-center display-5">¿En qué consiste el juego?</h1>
              <p class="text-center">Tu esfuerzo será recompensado con puntos si cumples tus objetivos. </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <p><strong>Metodología:</strong><br/>
                Cumplimiento de colocación de crédito</p>
              <hr/>
              <p class="text-secondary">Los puntos se cargarán sólo si alcanzas más del 100% de nivel de asignación de
                créditos a clientes.</p>
            </div>
            <div class="col-md-8">
              <div class="text-center row pt-3">
                <div class="stage col-lg-4 col-12 text-center">
                  <span class="d-block py-3 px-5">100% a 105%</span>
                  <span class="text-secondary display-4">1500</span>
                </div>
                <div class="stage col-lg-4 col-12 text-center">
                  <span class="d-block py-3 px-5">105.01% a 110%</span>
                  <span class="text-secondary display-4">2000</span>
                </div>
                <div class="stage col-lg-4 col-12 text-center">
                  <span class="d-block py-3 px-5">más de 110.01%</span>
                  <span class="text-secondary display-4">3500</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5">
            <div class="col-md-4">
              <p><strong>¿Cómo canjeo los puntos?</strong><br/>
                Plataforma con catálogo de premios</p>
              <hr/>
              <p class="text-primary">Acumula puntos y canjéalos por premios, ahora disponemos de una gran variedad de
                categorías.</p>
            </div>
            <div class="col-md-8">
              <div class="text-center row pt-3">
                <div class="col-lg-3 col-6 text-center">
                  <img src="../assets/img/restaurantes.jpg" class="img-thumbnail rounded-circle" alt="Restaurantes"/>
                  <span class="text-capitalize d-block text-primary">Restaurantes</span>
                </div>
                <div class="col-lg-3 col-6 text-center">
                  <img src="../assets/img/spa.jpg" class="img-thumbnail rounded-circle" alt="Spa"/>
                  <span class="text-capitalize d-block text-primary">Spa</span>
                </div>
                <div class="col-lg-3 col-6 text-center">
                  <img src="../assets/img/hoteleria.jpg" class="img-thumbnail rounded-circle" alt="Hoteleria"/>
                  <span class="text-capitalize d-block text-primary">Hoteleria</span>
                </div>
                <div class="col-lg-3 col-6 text-center">
                  <img src="../assets/img/entretenimiento.jpg" class="img-thumbnail rounded-circle"
                       alt="Entretenimiento"/>
                  <span class="text-capitalize d-block text-primary">Entretenimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import '../assets/css/login.css'

export default {
  name: 'HomePage',
  components: {
    Login
  }
}
</script>

<style scoped>

</style>

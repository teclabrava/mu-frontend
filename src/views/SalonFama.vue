<template>
  <div class="row g-0">
    <div class="col-4"><img src="../assets/img/home-scroll-section-bg.jpg" class="img-fluid" alt="Salón de la fama"/></div>
    <div class="col-8">
      <div class="site-navbar-small text-center">
        <div class="col-12 col-xl-8 offset-xl-2 pt-5">
          <h1 class="title text-primary">Salón de la fama</h1>
          <p class="">Nuestros mejores guerreros estan aquí</p>
          <form>
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Ingrese el término a buscar..."
                     aria-label="Término a buscar" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
          </form>
          <hr/>
          <table class="table table-responsive table-hover table-striped align-middle">
            <thead>
            <tr>
              <th>Ranking</th>
              <th style="width: 100px;">Avatar</th>
              <th>Nombres</th>
              <th>Estado</th>
              <th>Puntos Acumulados</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td><img src="../assets/img/avatar-01.png" class="w-50" alt="Juan Andres"/></td>
              <td>Juan Andres</td>
              <td>Activo</td>
              <td>64.254</td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src="../assets/img/avatar-02.png" class="w-50" alt="Juan Andres"/></td>
              <td>Juan Andres</td>
              <td>Activo</td>
              <td>64.254</td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src="../assets/img/avatar-03.png" class="w-50" alt="Juan Andres"/></td>
              <td>Juan Andres</td>
              <td>Activo</td>
              <td>64.254</td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src="../assets/img/avatar-04.png" class="w-50" alt="Juan Andres"/></td>
              <td>Juan Andres</td>
              <td>Activo</td>
              <td>64.254</td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src="../assets/img/avatar-02.png" class="w-50" alt="Juan Andres"/></td>
              <td>Juan Andres</td>
              <td>Activo</td>
              <td>64.254</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalonFamaView'
}
</script>

<style scoped>

</style>

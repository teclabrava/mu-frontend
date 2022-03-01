<template>
  <nav class="navbar  navbar-dark fixed-top navbar-expand-lg navbar-manu">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <span class="icon-manu"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/acerca-de" class="nav-link">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/salon-fama" class="nav-link">Salon de la Fama</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/administracion" class="nav-link">Administración</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactanos" class="nav-link">Contáctanos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMain'
}
</script>

<style scoped>

</style>

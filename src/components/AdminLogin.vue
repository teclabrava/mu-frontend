<template>
  <div class="text-center">
    <img src="../assets/img/user-ico.svg" alt="User" class="w-25"/>
    <p class="p-2 rounded-2 fw-bold">{{ msg }}</p>
    <form method="post" action="#" class="form-floating">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Email">
        <label class="floatingInput" for="inputEmail">Correo electrónico</label>
      </div>
      <div class="form-floating mb-3">
        <label class="floatingInput" for="inputPassword">Contraseña</label>
        <input type="password" class="form-control" id="inputPassword" name="password"
               placeholder="Password">
      </div>
      <div class="form-floating mb-3 clearfix">
        <div class="checkbox-custom checkbox-inline checkbox-primary float-start">
          <input type="checkbox" id="inputCheckbox" name="remember">
          <label for="inputCheckbox">Recuerdame</label>
        </div>
        <a class=" float-end" href="#">¿Olvidó la contraseña?</a>
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-outline-light">Sign in</button>
      </div>
    </form>
    <div class="slogan p-5">
      <img src="../assets/img/manu-logo.svg" alt="Manu" class="img-fluid" title="Manu"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLoginForm',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>

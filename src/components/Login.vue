<template>
  <div class="text-center">
    <p class="bg-primary p-2 fw-bold">{{ msg }}</p>
    <div class="mx-5 my-0">
      <form v-on:submit.prevent="login" method="post" action="#" class="form-floating">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" name="email" v-model="email">
          <label class="floatingInput" for="email">Correo electrónico</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" name="password" v-model="password">
          <label class="floatingInput" for="password">Contraseña</label>
        </div>
        <div class="form-floating mb-3 clearfix">
          <div class="form-check checkbox-primary float-start">
            <input class="form-check-input" type="checkbox" value="" id="recuerdame">
            <label class="form-check-label" for="recuerdame">
              Recuerdame
            </label>
          </div>
          <a class=" float-end" href="#">¿Olvidó la contraseña?</a>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-outline-light">Iniciar sesión</button>
        </div>
      </form>
      <div class="text">
        <p>En esta plataforma podrás ganar/acumular puntos por la cartera asignada, luego canjeas tus puntos por las
          experiencias de tu interés</p>
      </div>
      <div class="blink">¡En Creditu siempre te reconocemos!</div>
      <div class="slogan p-5">
        <img src="../assets/img/aqui-te-reconocemos.svg" alt="Aquí te reconocemos" class="img-fluid"
             title="Aquí te reconocemos"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  data: function () {
    return {
      email: '',
      password: '',
      error: false,
      error_msg: ''
    }
  }
}
</script>

<style scoped>

</style>

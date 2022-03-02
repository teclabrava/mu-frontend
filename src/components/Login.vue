<template>
  <div class="text-center">
    <p class="bg-primary p-2 fw-bold">Bienvenidos a Mañu</p>
    <div class="slogan p-5">
      <img src="../assets/img/aqui-te-reconocemos.svg" alt="Aquí te reconocemos" class="img-fluid"
           title="Aquí te reconocemos"/>
    </div>
    <div class="mx-5 my-0 pb-5">
      <div class="text">
        <p>En esta plataforma podrás ganar/acumular puntos por la cartera asignada, luego canjeas tus puntos por las
          experiencias de tu interés</p>
      </div>
      <div class="blink">¡En Creditu siempre te reconocemos!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
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

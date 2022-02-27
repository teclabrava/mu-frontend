<template>
  <div class="text-center">
    <form method="post" action="#" class="form-floating">
      <div class="form-floating mb-5">
        <input type="text" class="form-control" id="nombres" name="nombres">
        <label class="floatingInput" for="nombres">Nombres</label>
      </div>
      <div class="form-floating mb-5">
        <input type="text" class="form-control" id="apellidos" name="apellidos">
        <label class="floatingInput" for="apellidos">Apellidos</label>
      </div>
      <div class="form-floating mb-5">
        <input type="email" class="form-control" id="email" name="email">
        <label class="floatingInput" for="email">Correo electrónico</label>
      </div>
      <div class="form-floating mb-5">
        <select class="form-select" id="atencion" aria-label="Seleccion de opción de soporte">
          <option selected>Seleccione una opción</option>
          <option value="1">Sporte</option>
          <option value="2">Servicios</option>
          <option value="3">Información</option>
        </select>
        <label for="atencion">Opciones de atención</label>
      </div>
      <div class="form-floating mb-5">
        <textarea class="form-control" placeholder="Leave a comment here" id="comentarios" style="height: 100px"></textarea>
        <label for="comentarios">Comentarios</label>
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-outline-light">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>

</style>

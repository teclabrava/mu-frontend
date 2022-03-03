<template>
  <div class="page-contact">
    <div class="summary">
      <div class="summary-icon">
        <font-awesome-icon :icon="['fa', 'location-pin']" />
      </div>
      <div class="summary-info">
        <h5 class="summary-title">Dirección</h5>
        <p class="summary-description">De los Laureles N47-149 y de los Mortiños</p>
      </div>
    </div>
    <hr>
    <div class="summary">
      <div class="summary-icon">
        <span class="ion-ios-telephone-outline x4"></span>
      </div>
      <div class="summary-info">
        <h5 class="summary-title">Teléfono</h5>
        <p class="summary-description u-color-grey">
          <a href="tel:+593996445188">+593 996 445 188</a>
        </p>
      </div>
    </div>
    <hr>
    <div class="summary">
      <div class="summary-icon">
        <span class="ion-ios-email-outline x4"></span>
      </div>
      <div class="summary-info">
        <h5 class="summary-title">Correo Electrónico</h5>
        <p class="summary-description u-color-grey">
          <a href="mailto:info@teclabrava.com">info@teclabrava.com</a></p>
      </div>
    </div>
    <hr>
    <h6 class="media-title">Social Media</h6>
    <div class="">
      <ul class="social">
        <li class="social-item">
          <a class="social-a icon-facebook" href="https://www.facebook.com" target="_blank">
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-a icon-twitter" href="https://www.twitter.com" target="_blank">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-a icon-linkedin" href="http://www.linkedin.com" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li class="social-item">
          <a class="social-a icon-google" href="https://www.google.com" target="_blank">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>

</style>

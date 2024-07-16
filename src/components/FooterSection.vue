<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import {faInstagram, faTelegram, faTelegramPlane, faYoutube} from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class=" mt-5 ">

    <footer class="bg-light text-center text-white">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Contact -->
          <a
              class="btn btn-primary btn-floating m-1"
              href="tel:+998942034700"
          >
            <FontAwesomeIcon :icon = 'faContactBook'/>
          </a>
          <!-- Youtube -->
          <a
              class="btn btn-primary btn-floating m-1"
              href="https://www.youtube.com/@SangardakSanatoriy"
          >
            <FontAwesomeIcon :icon = 'faYoutube'/>
          </a>

          <!-- Telegram -->
          <a
              class="btn btn-primary btn-floating m-1"
              href="https://t.me/surxondaryo_sangardak_sanatoriy"
          >
            <FontAwesomeIcon :icon = 'faTelegramPlane'/>
          </a>
          <a
              class="btn btn-primary btn-floating m-1"
              href="https://t.me/SangardakSanatoriysi"
          >
            <FontAwesomeIcon :icon = 'faTelegram'/>
          </a>

          

          <!-- Instagram -->
          <a
              class="btn btn-primary btn-floating m-1"
              href="https://www.instagram.com/sangardak_sanatoriy_official"
          >
            <FontAwesomeIcon :icon = 'faInstagram'/>
          </a>


        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->
      <div class="text-center py-2 text-black" style="background-color: rgba(0, 0, 0, 0.2);">
        <img class="logo_img" src="@/assets/logo.png" alt="salom">
      </div>
      <!-- Copyright -->
      <div class="text-center pt-2 text-black" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2024 Sangardak Sanatoriy - Barcha huquqlar himoyalangan
      </div>

      <div class="text-center pb-5 pt-3 text-black" style="background-color: rgba(0, 0, 0, 0.2);">
        Tuzuvchi:
        <a class="text-black " href="https://mssg.me/oqiljonnarzulloyev">Oqiljon Narzulloyev</a>
      </div>

      <!-- Copyright -->
    </footer>

  </div>
  <!-- End of .container -->
</template>

<style scoped>
.logo_img{
}
.btn {
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
}
.btn::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 10px;
  background-color: #002BFF;
}
/* glow */
.btn::before {
  content: "";
  background: linear-gradient(
      45deg,
      #FF0000, #FF7300, #FFFB00, #48FF00,
      #00FFD5, #002BFF, #FF00C8, #FF0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -2;
  width: calc(100% + 4px);
  height:  calc(100% + 4px);
  filter: blur(8px);
  animation: glowing 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 0;
}

@keyframes glowing {
  0% {background-position: 0 0;}
  50% {background-position: 400% 0;}
  100% {background-position: 0 0;}
}

/* hover */
.btn:hover::before {
  opacity: 1;
}
</style>
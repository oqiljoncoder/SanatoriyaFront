<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faGoogle, faInstagram, faTelegram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";

import {computed} from "vue";
import {useFetchLeader} from "@/stores/getLeaders.js";
import {useEnv} from "@/stores/env.js";

const leaders = computed(() => useFetchLeader().state.leaders)
useFetchLeader().leaderGet()
const {url: baseURL} = useEnv()
</script>

<template>
  <div class="container-md text-center" >
    <div class="row cards__all mt-5" >
      <div v-for="leader in leaders" :key="leader.id" class="position-relative col-sm-12  col-lg-6 m-h-100 ">

        <div class="card m-2">
          <img  :src="baseURL+leader.image.contentUrl" class="card-img-top" alt="...">

          <div class="card-body text-center">
            <h5 class="card-title">{{leader.name}}</h5>
            <h6 class="card-title_one">{{leader.description}}</h6>
            <p class="card-text">{{ leader.text}}</p>
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
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<style scoped>
/* Content style */
.card img {
  width: 13rem;
  border-radius: 50%;
  padding: 0.3rem;
  margin: 1rem auto auto;
  height: 13rem;
  object-fit: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  background-color: rgba(50, 50, 93, 0.15);
  transform: scale(1.01);
}


@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}


.card {
  border: none;
  outline: none;
  color: #000000;
  position: relative;
  z-index: 0;
  border-radius: 12px;
}

.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  left: 0;
  top: 0;
  border-radius: 10px;
}

/* glow */
.card::before {
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
  z-index: -1;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  filter: blur(8px);
  animation: glowing 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 0;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

/* hover */
.card:hover::before {
  opacity: 1;

}
.card-title{
  font-size: 2rem;
}
.card-title_one{
  font-size: 1.5rem;
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
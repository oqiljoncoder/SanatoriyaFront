<script setup>
import {useFetchNews} from "@/stores/getNews.js";
import {computed} from "vue";
import {useEnv} from "@/stores/env.js";

const news = computed(() => useFetchNews().state.news)


useFetchNews().newsGet()


const {url: baseURL} = useEnv()
</script>

<template>
  <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">

    <div v-if="news" class="carousel-inner ">
      <div v-for="threeNews in news?.slice()?.reverse()" :key="threeNews.id"  class="carousel-item active c-item" data-bs-interval="2000" >
        <img  :src="baseURL+threeNews.image.contentUrl" class="d-block w-100 c-img" alt="...">
        <div class="carousel-caption">
          <h5  >{{ threeNews.title }}</h5>
          <p >
            {{threeNews.description}}
          </p>
          <router-link :to="`/new-text/` + threeNews.id" class="btn btn-primary">Batafsil</router-link>

        </div>
      </div>

    </div>
    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon c-btn" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon c-btn" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <span v-if="!news" class="loader d-flex position-absolute z-2 lef"></span>

</template>

<style scoped>

/* HTML: <div class="loader"></div> */
.loader {
  --s: 40px;
  height: calc(var(--s)*0.9);
  width: calc(var(--s)*5);
  --v1:transparent,#000 0.5deg 108deg,#0000 109deg;
  --v2:transparent,#000 0.5deg  36deg,#0000  37deg;
  -webkit-mask:
      conic-gradient(from 54deg  at calc(var(--s)*0.68) calc(var(--s)*0.57),var(--v1)),
      conic-gradient(from 90deg  at calc(var(--s)*0.02) calc(var(--s)*0.35),var(--v2)),
      conic-gradient(from 126deg at calc(var(--s)*0.5)  calc(var(--s)*0.7) ,var(--v1)),
      conic-gradient(from 162deg at calc(var(--s)*0.5)  0                  ,var(--v2));
  -webkit-mask-size: var(--s) var(--s);
  -webkit-mask-composite: xor,destination-over;
  mask-composite: exclude,add;
  -webkit-mask-repeat:repeat-x;
  background:linear-gradient(#ffb940 0 0) left/0% 100% #ddd no-repeat;
  animation: l20 0.5s infinite linear;
  top: 11%;
  left: 45%;
}
@keyframes l20 {
  90%,100% {background-size:100% 100%}
}
.c-item {
  height: 640px;
  
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  
}
h5{
  font-size: 3rem;
  font-weight: 600;
  font-family: "Arial Black";
}
p{
  font-size: 1.5rem;
}

@media only screen and (max-width: 600px) {
  p{
    font-size: 1rem;
  }
  h5{
    font-size: 2rem;
  }
}
@keyframes moveImage {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(50px); /* Rasm qancha masofaga harakatlanishini aniqlang */
    }
    100%{
      transform: translateX(-50px);
    }
}
.btn {
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  font-size: 1.5rem;
  padding: 5px 20px;
}
.btn::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #002BFF;
  left: 0;
  top: 0;
  border-radius: 10px;
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
  z-index: -1;
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
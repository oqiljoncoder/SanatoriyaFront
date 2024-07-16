<script setup>
import { useFetchNews } from "@/stores/getNews";
import { computed, ref } from "vue";
import {useEnv} from "@/stores/env.js";


const news = computed(() => useFetchNews().state.news)
const totalItems = computed(() => useFetchNews().state.totalItems)
let currentPage = ref(1)
useFetchNews().allNewsGet();

function changePage(){
  useFetchNews().allNewsGet(currentPage.value);
}
const {url: baseURL} = useEnv()
</script>

<template>
  <div class="container-md text-center" >
    <div v-if="news.length" class="row cards__all mt-5">
      <div v-for="allNew in news" :key="allNew.id" class="position-relative col-sm-6  col-lg-3 m-h-100 ">

        <div class="card m-2">
          
          <img  :src="baseURL+allNew.image.contentUrl" class="card-img-top" alt="...">

          <div class="card-body text-center">
            <h5 class="card-title">{{allNew.title}}</h5>
      
            <p class="card-text">{{ allNew.description }}</p>

            <router-link :to="`/new-text/` + allNew.id" class="btn btn-primary">Batafsil</router-link>

          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="8"
      :max-pages-shown="3"
      v-model="currentPage"
      @click="changePage()"
    />
  </div>
  <span v-if="!news.length" class="loader d-flex position-absolute z-2 lef"></span>
</template>

<style scoped>
.pagination-container {
  list-style: none;
  font-family: monospace;
    display: flex;
    justify-content: center;
    column-gap: 10px;
  }


/* Content style */
.card img {
  width: 94%;
  height: 15rem;
  border-radius: 10px;
  padding: 0.3rem;
  margin: auto;
  margin-top: 0.5rem;
  object-fit: cover;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  background-color: rgba(50, 50, 93, 0.15);

}

/* button */
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
.btn:hover::before {
  opacity: 1;
}

.card {
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  color: #FFFFFF;
}

.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 62, 80, 0.85);
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

</style>
<script setup>
import { useFetchNews } from "@/stores/getNews";
import { computed } from "vue";
import { useRoute } from "vue-router";
import {useEnv} from "@/stores/env.js";

const rout = useRoute()
const news = computed(() => useFetchNews().state.allById)


useFetchNews().allNewsGetById(rout.params.id)

const {url: baseURL} = useEnv()
</script>

<template>
  <div class="container">
    <div v-if="news !== undefined" >
      <img :src="baseURL+news.image.contentUrl" alt="">
      <h2 class="text-center news_title">{{news.title}}</h2>
      <h4 class="text-center ">{{ news.description }}</h4>
      <p class="new_text mt-4"><span class="mx-4"></span>{{ news.text }}</p>
    </div>
  </div>
</template>

<style scoped>
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border-radius: 2rem;
  }
  .new_text{
    font-size: 1.2rem;
  }
  .news_title{
    color: #2c3e50;
    font-size: 3rem;
  }
</style>
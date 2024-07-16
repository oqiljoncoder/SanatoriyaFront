<script setup>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faConnectdevelop} from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="bg-body-secondary py-4 my-5" id="servers">
    <div class="container mt-md-5 mt-3 ">
      <h2 class="text-center">Nega aynan biz</h2>
      <p class="text-center  servers-title ">
        Siz O'zbekistonda sanatoriya qidiryapsizmi? Lekin takliflarning
        xilma-xilligidan adashasizmi? Sanatoriyamizni afzalliklarini
        baholang, shunda siz eng yaxshisini topganingizni tushunasiz.
      </p>

      <div class="servers row">
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/book-icon.png" alt="">
            <p class="text-center">Kutubxona</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/wife-icon.png" alt="">
            <p class="text-center">Internet</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/restoran-icon.png" alt="">
            <p class="text-center">Oshxona</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/basseyn-icon.png" alt="">
            <p class="text-center">Basseyn</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/fitnes-icon.png" alt="">
            <p class="text-center">Fitnes</p>
          </div>
        </div>

        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/billiard-icon.png" alt="">
            <p class="text-center">Bilyard</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/table-tennis-icon.png" alt="">
            <p class="text-center">Stol-tennisi</p>
          </div>
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="servers-icon text-center">
            <img src="@/assets/fizioterapiya-icon.png" alt="">
            <p class="text-center">Fizioterapiya</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .servers-title{
    padding: 1rem 12rem;
  }
  @media only screen and (max-width: 1020px) {
    .servers-title{
      padding: 1rem 3rem;
    }
  }
  .servers-icon img{
    width: 10rem;
    box-sizing: border-box;
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 20%;
    transition: 0.5s;
  }
  .servers-icon{
    cursor: pointer;
  }
  .servers-icon p{
    margin-top: 1rem;
    font-size: 1.3rem;
  }
  .servers-icon img:hover{
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  @media only screen and (max-width: 920px) {
    .servers-icon img{
      width: 9rem;
    }
  }
  @media only screen and (max-width: 520px) {
    .servers-icon img{
      width: 8rem;
    }
  }
</style>
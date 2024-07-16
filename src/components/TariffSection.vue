<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faContactBook, faMoneyBill1, faSquareCheck} from "@fortawesome/free-regular-svg-icons";
import {useFetchTariffs} from "@/stores/getTariffs.js";
import {computed} from "vue";

const tariff = computed(() => useFetchTariffs().state.tariff)

useFetchTariffs().tariffsGet()


</script>

<template>
  <div class="container mt-5" id="tariff">
    <div class="row d-flex justify-content-around text-center">

      <div class="row p-0" >

        <div  class="col-lg-4 mt-3">
          <div class="card col-12 m-md-2">
            <img src="@/assets/Basic.jpg" class="card-img-top card-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">Basic</h5>
              <div class="card-tariff">
                <p class="card-text d-inline">1 xonali</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff ">
                <p class="card-text d-inline">2 kishilik</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p class="card-text d-inline">2-bino</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p  class="card-text d-inline">{{tariff.basicPrice}} so'm</p>
                <FontAwesomeIcon :icon="faMoneyBill1" class="icon-card "/>
              </div>
              <a href="tel:+998554527788" class="btn btn-primary">
                Ko'proq
                <FontAwesomeIcon :icon="faContactBook"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="card col-12 m-md-2">
            <img src="@/assets/Standart.jpg" class="card-img-top card-img" alt="...">
            <div class="card-body ">
              <h5 class="card-title">Standart</h5>
              <div class="card-tariff">
                <p class="card-text d-inline">1 xonali</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff ">
                <p class="card-text d-inline">2 kishilik</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p class="card-text d-inline">1-bino</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p class="card-text d-inline">{{tariff.standartPrice}} so'm</p>
                <FontAwesomeIcon :icon="faMoneyBill1" class="icon-card "/>
              </div>
              <a href="tel:+998554527788" class="btn btn-primary">
                Ko'proq
                <FontAwesomeIcon :icon="faContactBook"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-3">
          <div class="card col-12 m-md-2">
            <img src="@/assets/Premium.jpg" class="card-img-top card-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">Premium</h5>
              <div class="card-tariff">
                <p class="card-text d-inline">2 xonali</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff ">
                <p class="card-text d-inline">2 kishilik</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p class="card-text d-inline">1-bino</p>
                <FontAwesomeIcon :icon="faSquareCheck" class="icon-card "/>
              </div>
              <div class="card-tariff">
                <p class="card-text d-inline">{{tariff.premiumPrice}} so'm</p>
                <FontAwesomeIcon :icon="faMoneyBill1" class="icon-card "/>
              </div>
              <a href="tel:+998554527788" class="btn btn-primary">
                Ko'proq
                <FontAwesomeIcon :icon="faContactBook"/>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.card-img {
  height: 20rem;
  object-fit: cover;
  filter: brightness(0.9);
  padding: 0.5rem;
  border-radius: 20px;
}
h5{
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 600;
}

.card{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s;
}

.card:hover{
  background-color: rgba(50, 50, 93, 0.15);
  transform: scale(1.02);
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
.card:hover::before {
  opacity: 1;
}

.card-text{
  font-size: 1.5rem;
  margin-left: 2rem;

}
.icon-card{
  width: 1.5rem;
  height: 1.5rem;
  color: green;
  margin-right: 2rem;
  margin-top: 10px;
}
.card-tariff{
  display: flex;
  justify-content: space-between;
}
.card-imgs img{
  width: 13rem;
  margin-top: 1rem;
}

</style>
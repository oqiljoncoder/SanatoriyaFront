<script setup>

</script>

<template>
  <section class="gallery min-vh-100">
    <div class="container-lg">
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col">
          <img src="@/assets/1.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/7.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/3.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/4.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/5.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img  src="@/assets/6.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/2.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/8.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img  src="@/assets/9.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/10.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img src="@/assets/11.jpg" class="gallery-item" alt="gallery">
        </div>
        <div class="col">
          <img  src="@/assets/12.jpg" class="gallery-item" alt="gallery">
        </div>

        <div class="pt-5 px-3 ">
          <h3 class=" mt-5 ">SANGARDAK SANATORIYSI</h3>
          <p>
            Surxondaryo viloyati Sariosiyo tumanida tog'larga bo'ylashgan zamonaviy osmono'par "Sangardak sanatoriysi"
            dam olish va davolanishga mo'ljallangan bo'lib, Sanatoriymiz yuqori nafas yo'llari kasalliklari, yurak-qon
            tomir tizimi, markaziy va periferik asab tizimlariz, teri kasalliklari va jarohatdan keyingi
            oqibatlarni bartaraf etish, ekzogen-konstruktsion semirish kabi kasalliklar bilan og'rigan
            bemorlarni davolashga iqtisoslashtirilgan.
          </p>
        </div>
        <div class="pt-5 px-3">
          <h3 class=" mt-5 ">XIZMAT TURLARI</h3>
          <p>
            -Yuqori nafas yo'llari kasalliklarini davolash; <br>
            -Kardiologik kasalliklarini davolash; <br>
            -Tayanch harakat tizimi kasalliklarini davolash; <br>
            -Genikologik kasalliklarini davolash; <br>
            Shuningdek, sanatoriyamiz dam oluvchilar sog'ligini tiklashlari
            uchun eng zamonaviy uskunalar o'rnatilgan. <br>
            Nevropotolog, Kardiolog, Terapevt va Ginekolog xonalari zamonaviy
            tibbiy aparatlar ishlab turibti.
          </p>
        </div>
        <div class="pt-5 px-3">
          <h3 class=" mt-5 ">SANATORIYDAGI QULAYLIKLAR</h3>
          <p>
            -Shinam oshxona va yotoq joylari; <br>
            -200 o'ringa mo'ljallangan majlislar zali; <br>
            -Sport bilan shug'ullanish uchun sharoit; <br>
            -3500 tadan kitobga ega kutubxona; <br>
            Bizning sanatoriymiz 7 qavatdan iborat bo'lib 200 o'ringa mo'ljallangan 100
            ta xonadan iborat, har xona televizor, isitish sovitish tizimi, muzlatgich va
            Wi-fi bilan jihozlangan.
          </p>
        </div>

      </div>
    </div>
  </section>


</template>

<style scoped>
img{
  width: 33%;
  height: 22rem;
  object-fit: cover;
  transition: 0.5s;
}
img:hover{
  transform: scale(1.5);
}
.gallery{
  background-color: #dbddf1;
  padding: 80px 0;
}
.gallery img{
  background-color: #ffffff;
  padding: 15px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  cursor: pointer;
}
#gallery-modal .modal-img{
  width: 100%;
}
</style>
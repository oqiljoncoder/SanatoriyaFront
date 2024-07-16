<script setup>
import {useFetchNews} from "@/stores/getNews";
import {computed, reactive, ref} from "vue";
import {useFetchLeader} from "@/stores/getLeaders.js";
import {useDeleteLeader} from "@/stores/deleteLeader.js";
import {useDeleteNews} from "@/stores/deleteNews.js";
import {useAddNews} from "@/stores/addPost.js";
import {useAddFile} from "@/stores/addFile.js";
import {useAddLeader} from "@/stores/addLeader.js";
import {useAddTariffs} from "@/stores/addTariffs.js";
import "vue3-toastify/dist/index.css"
import {toast} from "vue3-toastify";
import {useEnv} from "@/stores/env.js";

const news = computed(() => useFetchNews().state.news)
const totalItems = computed(() => useFetchNews().state.totalItems)
let currentPage = ref(1)
useFetchNews().allNewsGet();

function changePage() {
  useFetchNews().allNewsGet(currentPage.value);
}

const leaders = computed(() => useFetchLeader().state.leaders)
useFetchLeader().leaderGet()

// Deleted Leader logika

let currentId = ref(1);
let typeName = ref('')

function setCurrentId(id, name) {
  currentId.value = id;
  typeName.value = name;
}

function reversLeader() {
  useDeleteLeader().leaderDelete(currentId.value)
      .then(() => {
        useFetchLeader().leaderGet();
        toast.success("Rahbar ma'lumoti o'chirildi", {
          autoClose: 2000
        })
      })
}

// Deleted News logika
function reversNews() {
  useDeleteNews().newsDelete(currentId.value)
      .then(() => {
        useFetchNews().allNewsGet();
        toast.success("Siz tanlagan post o'chirildi", {
          autoClose: 2000
        })
      })
}

// Add post
const addPost = reactive({
  image: '',
  title: '',
  description: '',
  text: ''
})


const file = ref(null)
const handleFileUpload = (event) => {
  file.value = event.target.files[0]

  const formData = new FormData()
  formData.append('file', file.value)

  useAddFile().addFile(formData)
      .then(() => {
        addPost.image = useAddFile().state.id
      })
}

function sendPost() {
  useAddNews().addNews(addPost)
  if (addPost.image && addPost.title && addPost.description && addPost.text){
    toast.success("Post muvaffaqiyatli qo'shildi", {
      autoClose: 2000,
    });
    useFetchNews().allNewsGet()
  } else {
    toast.error("Postni qo'shishda xatolik bor", {
      autoClose: 2000
    })
  }

}

// Add leader

const addLeader = reactive({
  image: '',
  name: '',
  description: '',
  text: ''
})


const fileLeader = ref(null)
const handleFileUploadLeader = (event) => {
  fileLeader.value = event.target.files[0]

  const formData = new FormData()
  formData.append('file', fileLeader.value)

  useAddFile().addFile(formData)
      .then(() => {
        addLeader.image = useAddFile().state.id
      })
}


function sendLeader() {
  useAddLeader().addLeader(addLeader);
  if (addLeader.image && addLeader.name && addLeader.description && addLeader.text){
    toast.success("Rahbar muvaffaqiyatli qo'shildi", {
      autoClose: 2000,
    });
    useFetchLeader().leaderGet()
  } else {
    toast.error("Rahbarni qo'shishda xatolik bor", {
      autoClose: 2000
    })
  }

}

// Add tariffs
const addTariff = reactive({
  basicPrice: null,
  standartPrice: null,
  premiumPrice: null
})


function sendTariffs() {
  useAddTariffs().addTariffs(addTariff)
  if (addTariff.basicPrice & addTariff.standartPrice & addTariff.premiumPrice){
    toast.success("Tariflar muvaffaqiyatli qo'shildi", {
      autoClose: 2000,
    });
  } else {
    toast.error("Tariflarni qo'shishda xatolik bor", {
      autoClose: 2000
    })
  }
}

const {url: baseURL} = useEnv()
</script>

<template>
  <div class="container">

    <div id="accordionFlushExample" class="accordion accordion-flush mt-4">

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button aria-controls="flush-collapseTwo" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseTwo" data-bs-toggle="collapse" type="button">
            Yangi post qo'shish
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="mb-3">
              <label class="form-label" for="filePost">Rasm qo'shish uchun ustiga bosing!</label>
              <input @change="handleFileUpload" id="filePost" class="form-control"
                     placeholder="Rasm qo'shish uchun ustiga bosing!" type="file">
            </div>
            <div class="mb-3">
              <label class="form-label" for="titlePost">Post sarlavhasi</label>
              <input id="titlePost" v-model="addPost.title" class="form-control" placeholder="Post sarlavhasi..."
                     type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="descriptionPost">Post haqida qisqacha</label>
              <input id="descriptionPost" v-model="addPost.description" class="form-control"
                     placeholder="Post haqida qisqacha..."
                     type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="textPost">Postni yozing</label>
              <textarea id="textPost" v-model="addPost.text" class="form-control" placeholder="Postni yozing..."
                        rows="3"></textarea>
            </div>
            <button class="btn w-100" @click="sendPost()">Qo'shish</button>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button aria-controls="flush-collapseOne" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseOne" data-bs-toggle="collapse" type="button">
            Rahbar qo'shish
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="accordion-body">
              <div class="mb-3">
                <label class="form-label" for="filePost">Rasm qo'shish uchun ustiga bosing!</label>
                <input @change="handleFileUploadLeader" id="filePost" class="form-control"
                       placeholder="Rasm qo'shish uchun ustiga bosing!" type="file">
              </div>
              <div class="mb-3">
                <label class="form-label" for="titlePost">Ism Familya Sharifi</label>
                <input v-model="addLeader.name" id="titlePost" class="form-control" placeholder="Ism Familya Sharifi"
                       type="text">
              </div>
              <div class="mb-3">
                <label class="form-label" for="descriptionPost">Vazifasi</label>
                <input v-model="addLeader.description" id="descriptionPost" class="form-control"
                       placeholder="Vazifasi..." type="text">
              </div>
              <div class="mb-3">
                <label class="form-label" for="textPost">To'liq ma'lumot</label>
                <textarea v-model="addLeader.text" id="textPost" class="form-control" placeholder="To'liq ma'lumot..."
                          rows="3"></textarea>
              </div>
              <button class="btn w-100" type="submit" @click="sendLeader()">Qo'shish</button>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button aria-controls="flush-collapseThree" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseThree" data-bs-toggle="collapse" type="button">
            Tarif narxlarini yangilash
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Basic</th>
              <th scope="col">Standart</th>
              <th scope="col">Premium</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <input v-model="addTariff.basicPrice" placeholder="480000" type="number">
              </td>
              <td>
                <input v-model="addTariff.standartPrice" placeholder="580000" type="number">
              </td>
              <td>
                <input v-model="addTariff.premiumPrice" placeholder="660000" type="number">
              </td>
            </tr>
            </tbody>
          </table>
          <button class="btn w-100" type="submit" @click="sendTariffs()">Qo'shish</button>
        </div>
      </div>

    </div>

    <!-- Postlar  -->

    <div class="container-md text-center mt-5">
      <h1 class="text-center">Postlar ro'yxati</h1>
      <div v-if="news.length" class="row cards__all mt-5">
        <div v-for="allNew in news" :key="allNew.id" class="position-relative col-sm-6  col-lg-3 m-h-100 ">

          <div class="card m-2">

            <img :src="baseURL+allNew.image.contentUrl" alt="..." class="card-img-top">

            <div class="card-body text-center">
              <h5 class="card-title">{{ allNew.title }}</h5>

              <p class="card-text">{{ allNew.description }}</p>

              <router-link :to="`/new-text/` + allNew.id" class="btn btn-primary  w-100 ">Batafsil</router-link>
              <button class="btnDelet mt-2  w-100 py-2" data-bs-target="#exampleModal" data-bs-toggle="modal"
                      @click="setCurrentId(allNew.id, 'news')">O'chirish
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <vue-awesome-paginate
          v-model="currentPage"
          :items-per-page="8"
          :max-pages-shown="3"
          :total-items="totalItems"
          @click="changePage()"
      />
    </div>

    <!-- /Postlar  -->

    <!-- Rahbarlar -->

    <div class="row cards__all mt-5">
      <h1 class="text-center">Rahbarlar ro'yxati</h1>
      <div v-for="leader in leaders" :key="leader.id" class="position-relative col-sm-12  col-lg-3 m-h-100 ">

        <div class="card m-2">
          <img :src="baseURL + leader.image.contentUrl" alt="..." class="card-img-top">
          <div class="card-body text-center">
            <h5 class="card-title">{{ leader.name }}</h5>
            <h6 class="card-title_one">{{ leader.description }}</h6>
            <p class="card-text">{{ leader.text }}</p>
            <button class="btnDelet mt-2  w-100 py-2" data-bs-target="#exampleModal"
                    data-bs-toggle="modal" @click="setCurrentId(leader.id, 'leader')">O'chirish
            </button>
          </div>


        </div>

      </div>

    </div>
  </div>

  <!--    Modal section-->

  <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 id="exampleModalLabel" class="modal-title fs-5 text-danger">Diqqat!</h1>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <p>
            Bu ma'lumotlarni o'chirsangiz, qaytarib bo'lmaydi! <br>
            Haqiqatan ham bu ma'lumotni o'chirasizmi?
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Yo'q</button>
          <button class="btn btnDelete" data-bs-dismiss="modal" type="button"
                  @click=" typeName === 'leader' ? reversLeader() : reversNews() "> Ha
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.btnDelet:hover::before {
  opacity: 1;
}

.btnDelet::before {
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

.btnDelet {
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
}

.btnDelet::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f10c23;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.pagination-container {

  list-style: none;
  font-family: monospace;
  display: flex;
  justify-content: center;
  column-gap: 10px;
}


/* Content style */
.page-item {
  cursor: pointer;
}

.card img {
  width: 94%;
  height: 15rem;
  border-radius: 10px;
  padding: 0.3rem;
  object-fit: cover;
  margin: auto;
  margin-top: 0.5rem;
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
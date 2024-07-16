<script setup xmlns="http://www.w3.org/1999/html">
import {useAuthorization} from "@/stores/authorization.js";
import {reactive, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {useRouter} from "vue-router";

let authorization = reactive({email: "", password: ""})


let typeCode = ref('password')

function openCode(){
  typeCode.value = 'text'
}
function closeCode(){
  typeCode.value = 'password'
}

const router = useRouter()

const isError = ref(false)
function auth() {
  useAuthorization().userAuth(authorization)
      .then(() => {
        router.push('/admin')
        isError.value = false
      })
      .catch(() => {
        isError.value = true
      })
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Faqat admin kiradi</h2>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img alt="profile"
                   class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                   src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" width="200px">
            </div>
            <p v-if="isError" class="text-danger text-center">Email yoki parolda xatolik bor</p>
            <div class="mb-3 ">

              <input id="Username" v-model="authorization.email" aria-describedby="emailHelp" class="form-control"
                     placeholder="Email"
                     type="email">
            </div>
            <div class="mb-3 ">
              <input  id="password" v-model="authorization.password" :type="typeCode" class="form-control "
                     placeholder="password">
              <div class="position-relative">
                <span  v-if="typeCode==='password'" @click="openCode" class="clickOpenClose">
                <FontAwesomeIcon :icon="faEyeSlash"/>
              </span>
                <span v-if="typeCode==='text'" class="clickOpenClose" @click="closeCode">
                <FontAwesomeIcon :icon="faEye"/>
              </span>
              </div>
            </div>
            <div class="text-center">

              <button class="btn btn-color px-5 mb-5 w-100"  @click="auth()" type="button">
                Login
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.clickOpenClose{
  cursor: pointer;
  margin: 1rem 0.5rem;
  transition: 0.3s;
  position: absolute;
  top: -46px;
  left: 89%;
}
.clickOpenClose:hover{
  color: #022af3;
}
.btn-color {
  background-color: #0e1c36;
  color: #fff;

}

.profile-image-pic {
  height: 200px;
  width: 200px;
  object-fit: cover;
}


.cardbody-color {
  background-color: #ebf2fa;
}

a {
  text-decoration: none;
}
</style>
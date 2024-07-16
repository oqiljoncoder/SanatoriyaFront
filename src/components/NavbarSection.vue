<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active btnNavbar" aria-current="page" to="/">Bosh sahifa</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active btnNavbar" aria-current="page" to="/news">Postlar</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active btnNavbar" aria-current="page" href="#tariff">Tariflar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active btnNavbar" aria-current="page" href="#servers">Xizmatlar</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle btnNavbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Biz haqimizda
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/leaders" class="dropdown-item btnNavbar">
                    Rohbariyat
                  </router-link>

                </li>
                  <router-link to="/about-me" class="dropdown-item btnNavbar">
                      Sanatoriya
                  </router-link>
              </ul>
            </li>
          </ul>
          <div class="logo">
            <router-link to="/login" class="dropdown-item ">
              <img class="logo_img" src="@/assets/logo.png" alt="salom">
            </router-link>
          </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>

.logo_img{
  width: 4rem;
  margin: 0 2rem 0 0;
}

  .btnNavbar{
    height: 100%;
    padding: 1rem 2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    font-weight: 500;
    font-size: large;
    border-radius: 0.5rem;
  }
  .btnNavbar:hover{
    background-color: #56dfec9f;
  }
</style>
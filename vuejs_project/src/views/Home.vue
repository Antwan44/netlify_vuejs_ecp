<template>
  <div class="home">


    <nav class="navbar navbar-expand-lg navbar-dark bg-#10253F">
      <a class="navbar-brand" href="/home">
        <img src="/images/logocream/mjsmall.png" width="55" height="55" alt="" loading="lazy">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <div @click="login_toggle = true, register_toggle = false"
              class="btn btn-outline-light button-card-info mr-3">LOGIN</div>
          </li>
          <li class="nav-item">
            <div @click="register_toggle = true, login_toggle = false"
              class="btn btn-outline-light button-card-info mr-3">REGISTER</div>
          </li>
        </ul>
      </div>
      <img src="/images/logocream/mjlogo.png" width="190" height="130" alt="" loading="lazy">
    </nav>


    <div class="container-fluid">
      <div class="col-sm mt-5" style="margin: auto;">
        <div class="border-bottom border-white">
          <h1 class="text-white">WELCOME</h1>
        </div>
        <div class="mt-3">
          <h3 class="text-white">To the Majar Page</h3>
        </div>
      </div>
      <div class="col-sm">
        <div class="column login p-5 pt-5 mb-5 mt-4" v-show="login_toggle">
          <div class="d-flex">
            <Login />
          </div>
        </div>
        <div class="column register p-5 pt-5" v-show="register_toggle">
          <div class="d-flex">
            <Register />
          </div>
        </div>
      </div>
    </div>


    <Footer />



  </div>
</template>

<script>
  // @ is an alias to /src
  import Login from '@/components/Login.vue'
  import Register from '@/components/Register.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    data() {
      return {
        login_toggle: true,
        register_toggle: false,
      }
    },
    components: {
      Login,
      Register,
      Footer,

    }
  }
</script>

<style scoped>
  .navbar {
    background: linear-gradient(94deg, rgb(6, 15, 35), rgb(8, 17, 50), rgb(9, 19, 70), rgb(10, 20, 80));
  }

  .home {
    background: linear-gradient(94deg, rgb(6, 15, 35), rgb(8, 17, 50), rgb(9, 19, 70), rgb(10, 20, 80));
    min-height: 100vh;
  }
</style>
<template>
  <div class="home">


  <nav class="navbar navbar-expand-lg navbar-dark bg-#10253F">
  <a class="navbar-brand" href="/home">
          <img src="/images/logocream/mjsmall.png" width="55" height="55" alt="" loading="lazy">

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
<div @click="login_toggle = true, register_toggle = false"
            class="btn btn-outline-light button-card-info mr-3">LOGIN</div></li>
      <li class="nav-item">
 <div @click="register_toggle = true, login_toggle = false"
            class="btn btn-outline-light button-card-info mr-3">REGISTER</div>      </li>
    </ul>
  </div>
        <img src="/images/logocream/mjlogo.png" width="190" height="130" alt="" loading="lazy">


</nav>




        <div class="column login p-3 pt-3" v-show="login_toggle">
        <div class="d-flex">
          <Login/>
        </div>
        </div>

        <div class="column register p-3 pt-3" v-show="register_toggle">
        <div class="d-flex">
<Register/>
        </div>
        </div>





  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
/* import Header from '@/components/Header.vue'
 */
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
/*     Header,
 */      
    }
  }
</script>

<style scoped>

.navbar{
  background-color: #10253F;
}

</style>

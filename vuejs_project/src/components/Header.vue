<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">Mary & Jarvis</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
<div @click="login_toggle = !login_toggle, register_toggle = false"
            class="btn btn-primary button-card-info mr-2">LOGIN</div>      </li>
      <li class="nav-item">
 <div @click="register_toggle = !register_toggle, login_toggle = false"
            class="btn btn-primary button-card-info mr-2">REGISTER</div>      </li>
    </ul>
  </div>
</nav>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
          login_toggle: false,
          register_toggle: false,
        }
      }

}
</script>

<style>

</style>
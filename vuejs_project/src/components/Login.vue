<template>
 <div class="main">
 <!-- Sing in  Form -->
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img class="img-fluid rounded img-thumbnail mt-4" src="images/startup.jpg" alt="sign up image"></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form @submit="onsubmit" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" v-model="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" v-model="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div v-if="getLogin.success == false" class="alert alert-danger" role="alert">
                                    {{getLogin.error.message}}
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
 </div>

</template>

<script>
import {
    mapActions,
    mapGetters
  } from 'vuex'

export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions(['loginForm']),
      onsubmit(e) {
        e.preventDefault();
        var obj = {

          'email': this.email,
          'password': this.password
        }
        this.loginForm(obj);


      }
    },
    computed: mapGetters(['getLogin'])

}
</script>

<style scoped>
.main{
  background-color: transparent;

}
</style>
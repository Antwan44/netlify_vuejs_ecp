<template>
 <div class="main">
        <!-- Sign up form -->
        <section class="signin">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-form">
                        <h2 class="form-title">Sign up</h2>
                        <form @submit="onsubmit" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="firstname" id="firstname" placeholder="Your Firstname" v-model="firstname"/>
                            </div>
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lastname" id="lastname" placeholder="Your Lastname" v-model="lastname"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" v-model="email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" v-model="password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" v-model="c_password"/>
                            </div>
                            <div class="form-group">
                                <label for="phone"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg></label>
                                <input type="text" name="phone" id="phone" placeholder="Your Phone number" v-model="phone"/>
                            </div>
                            <div class="form-group">
                                                                          <p class="form-text text-left">Birthday</p>

                              
                                <input type="date" name="birthday" id="birthday" placeholder="Your Birthday" v-model="birthday"/>
                            </div>
                            <div class="form-group">
                                                                          <p class="form-text text-left">Hired Day</p>

                               
                                <input type="date" name="hiring_day" id="hiring_day" placeholder="Your Hiring Day" v-model="hiring_day"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signin-image">
                        <figure><img src="images/signup-image.jpg" alt="sign up image"></figure>
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
    name: 'Register',
      data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        c_password: '',
        phone: '',
        birthday: '',
        hiring_day: '',
      }
    },
    methods: {
      ...mapActions(['registerForm']),
      onsubmit(e) {
        e.preventDefault();
        var obj = {
          'firstname': this.firstname,
          'lastname': this.lastname,
          'email': this.email,
          'password': this.password,
          'c_password': this.c_password,
          'phone': this.phone,
          'birthday': this.birthday,
          'hiring_day': this.hiring_day,

          
        }
        this.registerForm(obj);
        

      }
    },
    computed: mapGetters(['getMessage']),
  

}
</script>

<style scoped>
.main{
  background-color: #10253F;

}
</style>
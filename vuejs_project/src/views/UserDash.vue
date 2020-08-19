<template>
  <div class='user'>
  <nav class="navbar navbar-expand-lg navbar-dark bg-#10253F" v-for="user in getUser" :key="user.id">
  <a class="navbar-brand" href="/udash">
          <img src="/images/logocream/mjsmall.png" width="55" height="55" alt="" loading="lazy">

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
<h4>Welcome {{user.firstname}} to your employee page.</h4>
  </div>
        <img src="/images/logocream/mjlogo.png" width="190" height="130" alt="" loading="lazy">


</nav>
              <div class="row mt-5">
      <div class="col-sm-3">
         <div class="card" v-for="user in getUser" :key="user.id">
                    <div class="card-header">
                    <h3>Hello<br>{{user.firstname}} {{user.lastname}}</h3>
                    <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg> {{user.phone}}</p>
<p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg> {{user.email}}</p>
</div>
        <UserFeedbacks />
        </div>
        </div>
         <div class="col-sm-6">

           <h3>Here will be some info about tasks!
           </h3>
           </div>


                        <div class="col-sm-3">
                    <AllArticles />
                </div>
              </div>
  </div>
</template>

<script>
import UserFeedbacks from '@/components/Feedbacks/UserFeedbacks.vue'
import AllArticles from '@/components/Articles/AllArticles.vue'
    import {
        mapGetters,
        mapActions,
    } from 'vuex';

export default {
    name: "User",

    components: {

            UserFeedbacks,
            AllArticles


        },
        methods: {
            ...mapActions(['fetchUser']),

        },
        computed: {
            ...mapGetters(['getUser']),
        },
        created() {
            this.fetchUser();
        }

}
</script>

<style scoped>


</style>
<template>
  <div class='user'>
      <h1>This is the User page</h1>
      <div>
        <UserFeedbacks />
        </div>
  </div>
</template>

<script>
import UserFeedbacks from '@/components/Feedbacks/UserFeedbacks.vue'


export default {
    name: "User",

    components: {

            UserFeedbacks

        }

}
</script>

<style>

</style>
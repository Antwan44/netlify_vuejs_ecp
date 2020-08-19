<template>
    <div class="ShowAllFeedbacks">

<div class="card border-light m-3">
              <div class="card-header">
    <h4>Employees Feedback</h4>
  </div>
            <ul class="list-group list-group-flush" v-for="feedback in getAllFeedbacks.data" :key="feedback.id">
                <li class="list-group-item">
                    <h6>{{feedback.topic}}</h6><p><small>{{feedback.feedback}}</small></p>
                </li>
            </ul>
        </div>
    </div>



</template>

<script>
    import {
        mapGetters,
        mapActions,
    } from 'vuex';

    export default {
        name: "ShowAllFeedbacks",

        methods: {
            ...mapActions(['fetchAllFeedbacks', 'fetchFeedback']),

        },
        computed: {
            ...mapGetters(['getAllFeedbacks', 'getFeedback']),
        },
        created() {
            this.fetchAllFeedbacks();
        }


    }
</script>

<style>

</style>
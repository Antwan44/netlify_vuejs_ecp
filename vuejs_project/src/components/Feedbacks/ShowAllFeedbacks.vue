<template>
    <div class="ShowAllfeedbacks">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="titre-admin">Manage <b>Feedback</b></h2>
                            </div>
                            <div class="col-sm-6 mt-2">
                                <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"> <span>Delete
                                        All</span></a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Topic</th>
                                <th>Feedback</th>
                                <th>Delete</th>
                                <th>Show</th>
                            </tr>
                        </thead>
                            <tbody>

                                <tr v-for="feedback in getAllFeedbacks.data" :key="feedback.id">

                                    <td>{{feedback.topic}}</td>
                                    <td>{{feedback.feedback}}</td>
                                    <td>
                                        <form>
                                            <input type="hidden" name="delete_id">
                                            <button type="submit" class="delete btn btn-danger" @click.prevent="ondelete(feedback.id)"
                                                name="delete_data_btn"><svg width="1em" height="1em" viewBox="0 0 16 16"
                                                    class="bi bi-trash-fill" fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                                </svg></button>
                                        </form>
                                    </td>
                                    <td>
                                        <form>
                                            <input type="hidden" name="show">
                                            <button type="submit" class="edit btn btn-primary" name="show_btn"><svg
                                                    width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill"
                                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                    <path fill-rule="evenodd"
                                                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                </svg></button>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
            </div>
        </div>
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
            ...mapActions(['fetchAllFeedbacks', 'fetchfeedback', 'DeleteFeedback']),
        ondelete(id) {
                this.DeleteFeedback(id);
                this.fetchAllFeedbacks();
            },
        },
        computed: {
            ...mapGetters(['getAllFeedbacks', 'getFeedback', 'getEraseFeedback']),
        },
        created() {
            this.fetchAllFeedbacks();
        }


    }
</script>

<style>

</style>
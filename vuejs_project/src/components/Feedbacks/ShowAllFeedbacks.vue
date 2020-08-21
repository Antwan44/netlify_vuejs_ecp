<template>
    <div class="ShowAllfeedbacks">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="titre-admin">Manage Feedback</h2>
                            </div>
                            <div class="col-sm-6 mt-2">
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
                                    <button type="submit" class="delete btn btn-delete"
                                        @click.prevent="ondelete(feedback.id)" name="delete_data_btn"><svg width="1em"
                                            height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                        </svg></button>
                                </td>
                                <td>
                                    <button type="submit" class="edit btn btn-show"
                                        @click="showModalShow = true, feedbackSelected = feedback"><svg width="1em"
                                            height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path fill-rule="evenodd"
                                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <!-- MODAL SHOW
 -->


        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModalShow" @close="showModalShow = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <div class="well">
                                <h4>{{ feedbackSelected.topic}}</h4>
                                <h6 v-html="feedbackSelected.feedback"></h6>
                                <div class="modal-footer">
                                    <div class="btn btn-danger mr-2" @click="showModalShow = false">Close</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
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
        data() {
            return {
                topic: '',
                feedback: '',
                showModalShow: false,
                feedbackSelected: '',
            }
        },

        methods: {
            ...mapActions(['fetchAllFeedbacks', 'fetchfeedback', 'DeleteFeedback']),
            ondelete(id) {
                this.fetchAllFeedbacks();
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

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }





    .modal-container {
        position: fixed;
        /* Stay in place */
        z-index: 1;
        /* Sit on top */
        left: 10%;
        top: 10%;
        width: 80%;
        /* Full width */
        height: 80%;
        /* Full height */
        overflow: auto;
        /* Enable scroll if needed */
        background-color: rgb(230, 230, 230);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;

    }

    .modal-footer {
        position: absolute;
        bottom: 0;
        right: 0;
    }


    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }



    .modal-body {
        margin: 20px 0;
    }



    .modal-default-button {
        float: right;
    }




    .modal-enter {
        opacity: 0;
    }



    .modal-leave-active {
        opacity: 0;
    }



    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .btn-delete {
        background-color: #EFD6DE;
        transition: transform .3s;
    }

    .btn-delete:hover {
        background-color: #ecacc0;
        transform: scale(1.1);
    }

    .btn-modify {
        background-color: #8F8F8F;
        transition: transform .3s;

    }

    .btn-modify:hover {
        background-color: #626262;
        transform: scale(1.1);

    }

    .btn-show {
        background-color: #73b2ff;
        transition: transform .3s;

    }

    .btn-show:hover {
        background-color: #4d6d97;
        transform: scale(1.1);

    }
</style>
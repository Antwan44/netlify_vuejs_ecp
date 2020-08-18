<template>
    <div class="ShowAllFeedbacks">

        <div class="card border-light" style="max-width: 18rem;">
            <div class="card-header">
                <h4>Feedback</h4>
            </div>
            <button class="btn btn-success" @click="showModal = true">Send a Feedback</button>

        </div>







        <!-- MODAL ADD
 -->
        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModal" @close="showModal = false">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <form @submit="onsubmit">
                                <div class="well">
                                    <h4>New Feedback</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Feedback Topic"
                                            v-model="topic">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Write Your Feedback"
                                            v-model="feedback">
                                    </div>

                                    <div class="btn btn-danger mr-2" @click="showModal = false">Close</div>
                                    <button type="submit" class="btn btn-primary" @click="showModal = false"> Submit
                                    </button>
                                </div>
                            </form>
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
                showModal: false,
            }
        },
        methods: {
            ...mapActions(['AddFeedback']),
            onsubmit(e) {
                e.preventDefault();
                var obj = {
                    'topic': this.topic,
                    'feedback': this.feedback,
                }
                this.AddFeedback(obj);

},

        },
        computed: {
            ...mapGetters(['getNewFeedback']),
        },



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



    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }



    .modal-container {
        width: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: rgb(230, 230, 230);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
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
</style>
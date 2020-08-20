<template>
    <div class="ShowUserTasks">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="titre-admin">See your <b>Tasks</b></h2>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Customer</th>
                                <th>Show</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="task in getUserTasks" :key="task.id">


                                <td>{{task.service}}</td>
                                <td>{{task.customer.firstname}}<br>{{task.customer.lastname}}</td>
                                

                                
                                <td>
                                        <button class="show btn btn-show" name="show_btn" @click="showModalShow = true, taskSelected = task"><svg
                                                width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                                   <h4>{{taskSelected.service}}</h4>
                                    <h6>Service start: {{taskSelected.start}}</h6>
                                    <h6>Service end: {{taskSelected.end}}</h6>
                                    <h6>Special Note: {{taskSelected.special_note}}</h6>
                                    <h6>Customer Info: {{taskSelected.customer.firstname}} {{taskSelected.customer.Lastname}}
                                        <br>
                                        {{taskSelected.customer.email}}
                                        <br>
                                        {{taskSelected.customer.phone}}
                                    </h6>
                                    <h6>Employee Info: {{taskSelected.user.firstname}} {{taskSelected.user.Lastname}}
                                        <br>
                                        {{taskSelected.user.email}}
                                        <br>
                                        {{taskSelected.user.phone}}
                                    </h6>
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
        name: "ShowUserTasks",
        data() {
            return {
                service: '',
                start: '',
                end: '',
                special_note: '',
                customer_id: '',
                employee_id: '',
                showModalShow: false,
                taskSelected: '',
            }
        },
        methods: {
            ...mapActions(['fetchUserTasks']),

        },
        computed: {
            ...mapGetters(['getUserTasks']),
        },
        created() {
            this.fetchUserTasks();
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





    .modal-container {
          position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 10%;
  top: 10%;
  width: 80%; /* Full width */
  height: 80%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
        background-color: rgb(230, 230, 230);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif; 

    }

.modal-footer{
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

        .btn-delete{
        background-color: #EFD6DE;
    }
    .btn-delete:hover{
                background-color: #ecacc0;

    }

        .btn-modify{
        background-color: #8F8F8F;
    }
    .btn-modify:hover{
                background-color: #626262;

    }

        .btn-show{
        background-color: #73b2ff;
    }
    .btn-show:hover{
                background-color: #4d6d97;

    }
</style>
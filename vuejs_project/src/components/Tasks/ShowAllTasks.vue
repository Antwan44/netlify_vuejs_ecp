<template>
    <div class="ShowAllTasks">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="titre-admin">Manage <b>Tasks</b></h2>
                            </div>
                            <div class="col-sm-6 mt-2">
                                <button id="show-modal" class="btn btn-show mr-2" @click="showModal = true"><svg
                                        width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                                        <path fill-rule="evenodd"
                                            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                                        <path fill-rule="evenodd"
                                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    </svg> Add New Task</button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Employee</th>
                                <th>Customer</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>Show</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="task in getAllTasks.data" :key="task.id">


                                <td>{{task.service}}</td>
                                <td>{{task.user.firstname}}<br>{{task.user.lastname}}</td>
                                <td>{{task.customer.firstname}}<br>{{task.customer.lastname}}</td>
                                
                                <td>
                                        <button class="delete btn btn-delete" @click.prevent="ondelete(task.id)"
                                            name="delete_data_btn">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                class="bi bi-trash-fill" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                            </svg>
                                            </button>
                                </td>
                                <td>
                                        <button class="edit btn btn-modify" name="modify_btn" @click="showModalEdit = true, taskSelected = task"><svg
                                                width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                                <path fill-rule="evenodd"
                                                    d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                            </svg></button>
                                </td>
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


<!-- MODAL ADD
 --><!-- 
        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModal" @close="showModal = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <form @submit="onsubmit">
                                <div class="well">
                                    <h4>New Task</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Service"
                                            v-model="title">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Write Your Small task"
                                            v-model="description">
                                    </div>

                                    <div class="btn btn-danger mr-2" @click="showModal = false">Close</div>
                                    <button type="submit" class="btn btn-primary" @click="showModal = false"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                     </div>
            </transition>
        </div>

 -->
<!-- MODAL UPDATE
 -->

<!-- 
 <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModalEdit" @close="showModalEdit = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <form v-on:submit.prevent="oneditTask(taskSelected)">
                                <div class="well">
                                    <h4>Edit Task</h4>
                                    <div class="form-group">
                                        <input type="text" class="form-control"
                                            v-model="taskSelected.title">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control"
                                            v-model="taskSelected.description">
                                    </div>

                                    <div class="btn btn-danger mr-2" @click="showModalEdit = false">Close</div>
                                    <button type="submit" class="btn btn-primary" @click="showModalEdit = false"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                     </div>
            </transition>
        </div>

 -->
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
        name: "ShowAllTasks",
        data() {
            return {
                service: '',
                start: '',
                end: '',
                special_note: '',
                customer_id: '',
                employee_id: '',
                showModal: false,
                showModalEdit: false,
                showModalShow: false,
                taskSelected: '',
            }
        },
        methods: {
            ...mapActions(['fetchAllTasks', 'TaskById', 'addTask', 'DeleteTask', 'updateTask']),
             onsubmit(e) {
                e.preventDefault();
                var obj = {
                    'service': this.service,
                    'start': this.start,
                    'end': this.end,
                    'special_note': this.special_note,
                    'customer_id': this.customer_id,
                    'employee_id': this.employee_id,

                }
                this.fetchAllTasks();
                this.addTask(obj);
                this.fetchAllTasks();
            }, 
            ondelete(id) {
                this.fetchAllTasks();
                this.DeleteTask(id);
                this.fetchAllTasks();
            }, 
            oneditTask(task){
                 var obj = {
                    'id': task.id,
                    'service': task.service,
                    'start': task.start,
                    'end': task.end,
                    'customer_id': task.customer_id,
                    'employee_id': task.employee_id,
            }
                this.fetchAllTasks();
                this.updateTask(obj);
                this.fetchAllTasks();

 
            } 

        },
        computed: {
            ...mapGetters(['getAllTasks', 'infoTaskById', 'getNewTask', 'getEraseTask', 'getEditTask']),
        },
        created() {
            this.fetchAllTasks();
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
        width: 50%;
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
<template>
    <div class="ShowAllUsers">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="titre-admin">Manage <b>Users</b></h2>
                            </div>
<!--                             <div class="col-sm-6 mt-2">
                                <button id="show-modal" class="btn btn-success mr-2" @click="showModal = true">+ Add New
                                    Employee</button>
                                <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"> <span>Delete
                                        All</span></a>
                            </div> -->
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>Show &<br> Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in getAllUsers.user" :key="user.id">
                                <td>{{user.firstname}}</td>
                                <td>{{user.lastname}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.phone}}</td>
                                <td>
                                        <button type="submit" class="delete btn btn-danger"
                                            @click.prevent="ondelete(user.id)" name="delete_data_btn"><svg width="1em"
                                                height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                            </svg></button>
                                </td>
                                <td>
                                        <button type="submit" class="edit btn btn-warning" name="modify_btn"
                                            @click="showModalEdit = true, userSelected = user"><svg width="1em"
                                                height="1em" viewBox="0 0 16 16" class="bi bi-pencil"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                                <path fill-rule="evenodd"
                                                    d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                            </svg></button>
                                </td>
                                <td>
                                        <button type="submit" class="edit btn btn-primary" name="show_btn"
                                            @click="showModalShow = true, userSelected = user"><svg width="1em"
                                                height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill"
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
 -->
        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModal" @close="showModal = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <form @submit="onsubmit">
                                <div class="well">
                                    <h4>New user</h4>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control" placeholder="user Firstname"
                                                v-model="firstname">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control" placeholder="user Lastname"
                                                v-model="lastname">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <p class="form-text text-left">Phone Number</p>
                                            <input type="text" class="form-control" placeholder="0123456789"
                                                v-model="phone">
                                        </div>
                                        <div class="form-group col-md-7">
                                            <p class="form-text text-left">Email</p>
                                            <input type="email" class="form-control" placeholder="mary@jarvis.com"
                                                v-model="email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Password</p>
                                        <input type="password" class="form-control" v-model="password">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Password Confirmation</p>
                                        <input type="password" class="form-control" v-model="c_password">
                                    </div>

                                    <div class="form-group">
                                        <p class="form-text text-left">Birthday</p>
                                        <input type="date" class="form-control" v-model="birthday">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Hiring Day</p>
                                        <input type="date" class="form-control" v-model="hiring_day">
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




        <!-- MODAL UPDATE
 -->


        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModalEdit" @close="showModalEdit = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <form v-on:submit.prevent="oneditUser(userSelected)">
                                <div class="well">
                                    <h4>Edit user</h4>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control" v-model="userSelected.firstname">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Lastname</p>
                                            <input type="text" class="form-control" v-model="userSelected.lastname">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Phone Number</p>
                                        <input type="text" class="form-control" v-model="userSelected.phone">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Email</p>
                                        <input type="email" class="form-control" v-model="userSelected.email">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Password</p>
                                        <input type="password" class="form-control" v-model="userSelected.password">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Password Confirmation</p>
                                        <input type="password" class="form-control" v-model="userSelected.c_password">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Birthday</p>
                                        <input type="date" class="form-control" v-model="userSelected.birthday">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Hiring Day</p>
                                        <input type="date" class="form-control" v-model="userSelected.hiring_day">
                                    </div>
                                    <div class="btn btn-danger mr-2" @click="showModalEdit = false">Close</div>
                                    <button type="submit" class="btn btn-primary" @click="showModalEdit = false"> Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </transition>
        </div>


        <!-- MODAL SHOW
 -->


        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModalShow" @close="showModalShow = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <div class="well">
                                <h4>{{ userSelected.firstname}} {{ userSelected.lastname}}</h4>
                                <h6>birthday: {{ userSelected.birthday}}</h6>
                                <h6>Hiring Day: {{ userSelected.hiring_day}}</h6>
                                <h6>Phone Number: {{ userSelected.phone}}</h6>
                                <h6>Email: {{ userSelected.email}}</h6>

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
        name: "ShowAllUsers",
        data() {
            return {
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                password: '',
                c_password: '',
                birthday: '',
                hiring_day: '',
                showModal: false,
                showModalEdit: false,
                showModalShow: false,
                userSelected: '',

            }
        },

        methods: {
            ...mapActions(['fetchAllUsers', 'UserById', 'addUser', 'DeleteUser', 'UpdateUser']),
            onsubmit(e) {
                e.preventDefault();
                var obj = {
                    'firstname': this.firstname,
                    'lastname': this.lastname,
                    'phone': this.phone,
                    'email': this.email,
                    'password': this.password,
                    'c_password': this.c_password,
                    'birthday': this.birthday,
                    'hiring_day': this.hiring_day,

                }
                this.addUser(obj);
                this.fetchAllUsers();
            },
            ondelete(id) {
                this.DeleteUser(id);
                this.fetchAllUsers();
            },

            oneditUser(User) {
                var obj = {
                    'id': User.id,
                    'firstname': User.firstname,
                    'lastname': User.lastname,
                    'phone': User.phone,
                    'email': User.email,
                    'password': User.password,
                    'c_password': User.c_password,
                    'birthday': User.birthday,
                    'hiring_day': User.hiring_day,
                }
                this.UpdateUser(obj);
                this.fetchAllUsers();


            }

        },
        computed: {
            ...mapGetters(['getAllUsers', 'infoUserById', 'getNewUser', 'getEraseUser', 'getEditUser']),
        },
        created() {
            this.fetchAllUsers();
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
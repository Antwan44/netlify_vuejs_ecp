<template>
    <div class="ShowAllCustomers">

        <div class="container-xl col-lg-12">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="titre-admin">Manage <b>Customers</b></h2>
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
                                    </svg> Add New
                                    Customer</button>

                                <button id="show-modal" class="btn btn-modify mr-2" @click="showModalMap = true"><svg
                                        width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg> See Map</button>
                            </div>
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
                                <th>Show</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in getAllCustomers.data" :key="customer.id">
                                <td>{{customer.firstname}}</td>
                                <td>{{customer.lastname}}</td>
                                <td>{{customer.email}}</td>
                                <td>{{customer.phone}}</td>
                                <td>
                                    <button type="submit" class="delete btn btn-delete"
                                        @click.prevent="ondelete(customer.id)" name="delete_data_btn"><svg width="1em"
                                            height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                        </svg></button>
                                </td>
                                <td>
                                    <button type="submit" class="edit btn btn-modify" name="modify_btn"
                                        @click="showModalEdit = true, customerSelected = customer"><svg width="1em"
                                            height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                            <path fill-rule="evenodd"
                                                d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                        </svg></button>
                                </td>
                                <td>
                                    <button type="submit" class="show btn btn-show" name="show_btn"
                                        @click="showModalShow = true, customerSelected = customer"><svg width="1em"
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


        <!-- MODAL ADD
 -->
        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModal" @close="showModal = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <form @submit="onsubmit">
                                <div class="well">
                                    <h4>New Customer</h4>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control" placeholder="Customer Firstname"
                                                v-model="firstname">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control" placeholder="Customer Lastname"
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
                                    <p class="form-text text-left"><strong>Address</strong></p>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <p class="form-text text-left">Street Number</p>
                                            <input type="text" class="form-control" placeholder="ex: 15"
                                                v-model="street_number">
                                        </div>
                                        <div class="form-group col-md-9">
                                            <p class="form-text text-left">Street Name</p>
                                            <input type="text" class="form-control" placeholder="Baker Street"
                                                v-model="street_name">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <p class="form-text text-left">Zip Code</p>
                                            <input type="text" class="form-control" placeholder="44700"
                                                v-model="zip_code">
                                        </div>
                                        <div class="form-group col-md-7">
                                            <p class="form-text text-left">City</p>
                                            <input type="text" class="form-control" placeholder="City" v-model="city">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Route to door</p>
                                        <input type="text" class="form-control"
                                            placeholder="Small explanation how to get to the door"
                                            v-model="route_to_door">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Birthday</p>
                                        <input type="date" class="form-control" placeholder="Birthday"
                                            v-model="birthday">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Special Note</p>
                                        <input type="text" class="form-control"
                                            placeholder="Special Note for this Customer" v-model="special_note">
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
                            <form v-on:submit.prevent="oneditCustomer(customerSelected)">
                                <div class="well">
                                    <h4>Edit Customer</h4>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Firstname</p>
                                            <input type="text" class="form-control"
                                                v-model="customerSelected.firstname">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="form-text text-left">Lastname</p>
                                            <input type="text" class="form-control" v-model="customerSelected.lastname">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Phone Number</p>
                                        <input type="text" class="form-control" v-model="customerSelected.phone">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Email</p>
                                        <input type="email" class="form-control" v-model="customerSelected.email">
                                    </div>
                                    <p class="form-text text-left"><strong>Address</strong></p>
                                    <div class="form-row">
                                        <div class="form-group col-md-2">
                                            <p class="form-text text-left">Street #</p>
                                            <input type="text" class="form-control"
                                                v-model="customerSelected.street_number">
                                        </div>
                                        <div class="form-group col-md-10">
                                            <p class="form-text text-left">Street Name</p>
                                            <input type="text" class="form-control"
                                                v-model="customerSelected.street_name">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-5">
                                            <p class="form-text text-left">Zip Code</p>
                                            <input type="text" class="form-control" v-model="customerSelected.zip_code">
                                        </div>
                                        <div class="form-group col-md-7">
                                            <p class="form-text text-left">City</p>
                                            <input type="text" class="form-control" v-model="customerSelected.city">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Route to Door</p>
                                        <input type="text" class="form-control"
                                            v-model="customerSelected.route_to_door">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Birthday</p>
                                        <input type="date" class="form-control" v-model="customerSelected.birthday">
                                    </div>
                                    <div class="form-group">
                                        <p class="form-text text-left">Special Note</p>
                                        <input type="text" class="form-control" v-model="customerSelected.special_note">
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
                                <h4>{{ customerSelected.firstname}} {{ customerSelected.lastname}}</h4>
                                <h6>birthday: {{ customerSelected.birthday}}</h6>
                                <h6>Phone Number: {{ customerSelected.phone}}</h6>
                                <h6>Email: {{ customerSelected.email}}</h6>
                                <h6>Address: {{ customerSelected.street_number}}, {{ customerSelected.street_name}}<br>
                                    {{ customerSelected.zip_code}} {{ customerSelected.city}}</h6>
                                <h6>Best route to the door: {{ customerSelected.route_to_door}}</h6>
                                <h6>Special note: {{ customerSelected.special_note}}</h6>

                                <GmapMap
                                    :center="{lat: parseFloat(customerSelected.lat), lng: parseFloat(customerSelected.lng)}"
                                    :zoom="9" map-type-id="terrain" style="width: 500px; height: 300px">
                                    <GmapMarker
                                        :position="{lat: parseFloat(customerSelected.lat), lng: parseFloat(customerSelected.lng)}"
                                        :clickable="true" :draggable="true" @click="center=m.position" />
                                </GmapMap>


                                <div class="modal-footer">
                                    <div class="btn btn-danger mr-2" @click="showModalShow = false">Close</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>



        <!-- MODAL MAP
 -->


        <div class="container-fluid" style="width : 98%;">
            <transition name="modal" v-if="showModalMap" @close="showModalMap = false">
                <div class="modal-mask">
                    <div class="modal-wrapper ">
                        <div class="modal-container">
                            <div class="well">
                                <div class="modal-header">
                                <h3>All Customers</h3>
                                </div>

                                <GmapMap  :center="{lat: 47, lng: -1}" :zoom="5" map-type-id="terrain"
                                    style="width: 100%; height: 400px">
                                    <GmapMarker v-for="customer in getAllCustomers.data" :key="customer.id"
                                        :position="{lat: parseFloat(customer.lat), lng: parseFloat(customer.lng)}"
                                        :clickable="true" :draggable="true" @click="activeCustomer=customer; infoWindowCustomerOpen = true"/>

                                    <gmap-info-window 
                                     :position="{lat: parseFloat(activeCustomer.lat), lng: parseFloat(activeCustomer.lng)}"
                                     :opened="infoWindowCustomerOpen"
                                     @closeclick="activeCustomer = {}; infoWindowCustomerOpen = false">
                                     <div class="card bg-light mb-3">
                                         <div class="card-header">{{activeCustomer.firstname}} {{activeCustomer.lastname}}</div>
                                         <p class="card-text"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg> {{activeCustomer.street_number}} {{activeCustomer.street_name}}<br>{{activeCustomer.zip_code}} {{activeCustomer.city}}</p>
                                         <p class="card-text"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg> {{activeCustomer.phone}}</p>
                                         <p class="card-text"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg> {{activeCustomer.email}}</p>
                                     </div>
                                     </gmap-info-window>
                                </GmapMap>


                                <div class="modal-footer">
                                    <div class="btn btn-danger mr-2" @click="showModalMap = false">Close</div>
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
        name: "ShowAllCustomers",
        data() {
            return {
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                street_number: '',
                street_name: '',
                zip_code: '',
                city: '',
                route_to_door: '',
                birthday: '',
                special_note: '',
                showModal: false,
                showModalEdit: false,
                showModalShow: false,
                showModalMap: false,
                customerSelected: '',
                infoWindowCustomerOpen: false,
                activeCustomer: {},
            }
        },

        methods: {
            ...mapActions(['fetchAllCustomers', 'CustomerById', 'addCustomer', 'DeleteCustomer', 'updateCustomer']),
            onsubmit(e) {
                e.preventDefault();
                var obj = {
                    'firstname': this.firstname,
                    'lastname': this.lastname,
                    'phone': this.phone,
                    'email': this.email,
                    'street_number': this.street_number,
                    'street_name': this.street_name,
                    'zip_code': this.zip_code,
                    'city': this.city,
                    'route_to_door': this.route_to_door,
                    'birthday': this.birthday,
                    'special_note': this.special_note,

                }
                this.fetchAllCustomers();
                this.addCustomer(obj);
                this.fetchAllCustomers();
            },
            ondelete(id) {
                this.fetchAllCustomers();
                this.DeleteCustomer(id);
                this.fetchAllCustomers();
            },

            oneditCustomer(customer) {
                var obj = {
                    'id': customer.id,
                    'firstname': customer.firstname,
                    'lastname': customer.lastname,
                    'phone': customer.phone,
                    'email': customer.email,
                    'street_number': customer.street_number,
                    'street_name': customer.street_name,
                    'zip_code': customer.zip_code,
                    'city': customer.city,
                    'route_to_door': customer.route_to_door,
                    'birthday': customer.birthday,
                    'special_note': customer.special_note,
                }
                this.fetchAllCustomers();
                this.updateCustomer(obj);
                this.fetchAllCustomers();


            },



        },
        computed: {
            ...mapGetters(['getAllCustomers', 'infoCustomerById', 'getNewCustomer', 'getEraseCustomer',
                'getEditCustomer'
            ]),
        },
        created() {
            this.fetchAllCustomers();
        }


    }
</script>

<style scoped>
    #map {
        height: 700px;
        /* The height is 400 pixels */
        width: 100%;
        /* The width is the width of the web page */
    }

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
        color: #10253F;
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
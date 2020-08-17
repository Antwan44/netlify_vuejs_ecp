const token = window.localStorage.getItem('token') || "";


const state= {

    customers:[],
    CustomerById:[],
    NewCustomer: [],
    EraseCustomer: [],
    EditCustomer: [],
    getCords: []

}

const getters= {


    infoCustomerById:(state) =>(state.CustomerById),
    getAllCustomers:(state)=> (state.customers),
    getNewCustomer:(state)=> (state.NewCustomer),
    getEraseCustomer:(state)=> (state.EraseCustomer),
    getEditCustomer:(state)=>(state.EditCustomer),
    getgetCords:(state)=>(state.getCords)

}

const actions= {


// FETCH CUSTOMER BY ID
async fetchCustomerById({commit},id){
              var myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer ${token}`);
  
              var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              
              redirect: 'follow'
              };
  
              fetch(`https://serene-plateau-70469.herokuapp.com/api/customers/${id}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                commit('CustomerById',result);

              })
              .catch(error => console.log('error', error));
                  },


    //FETCH ALL CUSTOMERS
 async fetchAllCustomers({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("https://serene-plateau-70469.herokuapp.com/api/customers", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllCustomers',result))
        .catch(error => console.log('error', error));
            },





    //ADD A CUSTOMER
    async addCustomer({commit}, obj){
 
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${obj.street_number}${obj.street_name}${obj.city}&key=AIzaSyCuhftDeP8710rA7n7ckpcrFguEAX-BsjA`, requestOptions)
.then(response => response.json())
.then(result => {
  commit('fetchCords',result);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  var formdata = new FormData();
  formdata.append("firstname", obj.firstname);
  formdata.append("lastname", obj.lastname);
  formdata.append("phone", obj.phone);
  formdata.append("email", obj.email);
  formdata.append("street_number", obj.street_number);
  formdata.append("street_name", obj.street_name);
  formdata.append("lat", result.results[0].geometry.location.lat);
  formdata.append("lng", result.results[0].geometry.location.lng);
  formdata.append("zip_code", obj.zip_code);
  formdata.append("city", obj.city);
  formdata.append("route_to_door", obj.route_to_door);
  formdata.append("birthday", obj.birthday);
  formdata.append("special_note", obj.special_note);
  
  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
  };
  
  fetch("https://serene-plateau-70469.herokuapp.com/api/customers", requestOptions)
  .then(response => response.json())
  .then(result => commit('AddCustomer',result))
  .catch(error => console.log('error', error));



})
.catch(error => console.log('error', error));



},


    //UPDATE A CUSTOMER

    async updateCustomer({commit}, customer){


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
  "firstname": customer.firstname,
  "lastname": customer.lastname,
  "phone": customer.phone,
  "email": customer.email,
  "street_number": customer.street_number,
  "street_name": customer.street_name,
  "zip_code": customer.zip_code,
  "city": customer.city,
  "route_to_door": customer.route_to_door,
  "birthday": customer.birthday,
  "special_note": customer.special_note,
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/customers/${customer.id}`, requestOptions)
  .then(response => response.text())
  .then(result => commit('UpdateCustomer',result))
  .catch(error => console.log('error', error));

}, 

    //DELETE A CUSTOMER


    async DeleteCustomer({commit}, id){


    var myHeaders = new Headers();

myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/customers/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => commit('DeleteCustomer',result))
  .catch(error => console.log('error', error));
},
/* 
//GET COORDS FROM CUSTOMER ADDRESS

async fetchCords({commit}, customer){
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

JSON.stringify({
  "street_number": customer.street_number,
  "street_name": customer.street_name,
  "zip_code": customer.zip_code,
  "city": customer.city,

});

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${customer.street_number}+${customer.street_name},+${customer.city}&key=AIzaSyCuhftDeP8710rA7n7ckpcrFguEAX-BsjA`, requestOptions)
  .then(response => response.json())
  .then(result => commit('fetchCords',result))
  .catch(error => console.log('error', error));

} */

}

const mutations= {


fetchAllCustomers:(state,customers)=>(state.customers = customers),
CustomerById:(state,CustomerById)=>(state.CustomerById = CustomerById),
AddCustomer:(state,NewCustomer)=>(state.NewCustomer = NewCustomer),
DeleteCustomer: (state,EraseCustomer)=>(state.EraseCustomer = EraseCustomer),
UpdateCustomer: (state,EditCustomer)=>(state.EditCustomer = EditCustomer),
fetchCords: (state,getCords)=>(state.getCords = getCords),




}




export default{
    state,
    getters,
    actions,
    mutations,
}
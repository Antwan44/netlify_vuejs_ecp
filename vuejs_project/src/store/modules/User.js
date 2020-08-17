const token = window.localStorage.getItem('token') || "";


const state= {

    user:[],
    users:[],
    UserById:[],
    EditUser:[],
    EraseUser: [],
    NewUser: [],


}

const getters= {


    getUser:(state) =>(state.user),
    infoUserById:(state) =>(state.UserById),
    getAllUsers:(state)=> (state.users),
    getNewUser:(state)=> (state.NewCustomer),
    getEditUser:(state) => (state.EditUser),
    getEraseUser:(state) => (state.EraseUser)

}

const actions= {



      // FETCH USER
      async fetchUser({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("http://localhost:8000/api/users/me/", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchUser',result))
        .catch(error => console.log('error', error));
            },


// FETCH USER BY ID
async fetchUserById({commit},id){
              var myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer ${token}`);
  
              var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              
              redirect: 'follow'
              };
  
              fetch(`http://localhost:8000/api/users/${id}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                commit('UserById',result);

              })
              .catch(error => console.log('error', error));
                  },


    //FETCH ALL USERS
 async fetchAllUsers({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("http://localhost:8000/api/users/", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllUsers',result))
        .catch(error => console.log('error', error));
            },


  //ADD A USER
    async addUser({commit}, obj){

      var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var formdata = new FormData();
formdata.append("firstname", obj.firstname);
formdata.append("lastname", obj.lastname);
formdata.append("phone", obj.phone);
formdata.append("email", obj.email);
formdata.append("password", obj.password);
formdata.append("c_password", obj.c_password);
formdata.append("birthday", obj.birthday);
formdata.append("hiring_day", obj.hiring_day);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("http://localhost:8000/api/users", requestOptions)
.then(response => response.json())
.then(result => commit('AddUser',result))
.catch(error => console.log('error', error));
},




    //UPDATE USER BY ID

    async UpdateUser({commit},user){

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({

  "firstname": user.firstname,
  "lastname": user.lastname,
  "phone": user.phone,
  "email": user.email,
  "password": user.password,
  "c_password": user.c_password,
  "birthday": user.birthday,
  "hiring_day": user.hiring_day,

});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:8000/api/users/${user.id}`, requestOptions)
  .then(response => response.text())
  .then(result => commit('UpdateUser',result))
  .catch(error => console.log('error', error));


    },





    //DELETE USER BY ID
    async DeleteUser({commit},id){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:8000/api/users/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => commit('DeleteUser',result))
      .catch(error => console.log('error', error));
    }

}

const mutations= {


fetchUser:(state,user) =>(state.user = user),
fetchAllUsers:(state,users)=>(state.users = users),
UserById:(state,UserById)=>(state.UserById = UserById),
AddUser:(state,NewUser)=>(state.NewUser = NewUser),
UpdateUser: (state,EditUser)=>(state.EditUser = EditUser),
DeleteUser: (state,EraseUser)=>(state.EraseUser = EraseUser)


}




export default{
    state,
    getters,
    actions,
    mutations,
}
const token = window.localStorage.getItem('token') || "";


const state= {

    tasks:[],
    TaskById:[],
    NewTask: [],
    EraseTask: [],
    EditTask: [],
    UserTasks: []

}

const getters= {


    infoTaskById:(state) =>(state.TaskById),
    getAllTasks:(state)=> (state.tasks),
    getNewTask:(state)=> (state.NewTask),
    getEraseTask:(state)=> (state.EraseTask),
    getEditTask:(state)=>(state.EditTask),
    getUserTasks:(state)=>(state.UserTasks)
}

const actions= {


// FETCH TASK BY ID
async fetchTaskById({commit},id){
              var myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer ${token}`);
  
              var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              
              redirect: 'follow'
              };
  
              fetch(`https://serene-plateau-70469.herokuapp.com/api/tasks/${id}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                commit('TaskById',result);

              })
              .catch(error => console.log('error', error));
                  },


    //FETCH ALL TASKS
 async fetchAllTasks({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("https://serene-plateau-70469.herokuapp.com/api/tasks", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllTasks',result))
        .catch(error => console.log('error', error));
            },

    //ADD A TASK
    async addTask({commit}, obj){

        var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var formdata = new FormData();
formdata.append("service", obj.service);
formdata.append("start", obj.start);
formdata.append("end", obj.end);
formdata.append("special_note", obj.special_note);
formdata.append("customer_id", obj.customer_id);
formdata.append("employee_id", obj.employee_id);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("https://serene-plateau-70469.herokuapp.com/api/tasks", requestOptions)
.then(response => response.json())
.then(result => commit('AddTask',result))
.catch(error => console.log('error', error));
},


    //UPDATE A TASK

    async updateTask({commit}, task){


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
    "service": task.service,
    "start": task.start,
    "end": task.end,
    "special_note": task.special_note,
    "customer_id": task.customer_id,
    "employee_id": task.employee_id,
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/tasks/${task.id}`, requestOptions)
  .then(response => response.text())
  .then(result => commit('UpdateTask',result))
  .catch(error => console.log('error', error));

},

    //DELETE AN TASK


    async DeleteTask({commit}, id){


    var myHeaders = new Headers();

myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/tasks/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => commit('DeleteTask',result))
  .catch(error => console.log('error', error));
},


    //FETCH ALL TASKS FROM USER

    async fetchUserTasks({commit}){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch("https://serene-plateau-70469.herokuapp.com/api/tasks/user", requestOptions)
      .then(response => response.json())
      .then(result => commit('fetchUserTasks',result))
      .catch(error => console.log('error', error));
          },



}

const mutations= {


fetchAllTasks:(state,tasks)=>(state.tasks = tasks),
TaskById:(state,TaskById)=>(state.TaskById = TaskById),
AddTask:(state,NewTask)=>(state.NewTask = NewTask),
DeleteTask: (state,EraseTask)=>(state.EraseTask = EraseTask),
UpdateTask: (state,EditTask)=>(state.EditTask = EditTask),
fetchUserTasks: (state,UserTasks)=>(state.UserTasks = UserTasks)

}




export default{
    state,
    getters,
    actions,
    mutations,
}
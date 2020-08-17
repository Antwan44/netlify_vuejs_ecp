const token = window.localStorage.getItem('token') || "";


const state= {

    feedbacks:[],
    FeedbackById:[],
    NewFeedback: [],
    EraseFeedback: [],

}

const getters= {


    infoFeedbackById:(state) =>(state.FeedbackById),
    getAllFeedbacks:(state)=> (state.feedbacks),
    getNewFeedback:(state)=> (state.NewFeedback),
    getEraseFeedback:(state)=> (state.EraseFeedback),

}

const actions= {


// FETCH FEEDBACK BY ID
async fetchFeedbackById({commit},id){
              var myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer ${token}`);
  
              var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              
              redirect: 'follow'
              };
  
              fetch(`https://serene-plateau-70469.herokuapp.com/api/feedbacks/${id}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                commit('FeedbackById',result);

              })
              .catch(error => console.log('error', error));
                  },


    //FETCH ALL FEEDBACKS
 async fetchAllFeedbacks({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("https://serene-plateau-70469.herokuapp.com/api/feedbacks", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllFeedbacks',result))
        .catch(error => console.log('error', error));
            },



    //ADD A FEEDBACK
    async AddFeedback({commit}, obj){

        var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var formdata = new FormData();
formdata.append("topic", obj.topic);
formdata.append("feedback", obj.feedback);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("https://serene-plateau-70469.herokuapp.com/api/feedbacks", requestOptions)
.then(response => response.json())
.then(result => commit('AddFeedback',result))
.catch(error => console.log('error', error));
},

/* 
    //UPDATE A FEEDBACK

    async updateFeedback({commit}, feedback){


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
    "topic": feedback.topic,
    "feedback": feedback.feedback
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/feedbacks/${feedback.id}`, requestOptions)
  .then(response => response.text())
  .then(result => commit('UpdateFeedback',result))
  .catch(error => console.log('error', error));

}, */

    //DELETE A FEEDBACK


    async DeleteFeedback({commit}, id){


    var myHeaders = new Headers();

myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/feedbacks/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => commit('DeleteFeedback',result))
  .catch(error => console.log('error', error));
},




}

const mutations= {


fetchAllFeedbacks:(state,feedbacks)=>(state.feedbacks = feedbacks),
FeedbackById:(state,FeedbackById)=>(state.FeedbackById = FeedbackById),
AddFeedback:(state,NewFeedback)=>(state.NewFeedback = NewFeedback),
DeleteFeedback: (state,EraseFeedback)=>(state.EraseFeedback = EraseFeedback),


}




export default{
    state,
    getters,
    actions,
    mutations,
}

const state= {

    message:[],
    messageLogin:[],
    

}

const getters= {

    getMessage:(state) =>(state.message),
    getLogin:(state) => (state.messageLogin),
    
}

const actions= {


    // REGISTER 
    async registerForm({commit},form){
        var formdata = new FormData();
        formdata.append("firstname", form.firstname);
        formdata.append("lastname", form.lastname);
        formdata.append("email", form.email);
        formdata.append("password", form.password);
        formdata.append("c_password", form.c_password);
        formdata.append("phone", form.phone);
        formdata.append("birthday", form.birthday);
        formdata.append("hiring_day", form.hiring_day);
     
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://serene-plateau-70469.herokuapp.com/api/register", requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('registerMessage',result);
              if(!result.error){
                window.location.href="/";

              }
            })
          .catch(error => console.log('error', error));
    },
    //LOGIN 

    async loginForm({commit},obj){
        var formdata = new FormData();
        formdata.append("email", obj.email);
        formdata.append("password", obj.password);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://serene-plateau-70469.herokuapp.com/api/login", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('loginMessage',result);
            window.localStorage.setItem('token',result.success.token);
            if(!result.error){
              window.location.href="/adash";
            }
          })
        .catch(error => console.log('error', error));
    },

}

const mutations= {

registerMessage:(state,message)=>(state.message = message),
loginMessage:(state,messageLogin) =>(state.messageLogin = messageLogin),

}




export default{
    state,
    getters,
    actions,
    mutations,
}
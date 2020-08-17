const token = window.localStorage.getItem('token') || "";


const state= {

    articles:[],
    ArticleById:[],
    NewArticle: [],
    EraseArticle: [],
    EditArticle: []

}

const getters= {


    infoArticleById:(state) =>(state.ArticleById),
    getAllArticles:(state)=> (state.articles),
    getNewArticle:(state)=> (state.NewArticle),
    getEraseArticle:(state)=> (state.EraseArticle),
    getEditArticle:(state)=>(state.EditArticle)
}

const actions= {


// FETCH ARTICLE BY ID
async fetchArticleById({commit},id){
              var myHeaders = new Headers();
              myHeaders.append("Authorization", `Bearer ${token}`);
  
              var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              
              redirect: 'follow'
              };
  
              fetch(`https://serene-plateau-70469.herokuapp.com/api/articles/${id}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                commit('ArticleById',result);

              })
              .catch(error => console.log('error', error));
                  },


    //FETCH ALL ARTCILES
 async fetchAllArticles({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch("https://serene-plateau-70469.herokuapp.com/api/articles/", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllArticles',result))
        .catch(error => console.log('error', error));
            },

    //ADD AN ARTICLE
    async addArticle({commit}, obj){

        var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var formdata = new FormData();
formdata.append("title", obj.title);
formdata.append("description", obj.description);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("https://serene-plateau-70469.herokuapp.com/api/articles", requestOptions)
.then(response => response.json())
.then(result => commit('AddArticle',result))
.catch(error => console.log('error', error));
},


    //UPDATE AN ARTICLE

    async updateArticle({commit}, article){


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var raw = JSON.stringify({
    "title": article.title,
    "description": article.description
});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/articles/${article.id}`, requestOptions)
  .then(response => response.text())
  .then(result => commit('UpdateArticle',result))
  .catch(error => console.log('error', error));

},

    //DELETE AN ARTICLE


    async DeleteArticle({commit}, id){


    var myHeaders = new Headers();

myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://serene-plateau-70469.herokuapp.com/api/articles/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => commit('DeleteArticle',result))
  .catch(error => console.log('error', error));
},


}

const mutations= {


fetchAllArticles:(state,articles)=>(state.articles = articles),
ArticleById:(state,ArticleById)=>(state.ArticleById = ArticleById),
AddArticle:(state,NewArticle)=>(state.NewArticle = NewArticle),
DeleteArticle: (state,EraseArticle)=>(state.EraseArticle = EraseArticle),
UpdateArticle: (state,EditArticle)=>(state.EditArticle = EditArticle)

}




export default{
    state,
    getters,
    actions,
    mutations,
}
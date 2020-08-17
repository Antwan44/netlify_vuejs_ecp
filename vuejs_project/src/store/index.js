import Vue from 'vue'
import Vuex from 'vuex'
import Register from './modules/Register.js'
import User from './modules/User.js'
import Article from './modules/Article.js'
import Feedback from './modules/Feedback.js'
import Customer from './modules/Customer.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Register,
    User,
    Article,
    Feedback,
    Customer
  }
})

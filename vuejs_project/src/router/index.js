import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Admin from '../views/AdminDash.vue'
import User from '../views/UserDash.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresVisitor: true},

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{requiresVisitor: true},


  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{requiresVisitor: true},


  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{requiresVisitor: true},


  },
  {
    path: '/adash',
    name: 'Admin',
    component: Admin,
    meta:{requiresVisitor: false},


  },  {
    path: '/udash',
    name: 'User',
    component: User,
    meta:{requiresVisitor: false},


  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

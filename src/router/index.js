import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//admin
import AdminView from '../views/Admin/AdminView.vue'
// import AdminRegister from '../views/Admin/RegisterView.vue'
// import AdminLogin from '../views/Admin/LoginView.vue'

//vendor
import VendorRegister from '../views/Vendor/RegisterView.vue'
import VendorLogin from '../views/Vendor/LoginView.vue'
import VendorHome from '../views/Vendor/VendorHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

//admin
  {
    path: '/Admin/Home',
    name: 'Admin',
    component: AdminView
  },

  // {
  //   path: '/Admin/Register',
  //   name: 'Register',
  //   component: AdminRegister
  // },

  // {
  //   path: '/Admin/Login',
  //   name: 'Login',
  //   component: AdminLogin
  // },

//vendor

  {
    path: '/Vendor/Register',
    name: 'Register',
    component: VendorRegister
  },

  {
    path: '/Vendor/Login',
    name: 'Login',
    component: VendorLogin
  },

  {
    path: '/Vendor/Home',
    name: 'Home',
    component: VendorHome
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

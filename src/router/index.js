import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Products/Product'
import Newproduct from '@/components/Products/Newproduct'
import Productlist from '@/components/Products/Productlist'
import Checkout from '@/components/User/Checkout'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/product/:id', name: 'product', component: Product},
    {path: '/new', name: 'new', component: Newproduct},
    {path: '/list', name: 'list', component: Productlist},
    {path: '/checkout', name: 'checkout', component: Checkout},
    {path: '/register', name: 'register', component: Register},
    {path: '/login', name: 'login', component: Login}
  ],
  mode: 'history'
})

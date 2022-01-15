
import Main from '../components/Main.vue';
import {createRouter, createWebHistory } from 'vue-router'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const ProductDetails = () => import('./ProductDetails.vue');
const Cart = () => import('./Cart.vue')
const routes = [
    { path: '/', component: Main, name: 'home' },
    { path: '/product/:productID', component: ProductDetails, props: true, name:'product'},
    { path: '/Cart', component: Cart, name:'cart'},
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  

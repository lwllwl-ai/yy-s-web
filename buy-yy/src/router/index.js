import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Subcategory from "@/views/Subcategory/index.vue";
import details from "@/views/Detailes/index.vue"
import Carlist from '@/views/Carlist/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import zhifubao from '@/views/Pay/zhifubao.vue'
import Wechat from '@/views/Pay/wechat.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'Category/:id',
          component: Category
        },
        {
          path:'Category/sub/:id',
          component: Subcategory
        },
        {
          path:'detail/:id',
          component: details
        },
        {
          path:'carList',
          component: Carlist
        },
        {
          path:'checkout',
          component: Checkout
        },
        {
          path:'pay',
          component:Pay,
          
            
          
        },
        {
          path:'zhifubao',
          component:zhifubao
        },
        {
           path:'wechat',
           component:Wechat
        }      
      ]
        
      
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
  ],
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router

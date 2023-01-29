import Vue from 'vue'
import VueRouter from 'vue-router'
import Person from '../pages/Person.vue'
import Season from '../pages/Season.vue'
import Cheap from '../pages/Cheap.vue'
import Love from '../pages/Love.vue'
import All from '../pages/All.vue'
import Car from '../pages/Car.vue'
import Message from '../pages/Message.vue'
import xiangqing from '../pages/xiangqing.vue'
import air from '../pages/air.vue'
import zuce from '../components/zuce.vue'
import gai from '../components/gai.vue'
import denlu from '../components/denlu.vue'
import home from '../components/home.vue'
import shop from '../pages/shop.vue'
import xiangqing2 from '../pages/xiangqing2.vue'
import xiangqing3 from '../pages/xiangqing3.vue'
import smallShop from '../pages/smallShop.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    name: 'zuce',
    path: '/zuce',
    component: zuce
  },
  {
    name: 'denlu',
    path: '/denlu',
    component: denlu
  },
  {
    name: 'gai',
    path: '/gai',
    component: gai
  },
  {
    name: 'home',
    path: '/home',
    component: home,
    children: [
      {
        name: 'air',
        path: '/air',
        component: air
      },

      {
        name: 'smallShop',
        path: '/smallShop',
        component: smallShop,
        children: [
          {
            name: 'xiangqing3',
            path: 'xiangqing3',
            component: xiangqing3
          },
        ]
      },

      {
        name: 'shop',
        path: '/shop',
        component: shop,
        children: [
          {
            name: 'xiangqing2',
            path: 'xiangqing2',
            component: xiangqing2
          },
        ]
      },

      {
        name: 'Person',
        path: '/Person',
        component: Person
      },
      {
        name: 'Season',
        path: '/Season',
        component: Season
      },
      {
        name: 'Cheap',
        path: '/Cheap',
        component: Cheap
      },
      {
        name: 'Love',
        path: '/Love',
        component: Love
      },
      {
        name: 'All',
        path: '/All',
        component: All,
        children: [
          {
            name: 'xiangqing',
            path: '/xiangqing',
            component: xiangqing
          },
        ]
      },
      {
        name: 'Car',
        path: '/Car',
        component: Car,
        children: [
          {
            name: 'xiangqing',
            path: 'xiangqing',
            component: xiangqing
          },
        ]
      },
      {
        name: 'Message',
        path: '/Message',
        component: Message
      },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router

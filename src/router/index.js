import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '@/views/firebase/config'

// route guard --> using auth
const authGuard = (to, from, next) => {
  let currentUser =  projectAuth.currentUser;
  // console.log(currentUser);
  if(!currentUser) {
    next({ name: 'Welcome' })
  } else {
    next();
  }
}

const checkIsLogined = (to, from, next) => {
  let currentUser =  projectAuth.currentUser;
  if(currentUser) {
    next({ name: 'Chatroom' })
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: checkIsLogined
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: authGuard
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

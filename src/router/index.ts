import { createWebHashHistory, createRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const routes = [
  { 
    path: '/', 
    name: 'home',
    meta:{
      requireAuth: true
    },
    component: () => import('@/layout/index.vue'),
    children:[
      {
        path: 'vote',
        name: '投票管理',
        meta:{
          icon:'food'
        },
        children:[
          { 
            path: '/vote/do_vote', 
            name: '投票',
            component: () => import('@/views/vote/do_vote.vue') 
          },
          { 
            path: '/vote/check_vote', 
            name: '查看投票',
            component: () => import('@/views/vote/check_vote.vue') 
          }
        ]
      }
    ]
  },
  { 
    path: '/login', 
    name: 'login',
    component: () => import('@/views/Login.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


router.beforeEach((to) => {
  const store = useUserStore()
  let { userInfo } = storeToRefs(store)
  if(to.meta.requireAuth && !userInfo.value){
    return '/login'
  }
})

export default router
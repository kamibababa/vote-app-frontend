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
        path: 'article',
        name: '文章管理',
        meta:{
          icon:'food'
        },
        children:[
          { 
            path: '/article/all_article', 
            name: '全部文章',
            component: () => import('@/views/article/all_article.vue') 
          },
          { 
            path: '/article/my_article', 
            name: 'my_article',
            component: () => import('@/views/article/my_article.vue') 
          }
        ]
      },
      {
        path: 'comment',
        name: 'comment',
        meta:{
          icon:'edit'
        },
        children:[
          { 
            path: '/comment/all_comment', 
            name: 'all_comment',
            component: () => import('@/views/comment/all_comment.vue') 
          },
          { 
            path: '/comment/my_comment', 
            name: 'my_comment',
            component: () => import('@/views/comment/my_comment.vue') 
          }
        ]
      }
    ]
  },
  { 
    path: '/element_register', 
    name: 'element_register',
    component: () => import('@/views/ElementRegister.vue') 
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
    return '/element_register'
  }
})

export default router
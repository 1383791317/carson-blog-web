import { createRouter, createWebHistory } from 'vue-router'
// import setting from './modules/setting'
// import Table from './modules/Table'
// import dashboard from './modules/dashboard'
// import modularPackage from './modules/modularPackage'
// import documents from './modules/documents'
// import threeDimensional from './modules/threeDimensional'



export const constantRoutes = [
  {
    path:'/login',
    component: () => '',
    hidden:true
  },
  {
    path:'/',
    component:()=>import("@/views/index/index.vue"),
    name: 'home',
    meta:{
      title: '首页',
      icon:'home'
    }
  },
  {
    path:'/category/:id',
    component:()=>import("@/views/category/index.vue"),
    name: 'category',
  },
  {
    path:'/article/:id',
    component:()=>import("@/views/article/index.vue"),
    name: 'article',
  },
  {
    path:'/tag/:id',
    component:()=>import("@/views/tag/index.vue"),
    name: 'tag',
  },
]


// 动态路由
export const  adminList = [
//   dashboard,
//   Table,
//   threeDimensional,
//   setting,
//   modularPackage,
//   documents
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[...constantRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})



/**
 * 重置路由
 */
// export function resetRouter() {
//   const newRouter = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: constantRoutes
//   })

//   router.matcher = newRouter.currentRoute.value.matched
// }

export default router
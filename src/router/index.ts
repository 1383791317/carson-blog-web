import { createRouter, createWebHashHistory } from 'vue-router'

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
    meta:{title: '首页'}
  },
  {
    path:'/category/:id/:tag_id?',
    component:()=>import("@/views/article/category.vue"),
    meta: {title:'分类'},
    name: 'category',
  },
  {
    path:'/article/:id',
    component:()=>import("@/views/article/detail.vue"),
    name: 'article',
  },
  {
    path:'/tool/fanqie',
    component:()=>import("@/views/tool/fanqie.vue"),
    name: 'tool_fanqie',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:[...constantRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})


export default router
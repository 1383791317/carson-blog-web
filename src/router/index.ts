import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue';

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
    path:'/category/:id',
    component:()=>import("@/views/category/index.vue"),
    meta: {title:'分类'},
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

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:[...constantRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})



export async function setupRouter(app: App) {
  app.use(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router
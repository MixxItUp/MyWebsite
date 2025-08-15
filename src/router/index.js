import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import GiteeView from '../views/GiteeView.vue'
import Icon from '@/views/Icon.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/gitee',
      name:'gitee',
      component: GiteeView
    }
  ]
})
// const router = createRouter({
//   history: createWebHashHistory(import.meta.env.BASE_URL),
//   routes : [
//     { path: '/', component: () => import('./src/views/Home.vue') },
//     { path: '/about', component: () => import('./src/views/About.vue') },
//     { path: '/projects', component: () => import('./src/views/Projects.vue') },
//     { path: '/contact', component: () => import('./src/views/Contact.vue') },
//   ]
// })

// export default router


export default router

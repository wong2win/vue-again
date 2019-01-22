import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: HelloWorld , props:{msg: "Welcome to Your Vue.js App"}},
    {
      path: '/cart',
      component: () =>  import('@/homeworks/Homework2')
    }, 
    {
      path: '/store',
      component: () =>  import('@/homeworks/Test4Slot')
    },
    {
      path: '/hw233',
      component: () => import('@/homeworks/Homework233')
    }
  ]
})

// 管你的，我就要一把梭
// const router = new VueRouter({
//   routes
// })

// export default router
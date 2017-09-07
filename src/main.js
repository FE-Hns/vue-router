// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/**
 * router.beforeEach((to,from,next))
 * to:必填参数，表示to的路由信息
 * form：必填参数，表示from的路由信息
 * next，是一个函数，必须让他执行
 * next()，常规用法，会执行
 * next(false)，停止路由的执行
 * next('/path')，通过条件判断然后让当前路由跳转到某个路由
 */
// router.beforeEach((to,from,next)=> {
//   console.log('global beforeEach')
//   console.log(from)
//   console.log(to);
//   if (to.path==="/c") {
//     next('/404')
//   }else{

//     next();
//   }
// })
// router.beforeResolve((to,from,next)=>{
//   console.log('全局 异步组件加载完毕')
//   next()
// })
// router.afterEach((to,from)=>{
//   console.log(from)
//   console.log(to)
// })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

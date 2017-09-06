// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
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
router.afterEach((to,from)=>{
  console.log(from)
  console.log(to)
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'

// 这次我们使用路由的懒加载
const Home = resolve => require(['../components/Home.vue'], resolve);
const Child1 = resolve => require(['../components/Child1.vue'], resolve);
const Child2 = resolve => require(['../components/Child2.vue'], resolve);
const Child3 = resolve => require(['../components/Child3.vue'], resolve);


// 懒加载组件
const MyHeader = resolve => require(['../components/MyHeader.vue'], resolve);
const Main = resolve => require(['../components/Main.vue'], resolve);
const SiderBar = resolve => require(['../components/Sider.vue'], resolve);
// 懒加载组件
const Father = resolve => require(['../components/Father.vue'],resolve);
const A = resolve => require(['../components/A.vue'],resolve);
const B = resolve => require(['../components/B.vue'],resolve);
const C = resolve => require(['../components/C.vue'],resolve);
const D = resolve => require(['../components/D.vue'],resolve);
Vue.use(Router)

export default new Router({
    // 动态路由部分
    // routes: [
    //   {
    //     path: '/user/:id',
    //     name: 'user',
    //     component: User
    //   },
    //   {
    //     path:'/',
    //     name:'hello',
    //     component:Hello
    //   }
    // ]
    // 高级动态路由部分
    /*mode: 'history',
    base: __dirname,
    routes: [
        { path: '/' },
        // params are denoted with a colon ":"
        { path: '/params/:foo/:bar' },
        // a param can be made optional by adding "?"
        { path: '/optional-params/:foo?' },
        // a param can be followed by a regex pattern in parens
        // this route will only be matched if :id is all numbers
        { path: '/params-with-regex/:id(\\d+)' },
        // asterisk can match anything
        { path: '/asterisk/*' },
        // make part of th path optional by wrapping with parens and add "?"
        { path: '/optional-group/(foo/)?bar' },
    ]*/
    // 嵌套路由部分，所谓嵌套路由，就是路由中有路由
    // linkActiveClass:'active',
    /*routes: [
        {
          path:'',
          name:'',
          component:Hello
        },
        { path: '/home', 
          name: 'home', 
          component: Home,
          children:[
            {
              path:'child1',
              name:'child1',
              component:Child1
            },
            {
              path:'child2',
              name:'child2',
              component:Child2
            },
            {
              path:'child3',
              name:'child3',
              component:Child3
            },
          ]
        }
    ]*/
    // 命名式路由，给路由起一个名字，我们一直都在这么写，只是忽略了该怎么使用它，其实用法很简单
    // 之前我们router-link传递的参数是path，这一次我们传递一个name就好了。
    // 之所以要改写是因为，我想传递一个params，这就需要动态路由的写法了
    /*routes:[
      {
        path:'',
        component:Hello
      },
      // {
      //   path:'/home',
      //   component:Home
      // },
      {
        path:'/home/:userId?',
        name:'home',
        component:Home
      }
    ]*/
    // 命名视图
    /*routes: [{
        path: '/',
        components: {
            default: MyHeader,
            siderBar:SiderBar,
            main:Main
        }
    }]*/
    /*routes:[
      {
        path:'/',
        component:Father,
        children:[
          {
            path:'',
            components:{
              a:A,
              b:B,
              c:C,
              d:D
            }
          }
        ]
      }
    ]*/
    // 重定向和别名
})
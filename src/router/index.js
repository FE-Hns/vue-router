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
const Father = resolve => require(['../components/Father.vue'], resolve);
const A = resolve => require(['../components/A.vue'], resolve);
const B = resolve => require(['../components/B.vue'], resolve);
const C = resolve => require(['../components/C.vue'], resolve);
const D = resolve => require(['../components/D.vue'], resolve);

const Nav = resolve => require(['../components/Nav.vue', resolve]);
const Com404 = resolve => require(['../components/404.vue'], resolve);
// import A from '../components/A.vue'
// import B from '../components/B.vue'
// import C from '../components/C.vue'
// import D from '../components/D.vue'


const XHome = resolve => require(['../components/X-home.vue'], resolve);
const XParent = resolve => require(['../components/X-parent.vue'], resolve);
const XDefault = resolve => require(['../components/X-default.vue'], resolve);
const XFoo = resolve => require(['../components/X-foo.vue'], resolve);
const XBar = resolve => require(['../components/X-bar.vue'], resolve);
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
    /*routes:[
      {
        path:'/a',
        component:A,
        meta:{
          requireAuth:true
        },
      },
      {
        path:'/b',
        component:B,
        meta:{
          requireAuth:true
        },
      },
      {
        path:'/c',
        component:C,
        // beforeEnter: (to, from, next) => {
        //   // ...
        //   console.log(from)
        //   console.log(to)
        //   next()
        // },
        meta:{
          requireAuth:true
        },
      },
      // 让d转到a
      {
        path:'/d',
        component:D,
        redirect:'/a'
      },
      {
        path:'/404',
        component:Com404,
      }
    ]*/
    linkActiveClass:'active',
    mode: 'history',
    routes: [{
            path: '/',
            component: XHome
        },
        {
            path: '/parent',
            component: XParent,
            children: [{
                    path: '',
                    component: XDefault,
                },
                {
                    path: 'foo',
                    component: XFoo,
                    meta: {
                        scrollTop: true
                    }
                },
                {
                    path: 'bar',
                    component: XBar
                },
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
      // 这个功能必须开启history模式，不然无效
        // 我们发现这个savedPosition，储存着页面刚才滚动条的位置信息
        // console.log(savedPosition)
        // 不管三七二十一全部让他滚到300的位置
        return {
          x:0,
          y:300
        }
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     const position = {}
        //     if (to.hash) {
        //         position.selector = to.hash;
        //     }
        //     if (to.matched.some(m => m.meta.scrollTop)) {
        //         position.x = 0;
        //         position.y = 300
        //     }
        //     return position;
        // }
        
    }
})
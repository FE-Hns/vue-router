<template>
  <div id="home">
      <header>
          <ul>
              <li>
                  <button @click="push($event.target)" data-name='child1'>转到child1</button>
              </li>
              <li>
                   <button @click="go($event.target)" data-name='child2'>后退1</button>
              </li>
              <li>
                   <button @click="replace($event.target)" data-name='child3'>重定向到 /</button>
              </li>
          </ul>
      </header>
      <router-view></router-view>
  </div>
</template>

<script>
import router from '../router/index'
export default {
    name:'home',
    methods:{
        push:function (target) {
            console.log(target.dataset.name)
            router.push({
                path:'/home/'+target.dataset.name,
                params:{
                    userId:'123'
                }
            })
        },
        go:function (target) {
            router.go(-1);
        },
        replace:function (target) {
            router.replace('/')
        }
    }
}
</script>

<style lang="less">
#home {
    ul{
        li {
            list-style: none;
        }
    }
}





























</style>

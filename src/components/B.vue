<template>
  <transition>
    <div>
      <h2>B组件</h2>
    </div>
  </transition>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    console.log(this)  //undefined，不能用this来获取vue实例;但其实是可以获取到this的
    console.log('组件路由勾子：beforeRouteEnter')
    next(vm => {
      console.log(vm)  //vm为vue的实例
      console.log('组件路由勾子beforeRouteEnter的next')
    })
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    // ...
    console.log('beforeRouteLeave')
    next()
  }
}
</script>

<style>

</style>

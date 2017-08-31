<template>
  <div id="hello">
    我是hello
    <router-link to="/home">到home页</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  width: 100%;
  height: 100%;
  background: yellow;
  font-size: 20px;
}
</style>

<template>
  <div id="app">
    <!-- 动态路由，例如有一个user组件，放着所有user的信息，也就是所有不同的id都可以进入这个组件 -->
    <!-- <router-link to="/user/Neisun">Neisun</router-link>
          <router-link to="/user/David">David</router-link>
          <router-view></router-view> -->
    <!-- 高级动态路由部分 -->
    <!-- <h1>Route Matching</h1>
            <ul>
              <li><router-link to="/">/</router-link></li>
              <li><router-link to="/params/foo/bar">/params/foo/bar</router-link></li>
              <li><router-link to="/params/123/456">/params/123/456</router-link></li>
              <li><router-link to="/optional-params">/optional-params</router-link></li>
              <li><router-link to="/optional-params/foo">/optional-params/foo</router-link></li>
              <li><router-link to="/params-with-regex/123">/params-with-regex/123</router-link></li>
              <li><router-link to="/params-with-regex/abc">/params-with-regex/abc</router-link></li>
              <li><router-link to="/asterisk/foo">/asterisk/foo</router-link></li>
              <li><router-link to="/asterisk/foo/bar">/asterisk/foo/bar</router-link></li>
              <li><router-link to="/optional-group/bar">/optional-group/bar</router-link></li>
              <li><router-link to="/optional-group/foo/bar">/optional-group/foo/bar</router-link></li>
            </ul>
            <p>Route context</p>
            <pre>{{ JSON.stringify($route, null, 4) }}</pre> -->
    <!-- 嵌套路由部分 -->
    <!-- <router-view></router-view> -->
    <!-- 命名路由部分
        <router-view class="view one"></router-view>
        <router-view class="view two" name="main"></router-view>
        <router-view class="view three" name="siderBar"></router-view> -->
    <!-- 稍微复杂一些的命名式路由 -->
    <!-- <router-view></router-view> -->
    <!-- 重定向和别名 -->
    <!-- <router-link to="/a">/a</router-link>
    <router-link to="/b">/b</router-link>
    <router-link to="/c">/c</router-link>
    <router-link to="/d">/d</router-link>
    <button @click="go">go</button> -->
    <!-- <transition name="fade" mode="out-in"> -->
      <ul>
        <li><router-link to="/" >/</router-link></li>
        <li><router-link to="/parent" >/parent</router-link></li>
        <li><router-link to="/parent/foo">/parent/foo</router-link></li>
        <li><router-link to="/parent/bar">/parent/bar</router-link></li>
      </ul>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- </transition> -->
  </div>
</template>

<script>
import router from "./router/index"
export default {
  name: 'app',
  data:function () {
    return {
      // transitionName:'slide-left',
    }
  },
  watch: {
    // '$route':function (to,from) {
    //   var toDepth = to.path.split('/').length;
    //   var fromDepth = from.path.split('/').length;
    //   console.log(toDepth)
    //   console.log(fromDepth)
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    // }
  },
  methods: {
    go: function() {
      router.replace('/b', function() {
        console.log('ok!')
      }, function() {
        console.log('no!')
      })
    }
  }
}
</script>

<style lang="less">
@import url('./common/index.css');
#app {
  height: 100%;
  .one {
    height: 10%;
  }
  .two {
    height: 90%;
    float: left;
    width: 20%;
  }
  .three {
    height: 90%;
    float: left;
    width: 80%;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.active {
  color:orangered;
}
</style>

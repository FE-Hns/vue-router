<template>
  <div>
      <h1>Father</h1>
      <router-view name="a" class="a"></router-view>
      <router-view name="b" class="b"></router-view>
      <router-view name="c" class="c"></router-view>
      <router-view name="d" class="d"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
h1 {
    background: lightpink;
    text-align: center;
}
.base (@color) {
    width: 25%;
    background: @color;
    float: left;
}
.a {
    .base(green)
}
.b{
    .base(yellow)
}
.c {
    .base(blue)
}
.d {
    .base(red)
}
</style>

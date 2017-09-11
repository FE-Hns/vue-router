<template>
  <!-- <transition name="color"> -->
    <div>
      <h2>A组件</h2>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {

}
</script>

<style>
.color-enter-active,
.color-leave-active {
  transition: color 2s ease;
}

.color-enter,
.color-leave-to {
  color: red;
}

.color-enter-to,
.color-leave {
  color: #000;
}
</style>

<template>
    <!-- <transition name="slide"> -->
        <h1>
            啊哦，你找的页面不存在哦！
        </h1>
    <!-- </transition> -->
</template>
<script>
export default {

}
</script>
<style lang="less">
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}

.slide-enter {
    transform: translateX(-200px);
}

.slide-enter-to {
    transform: translateX(0)
}

.slide-leave {
    transform: translateX(0)
}

.slide-leave-to {
    transform: translateX(200px)
}
</style>


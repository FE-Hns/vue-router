<template>
    <div>
        这里是parent页
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            transitionName: 'slide-right'
        }
    },
    watch: {
        '$route': function(to, from) {
            console.log(to);
            console.log(from)
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
        }
    }
}
</script>
<style lang="less">

.slide-right-enter-active,.slide-right-leave-active {
  transition: transform 1s ease;
}
.slide-right-enter{
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}


.slide-left-enter-active,.slide-left-leave-active {
  transition: transform 1s ease;
}
.slide-left-enter{
  transform: translateX(0);
}
.slide-left-enter-to {
  transform: translateX(-100%);
}
</style>



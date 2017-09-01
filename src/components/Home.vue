<template>
    <div id="home">
        <header>
            <ul>
                <li>
                    <!-- <button @click="push($event.target)" data-name='child1'>转到child1</button> -->
                    <button @click="test($event.target)" data-id="child1">child1</button>
                </li>
                <li>
                    <!-- <button @click="go($event.target)" data-name='child2'>后退1</button> -->
                    <button @click="test($event.target)" data-id="child2" >child2</button>
                </li>
                <li>
                    <!-- <button @click="replace($event.target)" data-name='child3'>重定向到 /</button> -->
                    <button @click="test($event.target)" data-id="child3" >child3</button>
                </li>
            </ul>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../router/index'
export default {
    name: 'home',
    methods: {
        push: function(target) {
            console.log(target.dataset.name)
            router.push({
                // path: '/home/' + target.dataset.name,
                name:'child1',
                query:{
                    user:'Neisun'
                }
            })
            console.log(this.$route)
        },
        go: function(target) {
            router.go(-1);
        },
        replace: function(target) {
            router.replace('/')
        },
        test:function (target) {
            router.push({
                name:'home',
                params:{
                    userId:target.dataset.id
                }
            })
            console.log(this.$route)
        }
    }
}
</script>

<style lang="less">
#home {
    ul {
        li {
            list-style: none;
        }
    }
}
</style>

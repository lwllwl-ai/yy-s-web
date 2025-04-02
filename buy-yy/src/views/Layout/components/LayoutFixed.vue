<script setup >

import { useScroll } from '@vueuse/core'
import  {useCategoryStore}  from "@/stores/category.js";


const categoryStore=useCategoryStore();

const { y }=useScroll(window)


</script>

<template>
    
    <div class="bigcon " :class="{show:y>238}" >
        <div class="container">
            <div class="logo">
                <img src="@/assets/images/8.gif" >
            </div>
            <ul class="app-header-nav">
                <!-- <li>
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">居家</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">美食</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">服饰</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">母婴</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">个护</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">严选</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">数码</RouterLink>
                </li>
                <div class="line1"><div></div></div>
                
                <li class="right1">
                    <RouterLink to="/">运动</RouterLink>
                </li>
                <li class="right2">
                    <RouterLink to="/">杂项</RouterLink>
                </li> -->
                <li v-for="item in categoryStore.categoryList" :key="item.id"><RouterLink :to="`/Category/${item.id}`" active-class="active">{{ item.name }}</RouterLink></li>
            </ul>
        </div>
    </div>
    
    
</template>

<style scoped lang="scss">
.active{
    color: #35959a;
    border-bottom: 1px solid #35959a;
}
.bigcon{
    transform: translateY(-100%);
    opacity: 0;
    &.show{
        position: fixed;
        top: 0;
        opacity: 1;
        width: 100%;
        transition: all 0.1s linear;
        z-index: 99;
    }
}
.container{
    width: 100%;
    height: 125px;
     position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
    background-color: #e7e1d1;
    border-bottom: 1px solid #e7e1d1;
    
    
    
}
.app-header-nav{
    display: flex;
    background: #71c9ce;
    padding-left: 290px;
    height: 125px;
    padding-top: 32px;
    
    
    
}
.line1{
    height: 85%;
    width: 20px;
    margin-left: 188px;
    margin-top: -10px;
    div{
     height: 100%;
     width: 3px;
     background-color: rgb(140, 132, 81);
    }
}

li{
    margin-right: 40px;
    text-align: center;
    font-size: 35px;
    padding-left: 9px;

}
.right1{

    padding-left: 1200px;
    position: absolute;
    // z-index: 1000;

}
.right2{

    padding-left: 1300px;
    position: absolute;
    // z-index: 1010;s
}
.logo{
    
    height: 133px;
    position: absolute;
    width: 195px;
    padding-left: 28px;
}
</style>
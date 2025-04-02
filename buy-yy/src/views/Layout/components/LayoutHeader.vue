<script setup>
import  {useCategoryStore}  from "@/stores/category.js";
import { useLink } from 'vue-router';

import CartStore from "./CartStore.vue";

const categoryStore=useCategoryStore();


const isLinkActive = (to) => {
    const { isActive } = useLink({ path: to });
    return isActive;
};
</script>

<template>
    
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <img src="@/assets/images/6.jpg" alt="">
                <RouterLink to="/"><p class="yang">羊肉贩卖</p></RouterLink>
            </h1>

            <ul class="app-header-nav">
                <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink active-class="active" :to="`/Category/${item.id}`" >{{ item.name }}</RouterLink>
                    
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- 头部购物车 -->
            <CartStore />
        </div>
    </header>
    
</template>


<style scoped lang='scss'>

.yang{
    color: rgba(221, 199, 180, 0.739);
    position: absolute;
    font-size: 29px;
    margin-left: 66px;
    margin-top: 28px;
}
.app-header {
    background: #cbf1f5;

    
    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;

        img {
            display: block;
            height: 200px;
            width: 100%;
            text-indent: -9999px;
            // background: url('@/assets/images/2.png') no-repeat center 18px / contain;
        }
    }


    .search {
        width: 170px;
        height: 32px;
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        line-height: 32px;

        .icon-search {
            font-size: 30px;
            margin-left: 5px;
        }

        input {
            width: 364px;
            padding-left: 5px;
            height: 56px;
            color: #5c5515;
            margin-top: -7px;
            margin-left: -70px;
        }
    }

    .cart {
        width: 50px;

        .curr {
            height: 32px;
            line-height: 32px;
            text-align: center;
            position: relative;
            display: block;

            .icon-cart {
                font-size: 22px;
            }

            em {
                font-style: normal;
                position: absolute;
                right: 0;
                top: 0;
                padding: 1px 6px;
                line-height: 1;
                background: $helpColor;
                color: #fff;
                font-size: 12px;
                border-radius: 10px;
                font-family: Arial;
            }
        }
    }
}

.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: -5px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;
            font-size: 20px;

            &:hover {
                color: #35959a;
                border-bottom: 1px solid #35959a;
            }
        }
       

    }
}
 .active {
            color: #35959a;
            border-bottom: 1px solid #35959a;
        }
</style>
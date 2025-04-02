
<script setup>
import { useCartStore } from '@/stores/cartshort.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const cartStore=useCartStore()
console.log(cartStore.cartList);
const router=useRouter()

</script>

<template>
    <div class="icon">
        <span class="iconfont icon-shengdangouwuche" >
            <div class="container">
                <ul >
                    <li v-for="item in cartStore.cartList">
                        <img :src="item.img" alt="">
                        <p>{{ item.name }}</p>
                        <p>{{ item.int }}</p>
                        <div class="del" @click="cartStore.del">
                            <p style="color: aliceblue; font-size: 50px;">&times;</p>
                        </div>
                        
                    </li>
                </ul>
                <div class="bottom">
                    <p>{{ cartStore.allcount }}</p>
                    <p>{{ cartStore.allprice }}</p>
                </div>
                <el-button @click="$router.push('/carList')">
                    去购物车结算
                </el-button>
            </div>
        </span>
    </div>
    
</template>
<style scoped lang="scss">
.bottom{
    background-color: white;
}
.icon{
    position: absolute;
    top: 61px;
    right: -162px;
    .iconfont{
        font-size: 67px !important;
        &:hover{
            .container{
                background-color: rgb(30, 62, 52);   
                opacity: 1;
            }
            
                
        }
    }
}
.container{
    opacity: 0;
    position: absolute;
    height: 300px;
    width: 100px;
    background-color: aquamarine;
    
}
ul{
    li{
        img{
            height: 20px;
            width: 20px;
        }
        .del{
            height: 50px;
            width: 50px;
            background-color: rgb(181, 187, 187);
        }
        font-size: 5px;

    }
}
</style>


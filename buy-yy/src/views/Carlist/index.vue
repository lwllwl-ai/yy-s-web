
<script setup>
import { useCartStore } from '@/stores/cartshort.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter()

const cartStore=useCartStore()
console.log(cartStore.cartList);

console.log(cartStore.isAll);
const selected=(item,event)=>{
        console.log(item);
        item.select=event
    }


</script>

<template>
    <div class="icon">
        
            <div class="container">
                <el-checkbox :model-value="cartStore.isAll" @change="cartStore.checkAll"/>
                <ul >
                    <li v-for="item in cartStore.cartList">
                        <img :src="item.img" alt="">
                        <p>{{ item.name }}</p>
                        <p>{{ item.int }}</p>
                        <div class="del" @click="cartStore.del">
                            <p style="color: aliceblue; font-size: 50px;">&times;</p>
                        </div>
                        <el-checkbox :model-value="item.select" @change="(event)=>selected(item,event)" />
                    </li>
                </ul>
                <div class="bottom">
                    <p>{{ cartStore.checkCount }}</p>
                    <p>{{ cartStore.checkPrice }}</p>
                </div>
                <el-button @click="$router.push('/checkout')">点击结算</el-button>
            </div>
        
    </div>
    
</template>
<style scoped lang="scss">
.bottom{
    background-color: white;
}
.icon{
    // position: absolute;
    top: 61px;
    right: -162px;
    
}
.container{
    
    // position: absolute;
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


<template>
    <div>
        <div>
            <ul>
                <li >
                    <div>
                    <img :src="fushiList[num-1].img" alt="">
                    </div>
                    <p>{{ fushiList[num-1].name }}</p>
                    <p>{{ fushiList[num-1].introduce }}</p>
                    
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in hotlist" :key="index">
                    <p>{{ item.title }}</p>
                    <div>
                    <img :src="item.img" alt="">
                    </div>
                    <p>{{ item.name }}</p>
                    <p>{{ item.introduce }}</p>
                    <p>{{ item.price }}</p>
                </li>
            </ul>
        </div>
        <div class="big">
            <ul>
                <li v-for="(img,i) in fushiList[num-1].detailimg" :key="i" @mouseenter="enterhander(i)" :class="{active:activeindex===i}">
                    <img :src="img" alt="">
                     
                </li>
            </ul>
            <!-- 左侧大图 -->
            <div class="biggerimg" ref="target" >
                <img :src="fushiList[num-1].detailimg[activeindex]" alt="">
                <!-- 蒙块小图 -->
                <div class="layer" :style="{ top:`${top}px`,left:`${left}px` }" v-show="!isOutside"></div>
                
                 
            </div>
            <!-- 放大图 -->
            <div class="large" :style="[
                    {
                        backgroundImage:`url(${fushiList[num-1].detailimg[activeindex]})`,
                        backgroundPositionX:`${positionx}px`,
                        backgroundPositionY:`${positiony}px`,
                        backgroundSize:`800px 800px`
                    }
            ]" v-show="!isOutside"></div>
        </div>
        <el-input-number v-model="count"  @change="handleChange" />
        <el-button @click="addCar" class="button">
            加入购物车
        </el-button>
    </div>
    <p class="ll">
         {{ elementY }}
         {{ elementX }}
         {{ isOutside }}
    </p>
   
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { fushiList , hotlist } from '@/views/Detailes/sharedData.js'
import { useMouseInElement } from '@vueuse/core';
import { useCartStore } from "@/stores/cartshort";

//数字输入框
const count=ref(1)
const handleChange=()=>{
    console.log(count.value);   
}   
const CartStore=useCartStore()
const addCar=()=>{
    CartStore.addCart({
        img:fushiList.value[num.value-1].img,
        name:fushiList.value[num.value-1].name,
        int:fushiList.value[num.value-1].introduce,
        skuId:fushiList.value[num.value-1].skuId,
        count:1,
        price:fushiList.value[num.value-1].price,
        select:fushiList.value[num.value-1].select
    })
    // console.log(fushiList.value[num.value-1].introduce);
    // console.log(1);
    
}   


//获取鼠标在大图的位置
const target=ref(null)
const left=ref(0)
const top=ref(0)
const positionx=ref(0)
const positiony=ref(0)
const { elementX,elementY,isOutside }=useMouseInElement(target)
watch([elementX,elementY],()=>{
    
    if (elementX.value > 100 && elementX.value < 300) {
        left.value=elementX.value-100
    }
    if (elementX.value > 300 ) {
        left.value=200
    }
    if (elementX.value < 100 ) {
        left.value=0
    }
    if (elementY.value > 100 && elementY.value < 300) {
        top.value=elementY.value-100
        
    }
    if (elementY.value > 300 ) {
        top.value=200
    }
    if (elementY.value < 100 ) {
        top.value=0
    }
   
    positionx.value=-left.value * 2
    positiony.value=-top.value *2
    // console.log(top.value);
    // console.log(positiony.value);
    // console.log('fushiList[num - 1].detailimg:', fushiList.value[num.value - 1]?.detailimg);
})




const route=useRoute()
const num=ref([])
num.value=route.params.id
// console.log(num.value);
// console.log(fushiList.value);
// console.log(hotlist.value);
// console.log(fushiList.value[0].detailimg);

const activeindex=ref(0)
const enterhander=(i)=>{
    activeindex.value=i
    // console.log(activeindex.value);
    
}




</script>
<style scoped lang="scss">

button{
    position: absolute;
    top: 0px;
    right: 600px;
}
.large{
    height: 400px;
    width: 400px;
}
.ll{
    padding-right: 0px;
}
.biggerimg{
    position: absolute; 
    height: 400px;
    width: 400px;
    background-color: beige;
    top: 20px;
    left: 320px;
    img{
        height: 100%;
        width: 100%;
    }
    .layer{
        height: 200px;
        width: 200px;
        background-color: rgb(95, 94, 94);
        opacity: 0.5;
        position: absolute;
    }
}
.big{
    position: absolute;
    left: 300px;
    top: 261px;
    li{
        &.active{
            border:2px solid rgba(27, 159, 153, 0.776)
        }
    }
}
div{
    height: 300px;
    width: 300px;
}

</style>


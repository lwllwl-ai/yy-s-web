<script setup>
import Modle from './modle.vue'
import jpg1 from "@/assets/images/1.jpg"
import router from '@/router';
import { ref,onMounted } from 'vue';
import {getCategoryAPI} from '@/apis/Category.js'
import { useRoute } from 'vue-router';
import {sharedImageData} from '@/apis/imageData.js'

const route=useRoute()
const customl=ref([])
const CategoryAPI=async()=>{
    const res=await getCategoryAPI(route.params.id)
    customl.value=res.data.result.children.map(item=>item.id)
    console.log(customl.value);
    
}
onMounted(()=>CategoryAPI())

const productlist=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:1,
    
  },
  {
    img: '@/assets/images/5.gif',
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    
    id:2
  },
  {
    img: '@/assets/images/11.gif',
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    
    id:3
  },
  {
    img: '@/assets/images/11.gif',
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
   
    id:4
  },
  {
    img: '@/assets/images/11.gif',
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:5
  }
])





</script>

<template>

<div class="box1">
    <Modle :products="productlist"></Modle>
</div>
<div class="box2">
    <Modle :products="productlist"></Modle>
</div>
<div class="box3">
    <Modle :products="productlist"></Modle>
</div>
<div class="box4">
    <Modle :products="productlist"></Modle>
</div>
<div class="box5">
    <Modle :products="productlist"></Modle>
</div>
   

<ul >
    <li v-for="(item,index) in customl.slice(0, 5)" :key="item">
        <RouterLink :to="`/category/sub/${item}`">
            <img :src="sharedImageData.imageArray[index].imgPath" alt="">
        </RouterLink>
    </li>
</ul>



<p >清明限定 · 夠買后可发往地府</p>

</template>

<style scoped lang="scss">
ul{
                //background: aqua;
                width: 1382px;
                display: flex;
                flex-wrap: wrap;
                height: 293px;
                position: relative;
                top: 68px;
                right: -19px;
                background-color: white;
                li{
                    
                    padding-top: 50px;
                    img{
                        height: 168px;
                        width: 180px;
                        margin-left: 85px;
                    }
                }
            }
.box1{
    position: absolute;
    top:400px
}
.box2{
    position: absolute;
    top:730px
}
p{
    height: 304px;
    width: 1381px;
    background-color: white;
    position: absolute;
    top: 1711px;
    left: 18px;
    font-size: 96px;
    text-align: center;
    padding-top: 104px;
    }
.box3{
    position: absolute;
    top: 1061px;
    
}
.box4{
    position: absolute;
    top:1393px
    
}
.box5{
    position: absolute;
    top:2024px
    
}
</style>
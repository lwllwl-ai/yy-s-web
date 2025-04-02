<template>
    <div>
        <div>
            <div class="bread">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                    <el-breadcrumb-item >{{Categordata.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="banner">
                <el-carousel height="563px">
                    <el-carousel-item>
                        <img src="D:\源码2\buy-yy\src\assets\images\6.jpg"  class="img6">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="D:\源码2\buy-yy\src\assets\images\5.jpg" class="img5">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="D:\源码2\buy-yy\src\assets\images\4.gif" class="img4">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="component">
                <component :is="current"></component>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import jujia from '@/views/Category/components/jujia.vue'
import meishi from './components/meishi.vue'
import gehu from './components/gehu.vue'
import fushi from './components/fushi.vue'
import muying from './components/muying.vue'
import shuma from './components/shuma.vue'
import yanxuan from './components/yanxuan.vue'
import yundong from './components/yundong.vue'
import zaxiang from './components/zaxiang.vue'

import { ref,onMounted } from "vue";
import {getCategoryAPI} from '@/apis/Category.js';
import { useRoute } from 'vue-router'

const route=useRoute();
const Categordata=ref({});
const getCategor=async()=>{
    const res=await getCategoryAPI(route.params.id);
    Categordata.value=res.data.result;
    // console.log(res);
    // console.log(Categordata.value.name);
    console.log(route.params);
    
}
onMounted(()=>getCategor())

const current=ref(null)
const {id}=route.params

if (id==='1005000') {
    current.value=jujia
}
else if(id==='1005002'){
    current.value=meishi
}
else if(id==='1010000'){
    current.value=fushi
}
else if(id==='1011000'){
    current.value=muying
}
else if(id==='1013001'){
    current.value=gehu
}
else if(id==='1019000'){
    current.value=yanxuan
}
else if(id==='1043000'){
    current.value=shuma
}
else if(id==='109243029'){
    current.value=yundong
}
else if(id==='19999999'){
    current.value=zaxiang
}
</script>

<style scoped lang="scss">

    .banner{
        height: 563px;
        width: 1384px;
        position: relative;
        left: 20px;
        top: 16px;
        background-color: aliceblue;

        .img6{
            height: 100%;
            width: 100%;
        }
        .img5{
            height: 100%;
            width: 100%;
        }
        .img4{
            height: 100%;
            width: 100%;
        }
    }
    .component{
        position: relative;
        height: 2348px;
        top: 19px;
    } 

</style>
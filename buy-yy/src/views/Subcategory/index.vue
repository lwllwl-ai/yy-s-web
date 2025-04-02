<template>

    <div class="bread">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:`/category/${SubCategoryList.parentId}`}">{{SubCategoryList. parentName}} 
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>{{SubCategoryList.name}}
                    </el-breadcrumb-item> 
                </el-breadcrumb>
    </div>
    
    <div class="component">
        <component :is="current"></component>
    </div>
    
</template>
<script setup>
import { useRoute } from 'vue-router'
import {getSubCategoryAPI} from '@/apis/Category.js'
import {ref,onMounted} from 'vue'
import Meishi2 from './components/meishi2.vue'
import Fushi2 from './components/fushi2.vue'
import gehu2 from './components/gehu2.vue'
import jujia2 from './components/jujia2.vue'
import muying2 from './components/muying2.vue'
import shuma2 from './components/shuma2.vue'
import yanxuan2 from './components/yanxuan2.vue'
import yundong2 from './components/yundong2.vue'
import zaxiang2 from './components/zaxiang2.vue'

const router=useRoute()
const SubCategoryList=ref({})
const current=ref(null)
const SubCategoryAPI=async()=>{
    const res=await getSubCategoryAPI(router.params.id)
    SubCategoryList.value=res.data.result
    console.log(SubCategoryList.value);
    
const {parentId}=SubCategoryList.value

if (parentId==='1005000') {
    current.value=jujia2
}
else if(parentId==='1005002'){
    current.value=Meishi2
}
else if(parentId==='1010000'){
    current.value=Fushi2
}
else if(parentId==='1011000'){
    current.value=muying2
}
else if(parentId==='1013001'){
    current.value=gehu2
}
else if(parentId==='1019000'){
    current.value=yanxuan2
}
else if(parentId==='1043000'){
    current.value=shuma2
}
else if(parentId==='109243029'){
    current.value=yundong2
}
else if(parentId==='19999999'){
    current.value=zaxiang2
}
console.log(SubCategoryList.value.parentId);

}
onMounted(()=>SubCategoryAPI())


</script>
<style scoped>
.component{
    height: 900px;

}
</style>
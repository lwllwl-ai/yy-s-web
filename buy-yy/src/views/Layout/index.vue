

<script setup>

import LayoutNar from './components/LayoutNar.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue'
import  {useCategoryStore}  from "@/stores/category.js";
import { onMounted } from "vue";

const categoryStore=useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})
</script>
<template>
    
    <LayoutNar />
    <LayoutHeader />
    <RouterView :key="$route.fullPath"/>
    <LayoutFooter />
    <LayoutFixed />
</template>
<style scoped>
</style>
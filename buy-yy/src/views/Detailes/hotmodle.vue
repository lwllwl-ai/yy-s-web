<template>
    <div>
        <div class="modle">
            <ul>
                
                <li v-for="(item,index) in products" :key="index">
                    <RouterLink :to="`/detail/${item.id}`">
                        <p>{{ item.title }}</p>
                        <img :src="item.img" alt="">
                        <p>{{ item.name }}</p>
                        <small>{{ item.introduce }}</small>
                        <p>{{ item.price }}</p>
                    
                    </RouterLink>
                </li>
            </ul>    
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
const props= defineProps({
    products:{
        type:Array,
        default:()=>[]
    } 
})
</script>
<template>
    <div>
        <div class="modle">
            <ul>
                
                <li v-for="(item,index) in products" :key="index">
                    <RouterLink :to="`/detail/${item.id}`">
                    
                        <img :src="item.img" alt="">
                        <p>{{ item.p }}</p>
                        <small>{{ item.small }}</small>
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

<style scoped lang="scss">
.modle{
            position: absolute;
            left: -9px;
            padding-left: 81px;

            ul{
                //background: aqua;
                width: 1382px;
                display: flex;
                flex-wrap: wrap;
                height: 304px;
                position: relative;
                top: -10px;
                right: 54px;
                background-color: white;
                li{
                    
                    padding-top: 50px;
                    img{
                        height: 168px;
                        width: 180px;
                        margin-left: 85px;
                    }
                    p:nth-of-type(1){
                        font-size: 22px;
                        text-align: center;
                        width: 200px;
                        position: relative;
                        left: 75px;
                    }
                    small{
                        font-size: 10px;
                        position: relative;
                        left: 137px;
                    }
                    p:nth-of-type(2){
                        font-size: 20px;
                        color: brown;
                        text-align: center;
                        width: 200px;
                        position: relative;
                        left: 74px;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
</style>
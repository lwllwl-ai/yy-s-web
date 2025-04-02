<template>

    <Homepanel title="yy极力推荐" subtitle="十分值得" img1="src\assets\images\5.jpg"
    img2="src\assets\images\5.jpg" img3="src\assets\images\5.jpg" p1="yy二手衬衫" p2="yy二手袜子" 
    p3="yy二手头发" r1="158.00"  r3="2.00">
    
    </Homepanel>
    <p>1000000.00</p>
</template>

<script setup>
 
import Homepanel from "./Homepanel.vue";
    
</script>

<style scoped lang="scss"> 
    p{
        color: #c26060;
        position: absolute;
        left: 632px;
        top: 1369px;
        font-size: 29px;
            &:hover{
                text-decoration: underline;
                transform: scale(1.1);
                cursor: grab;
            }
            &:active{
                    cursor:grabbing
                }
    }
</style>
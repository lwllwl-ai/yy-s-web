<script setup>
    defineProps({
        title:{
            type:String
        },
        subtitle:{
            type:String
        },
        img1:{
            type:String
        },
        img2:{
            type:String
        },
        img3:{
            type:String
        },
        p1:{
            type:String
        },
        p2:{
            type:String
        },
        p3:{
            type:String
        },
        r1:{
            type:String
        },
        r2:{
            type:String
        },
        r3:{
            type:String
        },

    })
</script>

<template>
    <div class="container">
        
        <div class="title">
            <h1>
                <p>{{ title }}</p>
                <small>{{ subtitle }}</small>
            </h1>
        </div>
        <div class="body">
            <div class="img1">
                <img :src="img1" alt="">
                <p>{{p1}}</p>
                <p>{{ r1 }}</p>
            </div>
            <div class="img2">
                <img :src="img2" alt="">
                <p>{{p2}}</p>
                <p>{{ r2 }}</p>
            </div>
            <div class="img3">
                <img :src="img3" alt="">
                <p>{{p3}}</p>
                <p>{{ r3 }}</p>
            </div>

        </div>
        
    </div>
</template>

<style scoped lang="scss">

    .container{
        height: 575px;
        width: 1416px;
        /* background-color: aqua; */
        h1{
            display: flex;
            p{
                font-size: 48px;
                margin-left: 12px;
                color: #3ba1a1;
            }
            small{
                font-size: 22px;
                margin-top: 30px;
                margin-left: 17px;
                color:  #8cc3af;
            }
        }
        .body{
            display: flex;
            .img1,
            .img2,
            .img3{
                transition: all 0.3s ease;
                :hover{
                    transform: scale(1.1);
                    cursor: grab;
                    
                }
                :active{
                    cursor:grabbing
                }
            }
            .img1 p,
            .img2 p,
            .img3 p{
                
                font-size: 29px;
                padding-left: 184px;
                color: #6a989d;
                padding-top: 20px;
                }
            .img1 p:last-child,
            .img2 p:last-child,
            .img3 p:last-child{
                color: #c26060;
                padding-left: 216px;
                &:hover{
                    text-decoration: underline;
                }
            }
            img{
                margin-left: 65px;
                margin-top: 18px;
                height: 386px;
                width: 384px;
                :hover{
                    box-shadow: 0 5px 25px rgba($color: #07504e, $alpha: 1.0);
                }
            }
        }
    }
    
</style>
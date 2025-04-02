<script setup>
    defineProps({
        name:String,
        bigimg:String,
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        img5: String,
        img6: String,
        img7: String,
        img8: String,
        p1: String,
        p2: String,
        p3: String,
        p4: String,
        p5: String,
        p6: String,
        p7: String,
        p8: String,
        small1: String,
        small2: String,
        small3: String,
        small4: String,
        small5: String,
        small6: String,
        small7: String,
        small8: String,
        price1: String,
        price2: String,
        price3: String,
        price4: String,
        price5: String,
        price6: String,
        price7: String,
        price8: String
    })
</script>

<template>

    <div class="container">
        <p class="name">{{ name }}</p>
        <div class="leftbox">
            <img :src="bigimg" class="bigimg">
        </div>
        <div class="rightbox">
            <ul>
                <li>
                    <RouterLink to="/">
                        <img :src="img1" alt="">
                        <p>{{p1}}</p>
                        <small>{{small1}}</small>
                        <p>{{ price1 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img2" alt="">
                        <p>{{p2}}</p>
                        <small>{{small2}}</small>
                        <p>{{ price2 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img3" alt="">
                        <p>{{p3}}</p>
                        <small>{{small3}}</small>
                        <p>{{ price3 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img4" alt="">
                        <p>{{p4}}</p>
                        <small>{{small4}}</small>
                        <p>{{ price4 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img5" alt="">
                        <p>{{p5}}</p>
                        <small>{{small5}}</small>
                        <p>{{ price5 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img6" alt="">
                        <p>{{p6}}</p>
                        <small>{{small6}}</small>
                        <p>{{ price6 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img7" alt="">
                        <p>{{p7}}</p>
                        <small>{{small7}}</small>
                        <p>{{ price7 }}</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img :src="img8" alt="">
                        <p>{{p8}}</p>
                        <small>{{small8}}</small>
                        <p>{{ price8 }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .container{
        height: 600px;
        width: 1416px;
        position: relative;
        top: 18px;
        //background-color: aquamarine;
        .name{
            font-size: 50px;
            position: absolute;
            left: 15px;
            color: #3ba1a1;
        }
        .leftbox{
            .bigimg{
                transform: rotate(90deg);
                position: absolute;
                height: 448px;
                right: 934px;
                width: 602px;
                top: 80px;       
            } 
        }
        .rightbox{
            position: absolute;
            left: 250px;
            padding-left: 81px;

            ul{
                //background: aqua;
                width: 1086px;
                display: flex;
                flex-wrap: wrap;
                height: 519px;
                position: absolute;
                top: 41px;
                li{
                    img{
                        height: 200px;
                        width: 200px;
                        margin-right: 71px;
                    }
                    p:nth-of-type(1){
                        font-size: 22px;
                        text-align: center;
                        width: 200px;
                    }
                    small{
                        font-size: 10px;
                    }
                    p:nth-of-type(2){
                        font-size: 20px;
                        color: brown;
                        text-align: center;
                        width: 200px;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        
    }

</style>
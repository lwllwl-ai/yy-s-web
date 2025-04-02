
<script setup>
// 封装调用
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

</script>

<template>
    <div class="home-category">

        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" class="bigli">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <div class="min">
                    <RouterLink v-for="i in item.children.slice(0,2)" to="/">{{ i.name }}</RouterLink>
                </div>
                <div class="layer">
                    <ul>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p>杨鑫的二手泡面</p>
                                    <p>泡面的介绍</p>
                                    <p>1000.00</p>
                                </div>
                            </RouterLink>
                        </li>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p class="p1">杨鑫的二手泡面</p>
                                    <p class="p2">泡面的介绍</p>
                                    <p class="price">1000.00</p>
                                </div>
                                
                            </RouterLink>
                        </li>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p>杨鑫的二手泡面</p>
                                    <p>泡面的介绍</p>
                                    <p>1000.00</p>
                                </div>
                                
                            </RouterLink>
                        </li>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p>杨鑫的二手泡面</p>
                                    <p>泡面的介绍</p>
                                    <p>1000.00</p>
                                </div>
                                
                            </RouterLink>
                        </li>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p>杨鑫的二手泡面</p>
                                    <p>泡面的介绍</p>
                                    <p>1000.00</p>
                                </div>
                                
                            </RouterLink>
                        </li>
                        <li class="smallli">
                            <RouterLink to="/">
                                <img src="@/assets/images/1.jpg" class="imgfox">
                                <div class="info">
                                    <p>杨鑫的二手泡面</p>
                                    <p>泡面的介绍</p>
                                    <p>1000.00</p>
                                </div>
                                
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>


<style scoped lang='scss'>
.home-category{
    position: relative;
    left:0;
}
.menu{
    height: 563px;
    width: 358px;
    background-color: #71c9ce;
    .bigli{
        line-height: 60px;
        font-size: 25px;
        padding-left: 5px;
        letter-spacing: 8px;
        
        &:hover{
            background-color: #64a0ba;
            .layer{
                display: block;
                z-index: 999;
                background-color: aliceblue;
            }
        }
        .layer{
            display: none;
            height: 563px;
            width: 1058px;
            position: absolute;
            right: -176px;
            top: 0px;
            ul{
                display: flex;
                flex-wrap: wrap;
                .smallli{
                    width: 256px;
                    height: 300px;
                    position: relative;
                    top: -18px;
                    .imgfox{
                        height: 150px;
                        width: 150px;
                        position: relative;
                        left: 129px;
                        top: 41px;
                    }
                    .info{
                        height: 90px;
                        width: 90px;
                        position: relative;
                        left: 170px;
                        font-size: 16px;
                        top: 45px;
                        line-height: 17px;

                        p:first-child{
                            font-size: x-small;
                            width: 120px;
                            margin-left: -10px;
                        }

                        p:nth-child(2){
                            font-size: x-small;
                        }
                        p:nth-child(3){
                            font-size: 21px;
                            letter-spacing: 1px;
                            color: #ed6565;
                            margin-left: -7px;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }

                
            }
            
            // .info{
            //     
            // }
    }
    }
    .min{
            background-color: #64a0ba;
            height: 2px;
        a{
            position: relative;
            font-size: 17px;
            left: 86px;
            top: -62px;
        }
        
    }
    
    
}
</style>

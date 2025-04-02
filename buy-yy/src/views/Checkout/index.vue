<template>
    <div class="container">
        <div class="homename">
            <!-- <p>收货信息</p>
            <br>
            <el-input v-model="adress" placeholder="收货地址"/>
            <br>
            <el-input v-model="people" placeholder="收货人"/>
            <br>
            <el-input v-model="phone" placeholder="联系方式"/>
            <br> -->
            <p>收货地址:{{ adress }}</p>
            <p>收货人:{{ people }}</p>
            <p>联系方式:{{ phone }}</p>
            <el-button @click="clickshow">地址切换</el-button>
            <el-button>确认修改</el-button>
        </div>
        <div class="goods">
            <p>商品信息</p>
            <small>商品信息</small>
            <small>单价</small>
            <small>数量: {{ CartStore.checkCount }}</small>
            <small>小计：{{ CartStore.checkPrice }}</small>
            <small>实付: {{ CartStore.checkPrice }}</small>
        </div>
        <div>
            <li v-for="item in CartStore.cartList">
                <img :src="item.img" alt="">
                <p>{{ item.name }}</p>
                <p>{{ item.price }}</p>
                <p>{{ item.count }}</p>
                
            </li>
        </div>
        <div class="time"> 
            <p>配送时间</p>
        </div>
        <div class="payway">
            <p>支付方式</p>
        </div>
        <el-dialog v-model="showdialog" title="切换收货地址">
            <div >
                <ul v-for="i in adresslist" :key="index" @click="switchAdress(i)" :class="{active:activeadress.id===i.id}">
                    <li >
                        <p>{{ i.adress }}</p>
                        <p>{{ i.people }}</p>
                        <p>{{ i.phone }}</p>
                    </li>
                </ul>
            </div>
            <el-button @click="handleyes">确认</el-button>
            <el-button @click="showdialog=false">取消</el-button>

        </el-dialog>
        <el-button @click="$router.push('/pay')">提交订单</el-button>
    </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartshort'
import { ref } from 'vue';
import { adresslist } from './adress'
import { useRouter } from 'vue-router';

const router=useRouter()

const CartStore=useCartStore()
const adress=ref('我的家')
const people=ref('yy')
const phone=('123456789')

const showdialog=ref(false)
const clickshow=()=>{
    showdialog.value=true
}

const activeadress=ref({})
const switchAdress=(item)=>{
   
    activeadress.value=item
    console.log(activeadress.value);
}

const handleyes=()=>{
    showdialog.value=false
    adress.value=activeadress.value.adress
    people.value=activeadress.value.people
    phone.value=activeadress.value.phone
}
</script>
<style scoped>
.active{
    background-color: aqua;
}


</style>
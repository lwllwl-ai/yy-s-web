<script setup> 
import modle from '@/views/Category/components/modle.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import jpg1 from "@/assets/images/1.jpg"
import jpg2 from "@/assets/images/2.jpg"
const m1=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着个护脚冷',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黄色衣服',
    small: 'yy穿着个护谎报',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着个护有活力',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着个护阴暗',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着个护开朗',
    price: '100.00'
  }
])
const m2=ref([
{
    img: jpg2,
    p: '粉色衣服',
    small: 'yy穿着个护脚冷',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黄色衣服',
    small: 'yy穿着个护谎报',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着个护有活力',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着个护阴暗',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着个护开朗',
    price: '100.00'
  }
])
const m3=ref([
{
    img: jpg2,
    p: '粉色衣服',
    small: 'yy穿着个护脚冷',
    price: '100.00'
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着个护谎报',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着个护有活力',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着个护阴暗',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着个护开朗',
    price: '100.00'
  }
])
const m4=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着个护脚冷',
    price: '100.00'
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着个护谎报',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着个护有活力',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着个护阴暗',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着个护开朗',
    price: '100.00'
  }
])
const m5=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着个护脚冷',
    price: '100.00'
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着个护谎报',
    price: '100.00'
  },
  {
    img: jpg1,
    p: '绿色衣服',
    small: 'yy穿着个护有活力',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着个护阴暗',
    price: '100.00'
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着个护开朗',
    price: '100.00'
  }
])
const route=useRoute()
const Arrm=ref([])

switch (route.params.id) {
    case '1009000':
        Arrm.value=m1.value
        break;
    case '1020002':
        Arrm.value=m2.value
        break;
    case '109243016':
        Arrm.value=m3.value
        break;
    case '109256012':
        Arrm.value=m4.value
        break;
    case '109256013':
        Arrm.value=m5.value
        break;  
    default:
        break;
}
console.log('id:',route.params.id);



</script>
<template>
  <div>
    <modle :products="Arrm"></modle>
    <modle :products="Arrm"></modle>
    <modle :products="Arrm"></modle>
  </div>
    
</template>
<style scoped lang="scss">
div{
  margin-top: 29px;
  padding-bottom: 275px;
}
</style>
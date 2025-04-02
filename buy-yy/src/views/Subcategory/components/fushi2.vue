<script setup> 
import modle from '@/views/Category/components/modle.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import jpg1 from "@/assets/images/1.jpg"
import jpg2 from "@/assets/images/2.jpg"
const bag=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:6
  },
  {
    img: jpg2,
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    id:7
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    id:8
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
    id:9
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:10
  }
])
const shose=ref([
{
    img: jpg2,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:11
  },
  {
    img: jpg2,
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    id:12
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    id:13
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
    id:14
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:15
  }
])
const relax=ref([
{
    img: jpg2,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:16
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    id:17
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    id:18
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
    id:19
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:20
  }
])
const sport=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:21
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    id:22
  },
  {
    img: jpg2,
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    id:23
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
    id:24
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:25
  }
])
const double=ref([
{
    img: jpg1,
    p: '粉色衣服',
    small: 'yy穿着十分脚冷',
    price: '100.00',
    id:26
  },
  {
    img: jpg1,
    p: '黄色衣服',
    small: 'yy穿着十分谎报',
    price: '100.00',
    id:27
  },
  {
    img: jpg1,
    p: '绿色衣服',
    small: 'yy穿着十分有活力',
    price: '100.00',
    id:28
  },
  {
    img: jpg2,
    p: '黑色衣服',
    small: 'yy穿着十分阴暗',
    price: '100.00',
    id:29
  },
  {
    img: jpg2,
    p: '蓝色衣服',
    small: 'yy穿着十分开朗',
    price: '100.00',
    id:30
  }
])
const route=useRoute()
const Arr=ref([])

switch (route.params.id) {
    case '109303000':
        Arr.value=bag.value
        break;
    case '109311005':
        Arr.value=shose.value
        break;
    case '109311006':
        Arr.value=relax.value
        break;
    case '109311007':
        Arr.value=sport.value
        break;
    case '109315000':
        Arr.value=double.value
        break;  
    default:
        break;
}
console.log('id:',route.params.id);
console.log(Arr.value);



</script>
<template>
  <div>
    <modle :products="Arr"></modle>
    <modle :products="Arr"></modle>
    <modle :products="Arr"></modle>
  </div>
    
</template>
<style scoped lang="scss">
div{
  margin-top: 29px;
  padding-bottom: 275px;
}
</style>
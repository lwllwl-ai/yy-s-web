
import { ref } from "vue";
import img5 from '@/assets/images/5.jpg';
import img6 from '@/assets/images/6.jpg';
import img7 from '@/assets/images/7.jpg';
export  const fushiList=ref([
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服1号',
        introduce:'这是一号衣服',
        detailimg:[
            img5,
            img6,
            img7
    
        ],
        skuId:1,
        count:1,
        price:100,
        select:true
    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服2号',
        introduce:'这是一号衣服',
        detailimg:[
            img5,
            img6,
            img7
    
        ],
        skuId:2,
        count:1,
        price:100,
        select:true
    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服3号',
        introduce:'这是一号衣服',
        detailimg:[
            img5,
            img5,
            img5
        ],
        skuId:3,
        count:1,
        price:100,
        select:true

    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服4号',
        introduce:'这是一号衣服',
        detailimg:[
            '@/assets/images/5.gif',
            '@/assets/images/6.gif',
            '@/assets/images/7.gif'
    
        ],
        skuId:3,
        count:1,
        price:100,
        select:true
    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服5号',
        introduce:'这是一号衣服',
        detailimg:[
            '@/assets/images/5.gif',
            '@/assets/images/6.gif',
            '@/assets/images/7.gif'
    
        ],
        skuId:4,
        count:1,
        price:100,
        select:true

    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服6号',
        introduce:'这是一号衣服',
        detailimg:[
            '@/assets/images/5.gif',
            '@/assets/images/6.gif',
            '@/assets/images/7.gif'
    
        ],
        skuId:5,
        count:1,
        price:100,
        select:true

    },
    {
        img:'/src/assets/images/1.jpg',
        name:'衣服7号',
        introduce:'这是一号衣服',
        detailimg:[
            '@/assets/images/5.gif',
            '@/assets/images/6.gif',
            '@/assets/images/7.gif'
    
        ],
        skuId:6,
        count:1,
        price:100,
        select:true

    },
    
    
])  
// 热榜数据
export  const hotlist=ref([
    {
        title:'周热榜',
        img:'/src/assets/images/1.jpg',
        name:'热榜衣服',
        introduce:'这是热榜衣服',
        price:'$100.00',
        num:1
    },
    {
        title:'24小时热榜',
        img:'/src/assets/images/2.jpg',
        name:'热榜衣服',
        introduce:'这是热榜衣服',
        price:'$100.00',
        num:2
    }
])

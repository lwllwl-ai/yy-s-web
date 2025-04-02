import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useCartStore=defineStore('cart',()=>{
   
    const cartList=ref([])
    const addCart=(goods)=>{
        const item=cartList.value.find((item) => goods.skuId===item.skuId)
        if(item){
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    const del=(skuId)=>{
        const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)
        console.log(cartList.value);
        
    }
    const allcount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    const allprice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    console.log(cartList.value.price);

    //是否全选
    const isAll=computed(()=>cartList.value.every((item)=>item.select))
    //全选功能
    const checkAll=(event)=>{
        cartList.value.forEach((item)=>item.select=event)
    }
    //统计已选总件和已选价格
    const checkCount=computed(()=>cartList.value.filter(item=>item.select).reduce((a,c)=>a+c.count,0))
    const checkPrice=computed(()=>cartList.value.filter(item=>item.select).reduce((a,c)=>a+c.count*c.price,0))
    // const checked=(i)=>{

    //     checkCount.value=allcount.value
    //     if(i.select){
    //         checkCount.value+=i.count
    //     }else{
    //         checkCount.value-=i.count
    //     }
        
    // }

    //退出清除购物车数据
    const clear=()=>{
        cartList.value=[]
    }
    return {
        allcount,
        allprice,
        cartList,
        isAll,
        checkCount,
        checkPrice,
        checkAll,
        addCart,
        del,
        clear
    }
},
{
    persist: true,
}
)
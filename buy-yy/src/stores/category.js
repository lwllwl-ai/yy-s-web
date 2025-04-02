import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js'


export const useCategoryStore = defineStore('category', () => {
    const  categoryList=ref([])
    const getCategory=async()=>{
        const res=await getCategoryAPI();
        console.log(res.data);
        
        categoryList.value=res.data.result;
        
        
    }
    
  return { 
    categoryList,
    getCategory
   }
})

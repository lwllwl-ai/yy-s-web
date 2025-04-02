import {loginAPI} from '@/apis/user'
import { defineStore } from "pinia";
import { ref } from 'vue';

export const useuserStore= defineStore('user',()=>{
    const userdata=ref({})
    const getloginAPI=async({account,password})=>{
        const res=await loginAPI({account,password})
        
        userdata.value=res.data.result  
        console.log(userdata.value);
    }
    const cleardata=()=>{
        userdata.value={}
    }
    return{
        userdata,
        getloginAPI,
        cleardata
    }
},
{
    persist: true,
})
import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useuserStore } from '@/stores/user'



//axios的基础封装
const httpInstance=axios.create({
    baseURL:"https://pcapi-xiaotuxian-front-devtest.itheima.net" ,
    timeout:5000
})
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //拿到token
    const userStore=useuserStore()
    const token=userStore.userdata.token
    //携带token
    if(token){
      config.headers.Authorization=` bearer ${token} `
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    ElMessage({
      type:'error',
      message:error.response.data.msg
    })
    console.log(error);
    
    return Promise.reject(error);
  });    
export default httpInstance

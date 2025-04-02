<template>
    <div >
        <div class="backimg">
            
            <div class="login">
                <div class="form">
                        <el-form  ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px"
                            status-icon>
                            <el-form-item prop="account" label="账户">
                                <el-input v-model="form.account" />
                            </el-form-item>
                            <el-form-item prop="password" label="密码">
                                <el-input v-model="form.password" />
                            </el-form-item>
                            <el-form-item  prop="agree" label-width="22px">
                                <el-checkbox size="large" v-model="form.agree">
                                    我已同意隐私条款和服务条款
                                </el-checkbox>
                            </el-form-item>
                            <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
                        </el-form>
                    </div>
            </div>
            <img :src="img1" alt="">
        </div>
    </div>
    <LayoutFooter/>
</template>
<script setup>
import LayoutFooter from '../Layout/components/LayoutFooter.vue';
import img1 from '@/assets/images/1.jpg'
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from "vue-router";
import { useuserStore } from '@/stores/user'

const router=useRouter()
const form=ref({
    account:'heima282',
    password:'hm#qd@23!',
    agree: true
})
// const {account,password}=form.value   
// const login=()=>{
//     const res=loginAPI( {account,password})
//     console.log(res);
    
// }
// login();
const rules = {
    account: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 6, max: 14, message: '密码长度为6-14个字符', trigger: 'blur' }
    ],
    agree: [
        {
            validator :( rule,value,callback )=>{
                 console.log(rule);
                 console.log(callback);
                console.log(value);
                
                if(value){
                    callback()
                }else{
                    callback(new Error('请勾选协议'))
                }
                 
            },
        }
    ]
}
const userStore=useuserStore()
const formRef=ref(null)
const doLogin=()=>{
    const {account,password}=form.value
    formRef.value.validate(async(valid)=>{
        console.log(valid);
        if(valid){
            //统一校验通过后
            await userStore.getloginAPI({account,password})
            
            ElMessage({type:'success' , message:'登陆成功'})
            //成功后跳转首页
            router.replace({path:'/'})
            
        }
    })
}
</script>
<style scoped lang="scss">
.backimg{
    height: 900px;
    width: 1300px;
    img{
        height: 100%;
        width: 100%;
    }
    .login{
        position: absolute;
        height: 647px;
        width: 800px;
        top: 195px;
        left: 400px;
        background-color: aquamarine;
           
    }
}
</style>
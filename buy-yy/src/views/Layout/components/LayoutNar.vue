<script setup>
import { useuserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartshort.js'

const router=useRouter()
const userStore=useuserStore()
const cartStore=useCartStore()
console.log(userStore.userdata.token);
const confirm=()=>{
    cartStore.clear()
    console.log('退出登录');
    userStore.cleardata()
    router.push({path:'/login'})
}

</script>
<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!-- 多模版渲染 区分登录状态和非登录状态 -->

                <!-- 适配思路: 登录时显示第一块 非登录时显示第二块  是否有token -->
                <template v-if="userStore.userdata.token">
                    <li><a href="javascript:;" ><i class=" iconfont icon-user"></i>{{ userStore.userdata.account }}</a></li>
                        
                    <li>
                        <el-popconfirm  @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;" >我的订单</a></li>
                    <li><a href="javascript:;" >会员中心</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;" @click="$router.push('/Login')" >请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.app-topnav {
    background: #56B8C0;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>
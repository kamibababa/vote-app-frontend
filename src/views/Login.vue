<template>
  <el-card class="box-card">
    <el-form :model="regInfo" label-width="60px" >
      <el-form-item label="用户名">
        <el-input v-model="regInfo.name" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="regInfo.password" type="password" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { Login_Req } from '@/model';
import { login } from '@/api'
import {useRouter} from 'vue-router'
import { useUserStore } from '@/store/user'
let { setUserInfo } = useUserStore()

const router = useRouter()

let regInfo = ref<Login_Req>({
    name:"",
    password:""
})

function doRegister(){
  login(regInfo.value).then(res=>{
    // console.log(res.data);
    setUserInfo(res.data.data)
    router.push('/')
  }).catch(err=>{
    console.log(err);
  })
}
</script>
<style scoped>
.box-card {
  max-width: 500px;
  margin: 100px auto
}
</style>

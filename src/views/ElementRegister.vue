<template>
  <el-card class="box-card">
    <el-form :model="regInfo" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="regInfo.name" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="regInfo.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { UserReg } from '@/model';
import { login } from '@/api'
import {useRouter} from 'vue-router'
import { useUserStore } from '@/store/user'
let { setUserInfo } = useUserStore()

const router = useRouter()

let regInfo = ref<UserReg>({
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

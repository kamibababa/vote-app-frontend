<template>
  <el-container class="layout-container-demo">
    <el-header style="text-align: right; font-size: 12px">
      <div class="toolbar">
        <span>{{userInfo?.name}}</span>
      </div>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu router background-color="#000" text-color="#fff" :default-openeds="['/vote']">
          <el-sub-menu index="/vote">
            <template #title>
              <el-icon>
                <message />
              </el-icon>投票管理
            </template>
            <el-menu-item index="/vote/do_vote">投票</el-menu-item>
            <el-menu-item index="/vote/check_vote">查看投票</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Message } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
let { userInfo } = storeToRefs(store)

</script>

<style scoped>
.layout-container-demo{
  height: 100%;
}
.layout-container-demo .el-header {
  background-color: black;
  color: white;
}

.layout-container-demo .el-aside {
  color: white;
  background: black;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
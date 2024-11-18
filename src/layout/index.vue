<template>
  <el-container class="layout-container-demo">
    <el-header style="text-align: right; font-size: 12px">
      <!-- <div class="toolbar">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 1px">
            <setting />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </div> -->
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu router background-color="#000" text-color="#fff">
          <el-sub-menu index="/article">
            <template #title>
              <el-icon>
                <message />
              </el-icon>文章管理
            </template>
            <el-menu-item index="/article/all_article">全部文章</el-menu-item>
            <el-menu-item index="/article/my_article">my_article</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/comment">
            <template #title>
              <el-icon>
                <message />
              </el-icon>评论管理
            </template>
            <el-menu-item index="/comment/all_comment">all_comment</el-menu-item>
            <el-menu-item index="/comment/my_comment">my_comment</el-menu-item>
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
import { Message, Setting } from '@element-plus/icons-vue'

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
<template>
  <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#000" text-color="#fff">
    <el-sub-menu v-for="item in routes" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
          <!-- <food /> -->
        </el-icon>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>


import {useRouter} from 'vue-router'
const router = useRouter()

const routes = router.getRoutes().filter((item)=>{
  return item.children.length > 0 && item.name !== 'home'
})

</script>

<style scoped></style>

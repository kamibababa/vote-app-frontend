<template>
  <div class="container">
    <header>
      <topheader></topheader>
    </header>
    <main>
      <div class="left">
        <pageSide></pageSide>
      </div>
      <div class="right">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import topheader from '@/layout/components/topheader.vue'
import pageSide from '@/layout/components/page-side.vue'
</script>
<style scoped>
.container{
  flex-direction: column;
  display: flex;
  height: 100%;
}
.container header{
  font-weight: bold;
  font-size: 24px;
  color:white;
  height: 60px;
  background-color: #000;
  line-height: 60px;
}
.container main{
  flex:1;
  display: flex;
}
.left{
  background-color: #000;
  flex: 0 0 200px;
}
.right{
  flex:1
}
</style>

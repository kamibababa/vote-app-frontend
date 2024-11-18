<template>
<ul>
  <li v-for="item in vote_info" :key="item.name">{{ item.name }}---{{ item.votecount }}</li>
</ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { get_vote_result} from '@/api'
const vote_info = ref<VoteInfo[]>([])
get_vote_result().then(res=>{
  vote_info.value = res.data.data
})
</script>
<style scoped>
</style>

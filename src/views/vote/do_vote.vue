<template>
  <el-form>
    <el-form-item>
      <el-select v-model="candidate_id" placeholder="选择候选人" style="width: 240px">
        <el-option v-for="item in candidates" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="do_vote">投票</el-button>
    </el-form-item>
  </el-form>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { get_candidate, vote } from '@/api'
import { Candidate } from '@/model'
import { ElMessage } from 'element-plus'
const candidate_id = ref('')
const candidates = ref<Candidate[]>([])
get_candidate().then(res => {
  candidates.value = res.data.data
})
function do_vote() {
  console.log(candidate_id.value);
  vote(candidate_id.value).then(res => {
    if (res.data.code === 200) {
      ElMessage({
        message: res.data.msg,
        type: 'success',
      })
    }
    else {
      ElMessage({
        message: res.data.msg,
        type: 'warning',
      })
    }
  })
}
</script>
<style scoped></style>

<template>
  <table>
    <thead>
      <th>标题</th>
      <th>作者</th>
      <th>发布时间</th>
    </thead>
    <tbody>
      <tr v-for="item in my_articles.articles">
        <td>{{ item.title }}</td>
        <td>{{ item.author.username }}</td>
        <td>{{ item.createdAt }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref } from "vue"

import { getArticles } from "@/api/"
import { Articles } from "@/model/"

// const my_tags:Ref<Tag> = ref({tags:[]})
const my_articles = ref<Articles>({
  articles: [],
  articlesCount: 0
})
getArticles().then(res => {
  my_articles.value = res.data
})
</script>
<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;

}

thead {
  background-color: pink;
}

th,
td {
  border: 1px solid black;
  padding: 6px;
}
</style>

<template>
  <nav v-if="!userInfo" class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <!-- <a class="nav-link active" href="/">Home</a> -->
          <RouterLink class="nav-link active" :to="{name:'home'}">Home</RouterLink>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/login">Sign in</a> -->
          <!-- <RouterLink class="nav-link active" :to="{name:'login'}">Sign in</RouterLink> -->
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/register">Sign up</a> -->
          <RouterLink class="nav-link active" :to="{name:'register'}">Sign up</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <nav v-else class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <!-- <a class="nav-link active" href="/">Home</a> -->
          <RouterLink class="nav-link active" :to="{name:'home'}">Home</RouterLink>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/editor"> <i class="ion-compose"></i>&nbsp;New Article </a> -->
          <!-- <RouterLink class="nav-link" :to="{name:'create_article'}"><i class="ion-compose"></i>New Article</RouterLink> -->
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </a> -->
          <!-- <RouterLink class="nav-link" :to="{name:'setting'}"><i class="ion-gear-a"></i>Settings</RouterLink> -->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile/eric-simons">
            <img :src="userInfo.image" class="user-pic" />
            {{ userInfo.username }}
          </a>
        </li>
      </ul>
    </div>
  </nav>


</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
const store = useUserStore()
let {userInfo} = storeToRefs(store)

</script>
<style scoped></style>

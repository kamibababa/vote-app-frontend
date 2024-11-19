import { UserInfo } from '@/model';
import {defineStore} from 'pinia'
import { ref } from 'vue'
// import { setUser } from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)

  function setUserInfo(value: UserInfo) {
    userInfo.value = value;
    // setUser(value)
  }

  return { 
    userInfo, 
    setUserInfo
  }
},{
  persist:{
    storage: sessionStorage
  }
})
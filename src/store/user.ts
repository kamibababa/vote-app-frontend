import {defineStore} from 'pinia'
import { ref } from 'vue'
import { setUser } from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<string | null>(null)

  function setUserInfo(value: string) {
    userInfo.value = value;
    setUser(value)
  }

  return { 
    userInfo, 
    setUserInfo
  }
})
import axios from "axios";
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
const instance = axios.create({
  // baseURL: 'https://api.realworld.io/api/'
   baseURL: 'http://localhost:8080/'
  // baseURL: import.meta.env.VITE_APP_API//dev-api
});

instance.interceptors.request.use(function (config) {
  const store = useUserStore()
  let {userInfo} = storeToRefs(store)

  if(userInfo.value !== null){
  // Do something before request is sent
    config.headers.Authorization = `Bearer ${userInfo.value}`
  }

  return config;
});


export default instance
import axios from "axios";
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import router from '@/router'

const instance = axios.create({
  // baseURL: 'https://api.realworld.io/api/'
  //  baseURL: 'http://175.178.73.222:8885/'
   baseURL: 'http://localhost:8885/'
  // baseURL: import.meta.env.VITE_APP_API//dev-api
});

instance.interceptors.request.use(function (config) {
  const store = useUserStore()
  let {userInfo} = storeToRefs(store)

  if(userInfo.value !== null){
  // Do something before request is sent
    config.headers.Authorization = `Bearer ${userInfo.value.token}`
  }

  return config;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  console.log(router);
  if(response.data.code===401){
    let { setUserInfo } = useUserStore()
    setUserInfo(null)
    window.sessionStorage.removeItem('user')
    
    router.push('/login')
    return Promise.reject(response.data.msg);
  }
  else{
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }

}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log('object');
  return Promise.reject(error);
});

export default instance
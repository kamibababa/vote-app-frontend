import instance from "@/utils/request"; 
import { Login_Req, Rsp } from "@/model/"

export function login(params:Login_Req):Promise<{data: Rsp}>{
  return instance({
    method: 'post',
    url: 'login',
    data:params
  })
}
export function vote(cid:string):Promise<{data: Rsp}>{
  return instance({
    method: 'post',
    url: `vote/${cid}`
  })
}
export function get_vote_result():Promise<{data: Rsp}>{
  return instance({
    method: 'get',
    url: 'get_vote_result'
  })
}
export function get_candidate():Promise<{data: Rsp}>{
  return instance({
    method: 'get',
    url: 'get_candidate'
  })
}



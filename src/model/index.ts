
export interface Rsp {
  code: number;
  msg: string;
  data: any;
}
export interface VoteInfo {
  name: string;
  votecount: number;
}
export interface Candidate {
  id: number;
  name: string;
}

export interface Login_Req {
  name: string;
  password: string;
}

export interface UserInfo {
  id:number;
  name: string;
  token: string;
}


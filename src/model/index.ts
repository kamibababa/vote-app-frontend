
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

export interface Tag {
  tags: string[];
}


export interface UserReg {
  user: User_Req;
}

export interface UserLogin {
  user: User_Req;
}

export interface User_Req {
  name: string;
  password: string;
}

export interface User_Rsp {
  user: UserInfo;
}

export interface UserInfo {
  email: string;
  token: string;
  username: string;
  bio: string;
  image?: string;
}

export interface Articles {
  articles: Article[];
  articlesCount: number;
}
export interface Article {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}
interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface PageInfo{
  pageSize: number;
  pageIndex: number;
}
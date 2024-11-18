
export function setUser(userinfo: string){
  window.sessionStorage.setItem('userinfo',JSON.stringify(userinfo))
}

export function getUser(): string{
  let json_str = window.sessionStorage.getItem('userinfo')
  return JSON.parse(json_str!)
}

export function removeUser(){
  window.sessionStorage.removeItem('userinfo');
}
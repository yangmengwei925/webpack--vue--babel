import request from '@/utils/request';

//{username:'',password:''}
//在仓库中调用store
export function getUserInfo() {
  return request({
    url:'/userInfo',
    method: 'get',
  })
}

export function login(data) {
  return request({
    url:'/login',
    method: 'post',
    data
  })
}


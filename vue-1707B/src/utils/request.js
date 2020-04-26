import axios from 'axios';
import {MessageBox,Message} from 'element-ui';

//1: create
const service = axios.create({
  //  /api 代理
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 5000
});


service.interceptors.request.use(
  config => {

    //token 存储到仓库
    // if () {
    config.headers['token'] = '1111';
    // }
    return config;
  },

  error => {
    Message({
      message: '请检查网络连接',
      type: 'error',
      duration: 2000
    });

    console.log(error);
    return Promise.reject(error);

  }
);

service.interceptors.response.use(response => {
    const res = response.data;

    if (res.code !== 1) {
      //提示 请求失败 用户名或者密码不对
      Message({
        message: '用户名或者密码不对',
        type: 'error',
        duration: 2000
      })


    } else {
      return res;
    }
  },
  error => {
    Message({
      message: '请求失败',//404  405 500
      type: 'error',
      duration: 2000
    });

    console.log('err', error);
    return Promise.reject(error);

  }
);

export default service;


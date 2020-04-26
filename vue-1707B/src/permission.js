import router from '@/router';
import store from '@/store';
import {getToken} from "@/utils/auth";
import el from "element-ui/src/locale/lang/el";

const whitePath = ['/login', '/me'];
/*
* 假定有3个角色  viewer  admin  teacher
* */

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();

  if (hasToken) {
    // 访问的是 /login  ==> 首页
    if (to.path === '/login') {
      next({path: '/main-index'});
    } else {
      //获取角色 点击登录按钮 存进去的
      //登录的时候 不应该存储角色  应该是 获取角色的时候存进去
      let roles = store.getters.roles && store.getters.roles.length > 0;
      if (roles) {
        //角色和路由的问题
        // console.log(to.meta);
        next();// 角色到时候存到仓库
      } else {
        //没有获取到角色
        //发送请求 获取角色
        //根据角色 处理路由
        // roles = getRoles();
        // 没有角色 ---> 调用仓库  -->发送请求  获取角色 ---> 存到仓库
        // 获取仓库中存储的角色
        let {roles} = await store.dispatch('users/getInfo');
        await store.dispatch('permission/generateRoutes', roles);
        next()
      }
    }

  }
  else {
    // 处理白名单  {path: `/login?redirect=${to.path}`}
    // next();

    if (whitePath.includes(to.path)) {
      next();
    } else {
      //重定向到登录页
      next({path: `/login?redirect=${to.path}`})

    }
  }


});


import Login from "../views/login";
import Main from "../views/main";
import Page404 from "../views/Page404";
import mainList from "./mainList";

import store from '@/store';


//显示在侧边栏
//侧边栏的数据 弄出来 过滤 mainList

export function getAsideData() {

  //从仓库获取
  return store.getters.permissionRoutes.filter(item => item.title).map(item=>{
    return {
      title:item.title,
      toPath: routes[2].path + '/' + item.path//'/main-index/markdown'
    }
  });
}




const routes = [
  {
    path: '/',
    redirect: '/main-index'
  },
  
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main-index',
    component: Main,
    children:mainList
  },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '*',
    redirect: '/404'
  }
  
];

export default routes;
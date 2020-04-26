import permissionRoutes from '@/router/mainList';

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    //筛选  路由中的meta 是否包含 传过来的角色
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

function filterRoutes(roles) {
  let res = [];
  //遍历permissionRoutes
  permissionRoutes.forEach(route => {
    //route ==> {path,component  meta}
    let tmp = {...route};
    if (hasPermission(roles, tmp)) {
      res.push(tmp);
    }
  });
  return res;
  //返回值  [{},{},{}]
}


const state = {
  routes: []
};

const mutations = {
  'SET_ROUTES'(state,routes) {
    state.routes = routes;
  }
};


const actions = {
  generateRoutes({commit}, roles) {//['teacher']
    return new Promise(resolve => {
      let accessedRoutes; //动态路由

      //判断是不是管理员角色
      if (roles.includes('admin')) {
        //全部的路由权限
        accessedRoutes = permissionRoutes;
      } else {
        //否则  根据角色处理对应的路由信息
        accessedRoutes = filterRoutes(roles);
      }
      //仓库的路由改变
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    })
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
}

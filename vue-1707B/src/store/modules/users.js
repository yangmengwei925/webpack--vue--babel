import {getUserInfo, login} from "@/api/user";
import {setToken} from "@/utils/auth";

const state = {
  username: '',
  roles: [],
  token:''

};

const mutations = {
  'SET-ROLES'(state, roles) {
    state.roles = roles;

  },
  'SET-NAME'(state, username) {
    state.username = username;

  },
  'SET-TOKEN'(state, token) {
    state.token = token;
  }

};


const actions = {

  getInfo({commit}) {
    return new Promise((resolve, reject) => {
      //发送请求
      getUserInfo().then(response => {
        const {roles, username} = response;

        if (!response.roles || response.roles.length <= 0) {
          reject('fail');
        } else {
          //username  roles
          commit('SET-ROLES', roles);
          commit('SET-NAME', username);
          resolve(response);
        }
      })
    })
  },


  login({commit}, payload) {
    return new Promise((resolve, reject) => {
      //发送请求
      login(payload).then(response => {
        const {roles, username, token} = response;
        //存储token
        // 存储到两个地方 仓库 cookie

        // commit('SET-ROLES', roles);
        commit('SET-NAME', username);
        commit('SET-TOKEN', token);

        setToken(token);
        resolve(response);
      })
    })
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
}

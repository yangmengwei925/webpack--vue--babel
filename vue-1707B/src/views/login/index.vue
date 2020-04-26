<template>
  <div>
    <h1 class="login">Login</h1>

    <!--    <img src="../../assets/logo.png" alt="">-->


    <el-input v-model="username" placeholder="请输入姓名"></el-input>

    <el-input v-model="password" placeholder="请输入密码"></el-input>

    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
  import store from '@/store';
  //引入
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      // toMain() {
      //   this.$router.push('/main-index');
      // },


      async login() {
        let {username, password} = this;
        //传递到仓库
        let res = await store.dispatch('users/login', {username, password});

        if (res.code === 1) {
          this.$router.push('/main-index');
        }

      }

    }
  }
</script>

<style scoped>
  .login {
    cursor: pointer;
  }
</style>
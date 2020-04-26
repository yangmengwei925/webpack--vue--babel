const mainList = [
  {path: '', redirect: 'markdown'},
  {
    title: 'markdown组件', path: 'markdown',
    component: () => import('../views/markdown')
  },
  {
    title: '表格组件', path: 'gridview',
    component: () => import('../views/gridview')
  },
  {
    title: '拖拽组件', path: 'drag',
    component: () => import('../views/drag')
  },
  {
    title: '模态组件', path: 'modal',
    component: () => import('../views/modal')
  },
  {
    title: '树状组件', path: 'tree',
    component: () => import('../views/tree')
  },

  {
    title: '管理员1', path: 'admin1',
    component: () => import('../views/admin1'),
    meta:{
      roles:['admin']
    }
  },

  {
    title: '管理员2', path: 'admin2',
    component: () => import('../views/admin2'),
    meta:{
      roles:['admin']
    }
  },

  {
    title: '教师1和浏览者', path: 'teacher1',
    component: () => import('../views/teacher1'),
    meta:{
      roles:['teacher','viewer']
    }
  },


  {
    title: '教师2', path: 'teacher2',
    component: () => import('../views/teacher2'),
    meta:{
      roles:['teacher']
    }
  },



];


export default mainList
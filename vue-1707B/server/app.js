let express = require('express');
let path = require('path');
let history = require('connect-history-api-fallback');
// let path = require('path');
let bodyParser = require('body-parser');
var compression = require('compression')

app.use(compression())
let app = express();

app.use(history({
  index: '/index.html'
}));

// app.use(bodyParser);

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

let username = '';

// app.use(express.static(path.join(__dirname, './public')));//静态资源文件

//路由 访问 /api/home
app.get('/login', (req,res)=>{
  let {username,password} = req.query;
  let roles = '';
  if (username === 'zhangsan') {
    roles = 'admin';
  } else if (username === 'xiaoli') {
    roles = 'teacher';
  } else {
    roles = 'viewer';
  }

  res.json({code: 1,
    username,
    roles,
    token:'abc123'
  });

});
app.get('/userInfo', (req,res)=>{
  // let {username,password} = req.query;
  let roles = '';
  res.json({code: 1,
    username: username,
    roles: ['admin'],
    token:'abc123'
  });
});

app.post('/login', (req,res)=>{
  let {username,password} = req.body;
  console.log(req.body);
  let roles = '';
  if (username === 'zhangsan') {
    roles = ['admin'];
  } else if (username === 'xiaoli') {
    roles = ['teacher'];
  } else {
    roles = ['viewer'];
  }
  res.json({code: 1,
    username,
    roles,
    token:'abc123'
  });

});

app.listen(9090, () => `server running at http://localhost:9090`);
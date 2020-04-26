let express = require('express');
// let bodyParser = require('body-parser')
let app = express();

app.use(express.json());

app.use(express.urlencoded());//form
// app.use(express.static);
app.post('/login', (req, res, next) => {
  let body = req.body;

  console.log(body);

  res.json({
    code: 1,
    roles: 'admin',
    token: 'abcabcabcabcabcabc'
  })
});


app.listen(4080);

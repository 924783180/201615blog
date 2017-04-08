let express = require('express');
//app的核心是一个请求监听函数
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
let app = express();
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
//监听8080端口并启动一个服务器
app.listen(8080);

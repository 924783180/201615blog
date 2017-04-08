let express = require('express');
let path = require('path');
//app的核心是一个请求监听函数
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
let app = express();
//指定public目录为静态文件根目录
app.use(express.static(path.resolve('public')));
//引入模板
app.set('view engine','html');
//指定模板的存放根目录为当前文件夹下面的views目录
app.set('views',path.resolve(__dirname,'views'));
//指定用__express方法来渲染.html模板
app.engine('html',require('ejs').__express);
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
//监听8080端口并启动一个服务器
app.listen(8080);

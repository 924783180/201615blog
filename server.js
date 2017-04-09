let express = require('express');
let path = require('path');
//app的核心是一个请求监听函数
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
let bodyParser = require('body-parser');
let session = require('express-session');
//这是一个把信息写在session中的中间件
let flash = require('connect-flash');
let app = express();
//指定public目录为静态文件根目录
app.use(express.static(path.resolve('public')));
//此中间件会判断请求体的类型，如果是json,自己就处理，如果不是json,会走next,是通过请求头中的 Content-Type:application/x-www-form-urlencoded来判断的
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// req.session
app.use(session({
    resave:true,//每次保存session
    saveUninitialized:true,//保存未初始化session
    secret:'zfpx'//加密cookie秘钥
}));
//此中间件会向req.flash。可以读写消息
// req.flash(type,msg) req.flash(type)
app.use(flash());
//目标是把success error从req.flash取出来赋给
// res.locals 是真正渲染模板的对象
app.use(function(req,res,next){
 res.locals.success = req.flash('success').toString();
 res.locals.error = req.flash('error').toString();
 res.locals.user = req.session.user;
 next();
});
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

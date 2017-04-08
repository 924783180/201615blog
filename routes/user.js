let express = require('express');
//运行Router方法之后会返回一个路由中间件的实例
//路由中间件本质上是一个中间件
let router = express.Router();
//这里的路径是子路径
router.get('/signup',function(req,res){
  res.render('user/signup',{title:'用户注册'});
});
//1.得到请求体 2.定义model 3.调用model.create方法把此用户保存到数据库中
router.post('/signup',function (req,res) {
    let user = req.body;

});
router.get('/signin',function(req,res){
  res.send('登录');
});
router.get('/signout',function (req,res) {
    res.send('退出');
});
module.exports = router;

let express = require('express');
let User = require('../model').User;
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
    User.create(user,function(err,doc){
        if(err){
            req.flash('error',err.toString());
            res.redirect('back');
        }else{
            req.flash('success','注册成功，请登录!');
            res.redirect('/user/signin');
        }
    })
});
router.get('/signin',function(req,res){
  res.render('user/signin',{title:'登录'});
});
router.post('/signin',function (req,res) {
    let user = req.body;
    User.findOne(user,function(err,doc){
      console.log(err);
        if(err){
          req.flash('error',err.toString());
          res.redirect('back');
        }else{
            if(doc){
               //在session写入了成功类型的消息
                req.flash('success','恭喜你登录成功!');
                req.session.user = doc;
                res.redirect('/');
            }else{
              console.log('失败');
              req.flash('error','很遗憾你登录失败,请重新登录!');
              res.redirect('back');
            }
        }
    });
});
router.get('/signout',function (req,res) {
    res.send('退出');
});
module.exports = router;

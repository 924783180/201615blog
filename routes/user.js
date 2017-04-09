let express = require('express');
let User = require('../model').User;
let multer = require('multer');
let path = require('path');
//因为系统是在server.js上启动的，所有路径的当前目录
//就是项目根目录
let upload = multer({dest:'./public/uploads'});
//运行Router方法之后会返回一个路由中间件的实例
//路由中间件本质上是一个中间件
let router = express.Router();
//这里的路径是子路径
router.get('/signup',function(req,res){
    res.render('user/signup',{title:'用户注册'});
});
//1.得到请求体 2.定义model 3.调用model.create方法把此用户保存到数据库中
router.post('/signup',upload.single('avatar'),function (req,res) {
    let user = req.body;
    //给头像图片的路径赋值
    user.avatar = `/uploads/${req.file.filename}`;
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
/**
 * req.body= { username: '12', password: '2', email: '2@2.com' }
 * 浏览器把填写的表中的文本类型的字段转成的对象
 *
 * req.file
 * {
 * fieldname: 'avatar',  字段名 input框的 name属性
  originalname: 'head.png', 在本地上传前的原始文件名
  mimetype: 'image/png', 内容类型 大类型/小类型
  destination: './public/uploads',上传到服务器后保存的路径
  filename: 'db549107acd9596d7c2a723431002365', 保存的文件名
  path: 'public\\uploads\\db549107acd9596d7c2a723431002365',
  size: 14245 }
 **/

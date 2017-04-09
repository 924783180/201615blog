let express = require('express');
let router = express.Router();
let {checkLogin} = require('../ware');
let Article = require('../model').Article;
router.get('/add',checkLogin,function(req,res){
  res.render('article/add',{title:'发表文章'});
});
router.post('/add',checkLogin,function (req,res) {
  let article = req.body;//得到客户端提交的文章对象
  //从当前会话中得到用户的ID，然后赋给文章的user属性
  article.user = req.session.user._id;
  Article.create(article,function(err,doc){
    if(err){
      req.flash('error','文章发表失败');
      res.redirect('back');
    }else{
      req.flash('success','文章发表成功');
      res.redirect('/');
    }
  });

});
router.get('/list',checkLogin,function(req,res){
    res.send('文章列表');
});
module.exports = router;

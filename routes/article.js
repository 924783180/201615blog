let express = require('express');
let router = express.Router();
let {checkLogin} = require('../ware');
let Article = require('../model').Article;
router.get('/add',checkLogin,function(req,res){
  res.render('article/add',{title:'发表文章',article:{}});
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
// /article/detail/1
router.get('/detail/:_id',function(req,res){
  let _id = req.params._id;
  Article.findById(_id,function(err,article){
    res.render('article/detail',{title:"文章详情",article});
  })
});
router.get('/delete/:_id',function (req,res) {
  let _id = req.params._id;
  Article.remove({_id},function(err,result){
    if(err){
      req.flash('error','删除文章失败');
      res.redirect('back');
    }else{
      req.flash('success','删除文章成功');
      res.redirect('/');
    }
  })
});
router.get('/update/:_id',function (req,res) {
  let _id = req.params._id;
  Article.findById(_id,function(err,article){
    res.render('article/add',{title:'修改文章',article});
  })
});
router.post('/update/:_id',function(req,res){
  let _id = req.params._id;//得到路径里的文章的ID
  let article = req.body;//得到请求体对象
  Article.update({_id},article,function(err,result){
      if(err){ //如果有错误
        req.flash('error','更新文章失败');
        res.redirect('back');
      }else{
        req.flash('success','更新文章成功');
        res.redirect(`/article/detail/${_id}`);
      }
  });
});
module.exports = router;

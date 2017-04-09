let express = require('express');
let Article = require('../model').Article;
let router = express.Router();
router.get('/',function (req,res) {
  //真正渲染模板是 res.locals.success='hello'，渲染之前会把第二个参数对象属性赋给res.locals
  //需要把user属性从字符串转成对象 populate
  Article.find({}).populate('user').exec(function(err,articles){
    res.render('index',{title:'首页',articles});
    /*articles.forEach(function(article){
      let userId = article.user;
      User.findById(userId,function(err,user){
        article.user = user;
      })
    });*/

  });
});
module.exports = router;

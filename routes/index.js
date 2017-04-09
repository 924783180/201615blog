let express = require('express');
let Article = require('../model').Article;
let router = express.Router();
router.get('/',function (req,res) {
  //真正渲染模板是 res.locals.success='hello'，渲染之前会把第二个参数对象属性赋给res.locals
  //需要把user属性从字符串转成对象 populate
  //要查询标题中包含关键字
  let pageNum = isNaN(req.query.pageNum)?1:parseInt(req.query.pageNum);//当前是第几页
  let pageSize = isNaN(req.query.pageSize)?5:parseInt(req.query.pageSize);//每页的条数
  let query = {};
  if(req.query.keyword){
    query.title = new RegExp(req.query.keyword);
  }
  Article.count(query,function(err,count){//统计记录数
    Article.find(query).skip((pageNum-1)*pageSize).limit(pageSize).populate('user').exec(function(err,articles){
      res.render('index',{
        title:'首页',//标题
        articles,//当前页的文章列表
        keyword:req.query.keyword,//关键字
        pageNum,//当前页码
        pageSize,//每页的条数
        totalPages:Math.ceil(count/pageSize)//总页数
      });
    });
  });

});
module.exports = router;

let express = require('express');
let router = express.Router();
let {checkLogin} = require('../ware');
router.get('/add',checkLogin,function(req,res){
  res.render('article/add',{title:'发表文章'});
});
router.post('/add',checkLogin,function (req,res) {
  let article = req.body;//得到客户端提交的文章对象

});
router.get('/list',checkLogin,function(req,res){
    res.send('文章列表');
});
module.exports = router;

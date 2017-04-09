let express = require('express');
let router = express.Router();
router.get('/',function (req,res) {
  //真正渲染模板是 res.locals.success='hello'，渲染之前会把第二个参数对象属性赋给res.locals
    res.render('index',{title:'首页'});
});
module.exports = router;

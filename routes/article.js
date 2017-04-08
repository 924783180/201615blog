let express = require('express');
let router = express.Router();
router.get('/add',function(req,res){
  res.send('增加文章');
});
router.get('/list',function(req,res){
    res.send('文章列表');
});
module.exports = router;

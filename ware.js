/**
 * 要求用户已经登录才能继续访问，如果没有登录不能继续访问，跳回登录页登录去
 */
exports.checkLogin = function(req,res,next){
  if(req.session.user){
    next();
  }else{
    req.flash('error','你还尚未登录，请登录!');
    res.redirect('/user/signin');
  }
}
//要求未登录才能继续，否则不让继续访问
exports.checkNotLogin = function (req,res,next) {
  if(req.session.user){
    req.flash('error','你已经登录了!');
    res.redirect('/');
  }else{
    next();
  }
}

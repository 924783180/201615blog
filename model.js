let mongoose = require('mongoose');
//连接数据库
let url = require('./config').url;
mongoose.connect(url);
//定义模型骨架
//如何手工强行指定集合的名称
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
},{collection:'user'});
//定义模型 users
exports.User = mongoose.model('User',UserSchema);

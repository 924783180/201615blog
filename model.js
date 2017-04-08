let mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/201615blog');
//定义模型骨架
//如何手工强行指定集合的名称
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
},{collection:'user'});
//定义模型 users
exports.User = mongoose.model('User',UserSchema);
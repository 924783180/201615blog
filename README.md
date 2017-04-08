# 珠峰博客
## 1. 在github上创建项目并下载到本地
```sh
git clone https://github.com/zhufengnodejs/201615blog.git
```
> 因为webstorm的配置文件不需要提交github,所以会把`.idea`文件夹添加到`.gitignore`里

## 2. 初始化项目配置文件
```sh
npm init -y
```

## 3. 安装依赖的模块
```sh
npm install express mongoose ejs debug body-parser cookie-parser connect-flash connect-mongo multer --save
```

## 4. 跑通路由
###功能
1. 用户注册、登录、退出登录
2. 发表文章、查看文章列表

1. /user/signup /user/signin /user/signout
2. /article/add /article/list


## 5. 用户注册
1. 当客户端通过 `/user/signup` 访问服务器的时候，服务器会返回一个空白注册表单。
2. 当用户填写完表单表，会点击提交按钮，这时浏览器会把表单的数据进行序列化转成化查询字符串的格式，并放在请求体里提交给服务器
3. 服务器接收到请求后，会把请求体中的数据通过`body-parser`中间件拿到。转成**JS**对象赋给`req.body`.
4. 把此对象保存数据库里，成功后跳转到登录页。如果失败了会回到注册页。

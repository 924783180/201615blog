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


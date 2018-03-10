##### 第一周： 
node app.js 启动node服务， 访问http://localhost:3000
> 用node启动的原因是 直接引用 SystemJS报跨域的错误。没学过node，网上找的鼓捣鼓捣。

##### 第二周：
node app_koa.js
> 对应的后台服务地址：https://github.com/conan2008/homework
> 实现了前台点赞axios请求node服务加一接口    
> 实现了koa2请求java服务器，并保存mysql数据库    
> mvc分层结构    
> views 使用swig服务    

##### 第三周：
执行npm run start, 访问localhost:3002
> 使用x-tag封装praise
> gulp编译nodejs代码，watch实现热打包, 自动编译
> webpack 编译、打包、压缩、混淆、md5、提取公共代码、动态插入引用等, webpack开发环境实时更新
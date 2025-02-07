```
node 18.20.2
npm 10.5.0
```

- 开发环境——跑起来脚本注意事项
- npm run de -- n 其中n为第几个视图单元
- 比如，要启动并查看第三个视图单元，就是npm run de -- 3

> 生产环境打包同理 npm run de -- n

- 由于浏览器同源策略，直接双击打开dist中的index.html文件是不行的
- 所以，我们可以使用http-server来打开

```
// 打开cmd，全局安装http-server
npm install -g http-server

// 进入指定打包的目录
cd dist

// cmd中输入启动服务
http-server
```
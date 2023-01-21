## 路由
- 页面/文件结构即路由
- 嵌套路由；pages/dashboard/settings/index.js -> localhost:3000/dashboard/settings
- 动态路由；pages/blog/[slug].js  ->  /blog/any routes
- catch all路由；pages/post/[...all].js  ->  /post/*  （所有路由均可以匹配）
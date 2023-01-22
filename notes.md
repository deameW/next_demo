## 路由
- 页面/文件结构即路由
    - 嵌套路由；pages/dashboard/settings/index.js -> localhost:3000/dashboard/settings
    - 动态路由；pages/blog/[slug].js  ->  /blog/any routes
    - catch all路由；pages/post/[...all].js  ->  /post/*  （所有路由均可以匹配）

- 原理
    根据_app.tsx入口文件中的内容匹配相应的组件
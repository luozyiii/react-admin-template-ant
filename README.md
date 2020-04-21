## React-admin-template-ant
基于antd的后台管理模板  
https://ant.design/docs/react/use-with-create-react-app-cn

### 安装
`npx create-react-app react-admin-template-ant`
引入 antd  
`yarn add antd`

### 目录结构

>/src
>    /api 接口
>    /assets 资源
>       /images 图片
>       /style 全局、公用css
>   /components 全局组件
>   /config 配置
>   /views 视图
>   /redux 数据流
>   /router 路由
>   /utils 工具函数

### 自定义配置
1. npm run eject
2. react-app-rewired(一个对 create-react-app 进行自定义配置的社区解决方案)  
https://www.cnblogs.com/zyl-Tara/p/10635033.html
根目录添加 config-overrides.js  
`yarn add react-app-rewired -D`
`yarn add customize-cra -D`

按需加载  
`yarn add babel-plugin-import -D`

安装less和less-loader  
`yarn add less less-loader -D`

day 代替moment
`yarn add antd-dayjs-webpack-plugin -D`

### 路由
react-router 路由
react-router-dom(推荐)  基于React-router,加入了一些在浏览器运行下的一些功能
`yarn add react-router-dom`

1. 使用history 去掉#  
BrowserRouter

### 代理
`yarn add http-proxy-middleware -D`




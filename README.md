### React-admin-template-ant
基于antd的后台管理模板  
Github: https://github.com/luozyiii/react-admin-template-ant

#### 安装
```
npx create-react-app react-admin-template-ant
```
引入 antd  
https://ant.design/docs/react/use-with-create-react-app-cn
```
yarn add antd
```

#### 目录结构

```
/src
    /api 接口
    /assets 资源
       /images 图片
       /style 全局、公用css
   /components 全局组件
   /config 配置
   /views 视图
   /redux 数据流
   /router 路由
   /utils 工具函数
```

#### 自定义配置
1. npm run eject
2. react-app-rewired(一个对 create-react-app 进行自定义配置的社区解决方案)  
https://www.cnblogs.com/zyl-Tara/p/10635033.html
 
```
yarn add react-app-rewired -D
yarn add customize-cra -D
```

根目录添加 config-overrides.js 
```
const { override, addWebpackAlias, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const path = require('path')
// 关闭sourcemap
process.env.GENERATE_SOURCEMAP = 'false'
const resolve = (dir) => path.join(__dirname, dir)

module.exports = override(
  // 按需加载组件代码和样式的 babel 插件
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#4e72b8' }
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src')
  }),
  // 支持装饰器
  addDecoratorsLegacy(),
  // 使用 Day.js 替换 momentjs 优化打包大小
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)

```

按需加载  
```
yarn add babel-plugin-import -D
```

安装less和less-loader  
```
yarn add less less-loader -D
```

day 代替moment
```
yarn add antd-dayjs-webpack-plugin -D
```

#### 路由
react-router 路由
react-router-dom(推荐)  基于React-router,加入了一些在浏览器运行下的一些功能
```
yarn add react-router-dom
```

##### 使用history 去掉#  
BrowserRouter

##### 登录鉴权react-router-config(高阶函数)
>利用一个map函数生成静态路由

react-router-confg源码  
```
import React from "react";
import Switch from "react-router/Switch";
import Route from "react-router/Route";
const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => ( 
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => (
            <route.component {...props} {...extraProps} route={route} />
          )}
        />
      ))}
    </Switch>
  ) : null;
 export default renderRoutes;
```

基于类似vue的路由鉴权，我们稍微改造一下react-router-confg  
1.renderRoutes.js
```
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null
export default renderRoutes
```

2.router.js
>requiresAuth: true 需要登录才能跳转的页面
```
{ path: '/login', name: 'Login', requiresAuth: false, component: Login },
{ path: '/home', name: 'Home', requiresAuth: true, component: Home },
```

3.router/index.js
```
import renderRoutes from './renderRoutes'

<MyLayout>
    {renderRoutes(routes, authed, authPath)}
</MyLayout>
```


#### 代理
```
yarn add http-proxy-middleware -D
```

根目录新建setupProxy.js,内容如下
```
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://xx.xx.xx.xx:8000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}

```




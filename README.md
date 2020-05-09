### React-admin-template-ant
>基于antd的后台管理模板  

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

#### 自定义配置(方案二选一)
1.npm run eject
2.react-app-rewired(一个对 create-react-app 进行自定义配置的社区解决方案)  
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

#### 接口aixos
安装
```
yarn add aixos
```

目录
```
api 
  axios.js
  index.js
```

使用
test页面


#### 代理
```
yarn add http-proxy-middleware -D
```

src目录下新建setupProxy.js,内容如下
```
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/baseApis', {
      // 目标代理服务器地址
      target: 'http://域名/baseApis/',
      // 是否允许跨域
      changeOrigin: true,
      // 重写接口
      pathRewrite: {
        '^/baseApis': '/'
      }
    })
  )
}

```

#### react-redux数据流
1.安装 redux react-redux
```
yarn add redux react-redux
```

2.redux目录(方便管理)
```
redux
   actions.js
   reducers.js
```

根目录index.js
```
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '@/redux/reducers'

ReactDOM.render(
  <Provider store={store} >
    <MyRouter />
  </Provider>,
  document.getElementById('root'))

```

3.测试  
App.js 设置Redux值
```
import { connect } from 'react-redux'
import { setDict } from '@/redux/actions'

componentDidMount () {
  this.setReduxTest()
}

setReduxTest () {
  const { dispatch } = this.props
  dispatch(setDict({ reduxText: 'test成功' }))
}

export default connect()(App)
```

test页面引用  
```
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
  render () {
    const { reduxText } = this.props
    return (
      <>
        <h1>Test page</h1>
        <br/><br/>
        <h3>Redux测试</h3>
        <p>reduxText: {reduxText}</p>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxText: state.reduxText
  }
}

export default connect(mapStateToProps)(Test)
```



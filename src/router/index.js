import Login from '@/views/login/Login'
import App from '@/App'
import MyLayout from '@/components/layout/Layout'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routes from './router'

const authed = true // 如果登陆之后可以利用redux修改该值
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

class Router extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={withRouter(Login)} />
          <App>
            <Switch>
              <Route
                path="/"
                render={() => (
                  <MyLayout>
                    {renderRoutes(routes, authed, authPath)}
                  </MyLayout>
                )}
              />
            </Switch>
          </App>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router

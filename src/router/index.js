import Login from '@/views/login/Login'
import App from '@/App'
import MyLayout from '@/components/layout/Layout'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import routes from './router'

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
                    {routes.map((route, i) => (
                      <Route key={route.key || i} path={route.path} exact={route.exact} strict={route.strict} component={withRouter(route.component)} />
                    ))}
                    {/* <Route exact path="/" component={withRouter(Home)} /> */}
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

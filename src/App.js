import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDict } from '@/redux/actions'
import '@/assets/style/common.less'

class App extends Component {
  componentDidMount () {
    this.setReduxTest()
  }

  setReduxTest () {
    const { dispatch } = this.props
    dispatch(setDict({ reduxText: 'test成功...' }))
  }

  render () {
    return (
      <>{this.props.children}</>
    )
  }
}

export default connect()(App)

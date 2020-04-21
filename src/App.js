import React, { Component } from 'react'

import '@/assets/style/common.less'

class App extends Component {
  render () {
    return <>{this.props.children}</>
  }
}

export default App

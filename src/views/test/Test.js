import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import api from '@/api'

class Test extends Component {
  login () {
    api.login({}).then(res => {
      console.log('test')
    })
  }

  render () {
    const { reduxText } = this.props
    return (
      <>
        <h1>Test page</h1>
        <br/><br/>
        <h3>Redux测试</h3>
        <p>reduxText: {reduxText}</p>
        <Button type="primary" onClick={() => this.login()}>登录接口测试</Button>
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

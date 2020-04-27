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

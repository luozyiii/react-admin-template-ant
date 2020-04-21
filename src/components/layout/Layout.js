import React from 'react'
import { Layout, Icon, Row, Col } from 'antd'
import HeaderContent from './Header'
import MenuContent from './Menu'

import logo from '@/assets/images/logo512.png'
import './index.less'

const { Header, Sider, Content } = Layout

class MyLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  };

  render () {
    return (
      <>
        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <img src={logo} alt="logo" style={{ marginLeft: !this.state.collapsed ? 0 : 22 }} />
              <h1 style={{ opacity: !this.state.collapsed ? 1 : 0 }}>react-admin</h1>
            </div>
            <MenuContent></MenuContent>
          </Sider>
          <Layout>
            <Header className="header">
              <Row>
                <Col span={2}>
                  <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
                </Col>
                <Col span={22}>
                  <HeaderContent></HeaderContent>
                </Col>
              </Row>
            </Header>
            <Content className="container">
              <div className="main">{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default MyLayout

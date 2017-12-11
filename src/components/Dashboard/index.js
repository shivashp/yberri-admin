import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import SideMenu from './SideMenu';

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div id="yberri-dashboard">
      <Layout>
        <Sider
          trigger={null}
          width={240}
          collapsible
          collapsed={this.state.collapsed}
          id="yberri-sidebar"
        >
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default Dashboard;
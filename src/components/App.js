import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import SideMenu from './SideMenu';
import Staff from './Staff';
import ItemCategories from './ItemCategories';
import Items from './Items';
import {  
  Route
} from 'react-router-dom';
import Dashboard from './Dashboard';

const { Header, Sider } = Layout;

class App extends Component {
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
          <SideMenu activeItem={this.props.location.pathname}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> 
          <div className="main-content">    
            <Route exact path="/" component={Dashboard} />
            <Route path="/staff" component={Staff} />    
            <Route path="/item-categories" component={ItemCategories} />      
            <Route path="/items" component={Items} />    
          </div>
        </Layout>
      </Layout>
      </div>
    );
  }
}


export default App;
import React, { Component } from 'react';
import Home from './Home/Home';
import Calendar from './Calendar/Calendar';
import NoMatch from './NoMatch/NoMatch';
import {withRouter} from 'react-router-dom';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb, Icon, }  from 'antd';
import { Provider } from 'react-redux';
import store from './store';

const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo">
              <img src={logo} style={{verticalAlign: 'top', height: '32px' }}/>
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['Menu-Home-1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="Menu-Home-1"><a href="/Home">Dashboard</a></Menu.Item>
              <Menu.Item key="Menu-Admin-1"><a href="/Admin">Admin</a></Menu.Item>
              <Menu.Item rootPrefixCls="xxx" key="Menu-Logout-1" style={{float: 'right'}}><a href="/Logout">Log Out</a></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 20px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider breakpoint="lg" width={180} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['Sider-Menu-1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <Menu.Item key="Sider-Menu-1">
                    <Icon type="pie-chart" />
                    <span><a href="/Home">Dashboard</a></span>
                  </Menu.Item>
                  <Menu.Item key="Sider-Menu-2">
                    <Icon type="desktop" />
                    <span><a href="/calendar">Calendar</a></span>
                  </Menu.Item>
                  <Menu.Item key="Sider-Menu-3">
                    <Icon type="desktop" />
                    <span><a href="/callback">Callback</a></span>
                  </Menu.Item>
                  <SubMenu key="sub1" title={<span><Icon type="user" /><a href="/">Graph</a></span>}>
                    <Menu.Item key="sub1-1">Option1</Menu.Item>
                    <Menu.Item key="sub1-2">option2</Menu.Item>
                    <Menu.Item key="sub1-3">option3</Menu.Item>
                    <Menu.Item key="sub1-4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" /><a href="/">Graph</a></span>}>
                    <Menu.Item key="sub2-5">option5</Menu.Item>
                    <Menu.Item key="sub2-6">option6</Menu.Item>
                    <Menu.Item key="sub2-7">option7</Menu.Item>
                    <Menu.Item key="sub2-8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" /><a href="/">Graph</a></span>}>
                    <Menu.Item key="sub3-9">option9</Menu.Item>
                    <Menu.Item key="sub3-10">option10</Menu.Item>
                    <Menu.Item key="sub3-11">option11</Menu.Item>
                    <Menu.Item key="sub3-12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                
                {
                          console.log(this.props.location.pathname),
                          this.props.location.pathname === '/Home' ? <Home/>: 
                              (this.props.location.pathname === '/Calendar' ? <Calendar/> : null)
                }
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018
          </Footer>
        </Layout>
      </div>
      </Provider>
    );
  }
}

export default withRouter(App);

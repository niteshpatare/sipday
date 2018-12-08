import { DatePicker } from 'antd';
import React, { Component } from 'react';
import logo from './logo.svg';
import Auth from './Auth/Auth';
const auth = new Auth();

class Root extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = auth;

    return (
      <div className="App">
        <div className="container">
        {
          isAuthenticated() && (
              <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </a>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }

        </div>
        <header className="App-header">
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.
          </a>
          <DatePicker />
        </header>
        
      </div>
    );
  }
}

export default Root;

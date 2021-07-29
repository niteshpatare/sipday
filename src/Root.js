
import React, { Component } from 'react';
import logo from './logo.svg';


class Root extends Component {


  render() {


    return (
      <div className="Root">
        <header className="App-header">
         <img alt="Sip Day" src={logo} style={{width: '50px'}}/>
          <a
            className="App-link"
            href="/Home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React->>
          </a>

        </header>      
        <div className="container">
Root
        </div>

        
      </div>
    );
  }
}

export default Root;

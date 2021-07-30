
import React, { Component } from 'react';
import logo from './logo.svg';


class Root extends Component {


  render() {


    return (
      <div className="Root">
        <section style={{display:'flex', minWidth:'50%'}}>
          <section className="App-header" style={{minWidth:'50%'}}>
          <img alt="Sip Day" src={logo} style={{width: '50px'}}/>
            <a
              className="App-link"
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Individual Member (Not Live Yet)
            </a>

          </section>  
          <section className="App-header" style={{minWidth:'50%'}}>
          <img alt="Sip Day" src={logo} style={{width: '50px'}}/>
            <a
              className="App-link"
              href="/Home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Treasurer Member
            </a>

          </section> 
        </section>    
        <div className="container" Footer>

        </div>

        
      </div>
    );
  }
}

export default Root;

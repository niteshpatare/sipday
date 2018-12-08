import React, { Component } from 'react';
import loading from './loading.svg';
import Auth from '../Auth/Auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }
class Callback extends Component {

    shouldComponentUpdate(nextProps) {
      // handleAuthentication(nextProps);
      if (/access_token|id_token|error/.test(nextProps.location.hash)) {
        console.log("hi");
        auth.handleAuthentication();
      }
    }
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    };

     
    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;

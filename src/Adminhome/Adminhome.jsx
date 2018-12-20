import React, { Component } from 'react';
import { DatePicker } from 'antd';
class Adminhome extends Component {

  render() {
    return (
      <div className="Adminhome">
        <DatePicker />       
        <div className="container">
          Admin Home
        </div>
      </div>
    );
  }
}

export default Adminhome;

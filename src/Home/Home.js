import React, { Component } from 'react';
import SelectList from './SelectList';
import AmountCardList from './AmountCardList';
import './Home.scss';
class Home extends Component {

  render() {

    return (
      <div className="Home">    
        <div className="container">
            <AmountCardList/>
            <hr/>
            <SelectList/>
        </div>
      </div>
    );
  }
}

export default Home;


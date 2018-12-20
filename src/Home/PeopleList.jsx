import React, { Component } from 'react';
import { Radio } from 'antd';
import PeopleData from './PeopleData';
const RadioGroup = Radio.Group;

class PeopleList extends Component{
  state = {
    filterValue: 'all',
  }

  onChangeFilter = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      filterValue: e.target.value,
    });
  }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        let me = this;
        if (me.state.filterValue != nextState.filterValue) {
            return true
        }
        return true
    }
    componentDidUpdate(prevProps) {
        
    }
    render() {
        const { year, month } = this.props;
        return(
            <div className="people-list-wrapper">
                <h3>{month} {year} People List</h3>
                <div className="filter-btns">
                    <span>Filter by: </span> 
                    <RadioGroup size="large" onChange={this.onChangeFilter} value={this.state.filterValue}>
                        <Radio size="large" value={'all'}>All</Radio>
                        <Radio size="large" value={'paid'}>Paid</Radio>
                        <Radio size="large" value={'unpaid'}>Unpaid</Radio>
                    </RadioGroup>
                </div>
                <PeopleData filterValue={this.state.filterValue}  year={year} month={month}/>
            </div>
        );
    }
}
export default PeopleList;
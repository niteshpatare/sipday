import React, { Component } from 'react';
import { Row, Col, Card, Button, Select } from 'antd';
import PeopleList from './PeopleList';

const Option = Select.Option;
const yearData = ['2014', '2013', '2012']; //Fetch from DB
const monthData = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

class  SelectList extends Component{
    /* select box */
    state = {
        year: yearData[0],
        month: monthData[0],
    }

    onYearsChange = (value) => {
        this.setState({
        year: value,
        // month: monthData[0],
        });
    }

    onMonthsChange = (value) => {
        this.setState({
        month: value,
        });
    }
    render(){
    /**select box */
    const { year, month } = this.state;

        return(
            <div className="select-list">
              <Row gutter={16}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
                    <Card>
                        <h2>Choose items to display list of people:</h2>
                      <div>
                      <Row>
                        <Col span={4}>
                              <Select
                                defaultValue={yearData[0]}
                                style={{ width: 120 }}
                                value={year}
                                onChange={this.onYearsChange}
                                size="large"
                              >
                                {yearData.map(year => <Option key={year}>{year}</Option>)}
                              </Select>                        
                        </Col>
                        <Col span={4}>
                            <Select
                                defaultValue={monthData[0]}
                                style={{ width: 120 }}
                                value={month}
                                onChange={this.onMonthsChange}
                                size="large"
                            >
                                {monthData.map(city => <Option key={city}>{city}</Option>)}
                            </Select>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" icon="sort-ascending" size="large">Load list of people</Button>                        
                        </Col>
                      </Row>
                                                            
                    </div>                      
                    </Card>
                  </Col>
                </Row>
                <PeopleList year={year} month={month}/>
            </div>
        );
    }
}

export default SelectList;
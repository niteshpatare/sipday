import React, { Component } from 'react';
import { Button, Select, Checkbox, DatePicker, message } from 'antd';
import moment from 'moment';

const Option = Select.Option;
const amountData = ['Select Amount','1000', '1500', '2000', '2500','3000','3500','4000','4500','5000']; //Fetch from DB
const dateFormat = 'MMMM Do YYYY';
const currDate = new Date();
class SubmitForm extends Component{
    state = {
        amountDefault: amountData[0],
        checkPaid: false,
    }
    onChangeDate = (date, dateString) => {
        console.log(`${date} , ${dateString}`);
    }

    onAmountChange = (value) => {
                console.info(value);
        this.setState({
            amount: value,
        });
    }


    render(){
        let amountDefault = this.state.amountDefault;
        return(
            <div>
                    <Select
                        defaultValue={amountDefault}
                        value={amountDefault}
                        onChange={this.onAmountChange}
                        style={{ width: '100%' }}
                    >
                        {amountData.map(
                            (amount,i) => i===0 ? <Option key={amount}>{amount} </Option> : <Option key={amount}>&#8377; {amount} /-</Option>
                        )}
                    </Select><hr/>
                    <DatePicker format={dateFormat} defaultValue={moment(currDate, dateFormat)} style={{ width: '100%' }} onChange={this.onChangeDate} /> <hr/>
                    <Checkbox onChange={this.onCheckPaid}>Amount Paid</Checkbox>
                            
            </div>
        );
    }
}
export default SubmitForm;
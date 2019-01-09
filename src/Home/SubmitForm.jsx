import React, { Component } from 'react';
import { Button, Select, Checkbox, DatePicker, message } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchAmountlist } from '../Flux/Actions/amountListActions';

const Option = Select.Option;
const dateFormat = 'MMMM Do YYYY';
const currDate = new Date();
class SubmitForm extends Component{
    state = {
        amountDefault: 'Select Amount',
        checkPaid: false,
    }
    onChangeDate = (date, dateString) => {
        console.log(`${date} , ${dateString}`);
    }

    onAmountChange = (value) => {
                console.info(value);
        this.setState({
            amountDefault: value,
        });
    }
    componentDidMount() {
        console.log("componentDidMount"+this.props);
        this.props.fetchAmountlist();
        
    }

    render(){
        let amountDefault = this.state.amountDefault;
        let amountLists = this.props.AMOUNTLIST;
        return(
            <div>
                    <Select
                        defaultValue={amountDefault}
                        value={amountDefault}
                        onChange={this.onAmountChange}
                        style={{ width: '100%' }}
                    >
                        {amountLists.map(
                            (amount,i) => <Option key={amount}>&#8377; {amount} /-</Option>
                        )}
                    </Select><hr/>
                    <DatePicker format={dateFormat} defaultValue={moment(currDate, dateFormat)} style={{ width: '100%' }} onChange={this.onChangeDate} /> <hr/>
                    <Checkbox onChange={this.onCheckPaid}>Amount Paid</Checkbox>
                            
            </div>
        );
    }
}
// export default SubmitForm;
//  (amount,i) => i===0 ? <Option key={amount}>{amount} </Option> : <Option key={amount}>&#8377; {amount} /-</Option>
const mapStateToProps = state =>({
        AMOUNTLIST: state.AMOUNTLIST.amountitems,
        AMOUNTDEFAULT: state.AMOUNTLIST.amountdefaultitem
        
});
export default connect(mapStateToProps, { fetchAmountlist })(SubmitForm);
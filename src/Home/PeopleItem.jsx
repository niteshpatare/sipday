import React, { Component } from 'react';
import { Row, Col, Button, Select, Checkbox, DatePicker, message } from 'antd';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import SubmitForm from './SubmitForm';
import CancelPay from './CancelPay';
import moment from 'moment';
const dateFormat = 'MMMM Do YYYY';

const Option = Select.Option;
const { Meta } = Card;
class PeopleItem extends Component{
    /* select box */
    loadPayment = (prop) => { 
        return (prop.payment.payFlag=='paid'? true 
        : (prop.payment.payFlag=='unpaid'? false : null)
        ) 
    }
    state = {
        loading: this.props.loading,
        paymentFlag: null,
        checkPaid: false,
    }
    componentWillMount(){
        console.log("componentWillMount");
        this.setState({
            loading: this.props.loading,
            paymentFlag: this.loadPayment(this.props),
        });
    }
     componentWillReceiveProps(nextProps, nextState) {
         console.log("componentWillReceiveProps");
        // Typical usage (don't forget to compare props):
        if (this.state.loading !== nextState.loading) {
            this.setState({ loading: nextState.loading })
        }
        if (this.loadPayment(nextProps)) {
            this.setState({ paymentFlag: this.loadPayment })
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        // if (this.state.loading != nextState.loading) {
        //     this.setState({ loading: !this.state.loading })
        // }
        // let payFlagTemp = this.loadPayment(nextProps)
        // if (this.state.paymentFlag != payFlagTemp) {
        //     this.setState({ paymentFlag: payFlagTemp })
        // }
        return true
    }
     componentDidUpdate(prevProps) {
         console.log("componentDidUpdate");
        // Typical usage (don't forget to compare props):
        if (this.state.loading != prevProps.loading) {
            this.setState({ loading: !this.state.loading })
        }
        let payFlagTemp = this.loadPayment(prevProps)
        if (this.state.paymentFlag != payFlagTemp) {
            this.setState({ paymentFlag: payFlagTemp })
        }
    }
    onCheckPaid = (e) => {
        console.log(`checked = ${e.target.checked}`);
        this.setState({
            checkPaid: e.target.checked,
        });
    } 
    onSubmitPayForm = () => {
        console.log('onSubmitPayForm');
    }   
    render(){
        const { name, amount, payment } = this.props;
        let { loading, paymentFlag } = this.state;
        return(
            <div className="user-item">
                <Card
                    style={{ marginTop: 16 }}
                    loading={loading}
                    actions={
                            (loading)?
                                ([<Button disabled type="primary" icon="check" size="large">Submit Payment</Button>])
                            :
                            (
                                paymentFlag?
                                ([<CancelPay onSubmitPayForm={this.onSubmitPayForm}/>])
                                :
                                ([<Button type="primary" icon="check" size="large">Submit Payment</Button>])
                            )  
                        }
                        >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                        title={name}
                        description={
                            paymentFlag?                           
                                (<div>
                                    <p>&#8377; {amount} /- Paid on - {moment(payment.date).format(dateFormat)} </p>
                                </div>)
                                :
                                (
                                    <div>
                                        <SubmitForm {...this.state}/>                               
                                    </div>
                                )
                        }
                        />
                        
                    </Skeleton>
                </Card>
            </div>
        );
    }
}
export default PeopleItem;
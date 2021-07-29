import React, { Component } from 'react';
import { Row, Col, Button, Select, Checkbox, DatePicker, message } from 'antd';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import Icon from '@ant-design/icons';
import SubmitForm from './SubmitForm';
import CancelPay from './CancelPay';
import moment from 'moment';
import { connect } from 'react-redux';

const dateFormat = 'MMMM Do YYYY';

const Option = Select.Option;
const { Meta } = Card;
class PeopleItem extends Component{

    state = {
        checkPaid: false,
    }
    componentDidMount(){
        console.log("componentDidMount");
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
        let paymentFlag = this.props.payment.payFlag;
        let listloading = this.props.LISTLOADING;
        return(
            <div className="user-item">
            
                <Card
                    style={{ marginTop: 16 }}
                    loading={listloading}
                    actions={
                            (listloading)?
                                ([<Button disabled type="primary" icon="check" size="large">Submit Payment</Button>])
                            :
                            (
                                (paymentFlag==='paid')?
                                ([<CancelPay/>])
                                :
                                ([<Button type="primary" onClick={this.onSubmitPayForm} icon="check" size="large">Submit Payment</Button>])
                            )  
                        }
                        >
                    <Skeleton loading={listloading} avatar active>
                        <Meta
                        title={name}
                        description={
                            (paymentFlag==='paid')?                           
                                (<div>
                                    <p>&#8377; {amount} /- Paid on - {moment(payment.date).format(dateFormat)}</p>
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
// export default PeopleItem;
const mapStateToProps = state =>({
        LISTLOADING: state.PAYLIST.listloading,
        // PAYMENTFLAG: state.PAYLIST.paymentflag
        
});
export default connect(mapStateToProps, { })(PeopleItem);
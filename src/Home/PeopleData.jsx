import React, { Component } from 'react';
import { Row, Col, Button, Select, Checkbox, DatePicker, message } from 'antd';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import Icon from '@ant-design/icons';
import PeopleItem from './PeopleItem.jsx';
import { connect } from 'react-redux';
import { fetchPaylist } from '../Flux/Actions/payListActions';

const Option = Select.Option;
const { Meta } = Card;

class PeopleData extends Component {

    componentDidMount() {
        message.loading('Loading in progress..', 1)
        .then( this.props.fetchPaylist() )
        .then(() => message.success('Loading finished', 2.5))
    }
    // componentDidUpdate(nextProps) {
    //     console.log("componentDidUpdate");
    //     if(this.props.AMOUNTLIST !== nextProps.AMOUNTLIST){
    //         return true
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.listLoading !== nextState.listLoading) {
    //         this.setState({ listLoading: nextState.listLoading })
    //     }
    // }
    render(){
        const { filterValue, year, month } = this.props;
        const payListItems = this.props.PAYLIST
                        .filter(
                            (user) => {
                                if(filterValue=='all') { return user;  }
                                else {
                                    if (user.payment.payFlag === filterValue) {
                                        return user;
                                    } 
                                }
                            }
                        )
                        .map(
                            (user,i) => <PeopleItem key={i} {...user}/> 
                        );
        return(
            <div className="people-data-wrapper">
                { /* <Switch checked={!loading} onChange={this.onLoadData} /> */ }
                    <div className="user-block">
                    {
                        payListItems
                    }
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    PAYLIST: state.PAYLIST.paylistitems,
});
export default connect(mapStateToProps, { fetchPaylist })(PeopleData);
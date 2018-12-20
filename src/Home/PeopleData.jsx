import React, { Component } from 'react';
import { Row, Col, Button, Select, Checkbox, DatePicker, message } from 'antd';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import PeopleItem from './PeopleItem.jsx';
const Option = Select.Option;
const { Meta } = Card;

class PeopleData extends Component{
    /* select box */
    state = {
        loading: true,
        userData: [],
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.loading !== nextState.loading) {
    //         this.setState({ loading: nextState.loading })
    //     }
    // }
  componentDidMount() {
    let me = this;
    message.loading('Loading ....', 0.1);
    this.callFetchApi()
      .then(
            res => { me.setState({ userData: res.express })
            console.log(me.state.userData);
            me.onLoadData(true)
            message.success('Loading finished', 2.5);
            }
      )
      .catch(err => console.log(err))

      console.log(this.state.userData);
  }
  callFetchApi = async () => {
    const response = await fetch('/api/userdata')
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

    onLoadData = (checked) => {
        let me = this;
        me.setState({ loading: !checked });
    }



    render(){
        const { filterValue, year, month } = this.props;
        const { loading, userData } = this.state;

        return(
            <div className="people-data-wrapper">
                { /* <Switch checked={!loading} onChange={this.onLoadData} /> */ }
                    <div className="user-block">
                    {
                        userData
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
                            (user,i) => <PeopleItem key={i} loading={loading} {...user}/> 
                        )
                    }
                    </div>
            </div>
        );
    }
}
export default PeopleData;
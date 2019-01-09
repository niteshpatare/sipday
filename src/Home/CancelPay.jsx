import React, { Component } from 'react';
import { Popover, Button, Icon } from 'antd';

class CancelPay extends Component{
    state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
    onCancelPayForm = () => {
        console.log('onCancelPayForm');
        this.hide();
    }  
    render(){
        const { onCancelPayForm } =this.props;
        return(
            
            <Popover
            content={<div>  
                You want to cancel payment. 
                    <div>
                        <br/>            
                        <Button type="default" onClick={this.onCancelPayForm }>
                            <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
                            Yes
                        </Button>&nbsp;&nbsp;
                        <Button type="default" onClick={this.hide}>
                            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                            No
                        </Button>
                    </div>
                </div>}
            title={<div>Are you sure?</div>}
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            >
                <Button type="primary" icon="close" size="large">Cancel Payment</Button>
            </Popover>
        );
    }
}
export default CancelPay;
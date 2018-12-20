import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';

class AmountCardList extends Component{
state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };



    render(){
        return(
            <div className="amount_cards">   
                <p>{this.state.response}</p>
                  <form onSubmit={this.handleSubmit}>
                    <p>
                      <strong>Post to Server:</strong>
                    </p>
                    <input
                      type="text"
                      value={this.state.post}
                      onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                  </form>
                <p>{this.state.responseToPost}</p>  
          
              <Row gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
                  <Card
                    title="Card title"
                    extra={<a href="/">More</a>}
                  >
                    <p>Total Pending amount for current month:- </p>
                    <p>100000 /-Rs</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
                  <Card
                    title="Card title"
                    extra={<a href="/">More</a>}
                  >
                    <p>Actual amount received for current month:- </p>
                    <p>100000 /-Rs</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
                  <Card
                    title="Card title"
                    extra={<a href="/">More</a>}
                  >
                    <p>Total Requested amount for current month:- </p>
                    <p>100000 /-Rs</p>
                  </Card>
                </Col>
              </Row>
            </div>

        );
    }
}

export default AmountCardList;
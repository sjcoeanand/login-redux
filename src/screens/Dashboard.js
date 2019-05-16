import React from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Col, Card, Button } from 'reactstrap';
import { info } from '../constant';
import { setUserInfo } from '../actions/user';
import { isEmpty } from 'lodash';

class Dashboard extends React.Component {
  
  componentDidMount() {
    const { history } = this.props;
    const userdetails = localStorage.getItem('userLoggedIn');
    console.log("asasasasa", userdetails);
    !userdetails && history.push('/');
    this.props.setUserInfo(info);
  }

  logoutHandler = () => {
    localStorage.removeItem('userLoggedIn');
    const { history } = this.props;
    history.push('/');
  }

  render() {    
    console.log('Dashboard page', this.props.userInfo);   
    const { userInfo } = this.props;
    return (!isEmpty(userInfo) && 
      <Row className="Dashboard m-3">
        <Col sm={12}>
          <Button color="danger" className="float-right" onClick={this.logoutHandler}>Logout</Button>
        </Col>
        {userInfo.map((item, index) =>
          <Col md={3} sm={12} key={index}>
            <h3>User Info-{index}</h3>
            <Card className="p-3 mb-3">
              <Alert color="primary">{item.name}</Alert>
              <Alert color="secondary">{item.age}</Alert>
              <Alert color="success">{item.gender}</Alert>
              <Alert color="danger">{item.email}</Alert>
            </Card>
            
          </Col>   
        )}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { userInfo } = state;
  return {
    userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (info) => dispatch(setUserInfo(info)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

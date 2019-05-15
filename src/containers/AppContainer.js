import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';

class AppContainer extends Component {
  render() {
    console.log('container page');  
    return (
      <div>
        <div className="app-container">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} pageName="Dashboard" />
            <Route exact path="/" component={Login} pageName="Login" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppContainer;
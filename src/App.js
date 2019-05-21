import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      // <Provider store={createStoreWithMiddleware(reducers)}>
      <Provider store={reducers}>
        <BrowserRouter>   
          <Route path="/" component={AppContainer} />
        </BrowserRouter>
      </Provider>      
    );
  }
}

export default App;
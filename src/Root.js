import React, { Component } from 'react';
import {
  BrowserRouter as Router,   
  Route
} from 'react-router-dom';
// import Login from './components/Login';
import App from './components/App';

class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Root;
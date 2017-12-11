import React, { Component } from 'react';
import {
  BrowserRouter as Router,   
  Route
} from 'react-router-dom';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';

class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Dashboard} />
      </Router>
    );
  }
}

export default Root;
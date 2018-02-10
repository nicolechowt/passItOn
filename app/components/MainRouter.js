import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Main from "./Main";

import Login from "./Login";
import Signup from "./SignUp";
import Request from "./Request";


export default class MainRouter extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact={true} path="/" component={Main} />
      		<Route exact={true} path="/login" component={Login} />
      		<Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/request" component={Request} />
      	</Switch>
      </Router>
    );
  }
}
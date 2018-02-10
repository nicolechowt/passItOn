import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import Request from "./Request";

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
      	<Switch>
      		<Route exact={true} path="/" component={Request} />
          <Route exact path="/request" component={Main} />
      	</Switch>
      </Router>
    );
  }
}
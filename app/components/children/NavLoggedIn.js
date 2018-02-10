import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/Auth";

require('./nav.css');

export default class NavLoggedIn extends Component { 
  render() {
    return (
      <div>
      <nav className="navbar transparent navbar-inverse navbar-fixed-top sticky-top navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"><span className="fa fa-user"></span> Profile     <span className ="sr-only">(current)</span></a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#"><span className="fa fa-sign-out"></span> Sign out </a>
              </li>
            </ul>
        </div>

      </nav>

      </div>
    );
  }
}
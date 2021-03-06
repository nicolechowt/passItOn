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
                <Link to={"/request"} ><div className="page-scroll nav-left-text nav-link" href="/request"><span className="fa fa-send-o"></span> Submit your Story  </div></Link>
              </li>
              <li>
                <Link to={"/"} ><div className="page-scroll nav-left-text nav-link" href="/"><span className="fa fa-sign-out"></span>   Sign out </div></Link>
              </li>
              
            </ul>
        </div>

      </nav>

      </div>
    );
  }
}
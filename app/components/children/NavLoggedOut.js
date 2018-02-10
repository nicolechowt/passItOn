import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/Auth";
import Login from "../Login";


require('./nav.css');


export default class NavLoggedOut extends Component { 
  render() {
    return (

      <div>

      <nav className="navbar transparent navbar-inverse navbar-fixed-top sticky-top navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={"/login"} ><div className="page-scroll nav-left-text" href="/login" data-toggle="modal"><span className="fa fa-sign-in"></span> Log in / Sign up</div></Link>
              </li>
            </ul>
        </div>

      </nav>
    </div>
    );
  }
}
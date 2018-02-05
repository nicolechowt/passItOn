import React, { Component } from 'react';
import Nav from './children/Nav';

require('./main.css');

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />    
      </div>
    );
  }
}

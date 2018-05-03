import React, { Component } from 'react';

import Jumbotron from './Components/Jumbotron';
import Contact from './Components/Contact'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div id='App'>
          <Contact/>
          <Jumbotron/>
      </div>
    );
  }
}

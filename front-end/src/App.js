import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Jumbotron extends Component {
  render() {
    return (
      <div id='Jumbotron'>
          <div className='project'>
              <img src='test.png'/>
          </div>

          <div className='project'>
              <img src='test.png'/>
          </div>

          <div className='project'>
              <img src='test.png'/>
          </div>
      </div>
    );
  }
}

export default Jumbotron;

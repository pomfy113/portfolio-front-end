import React, { Component } from 'react';
import './Jumbotron.css';

export default class Jumbotron extends Component {
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

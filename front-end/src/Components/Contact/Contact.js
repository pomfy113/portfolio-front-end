import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact">
          <h1>Ferdinand Cruz</h1>
          <h2>Full-Stack Web Developer</h2>
          <div id='contact-container'>
              <div id='contact-text'>
                  <p>San Francisco, CA</p>
                  <p>(925) 395-6845</p>
              </div>
              <div id='contact-links'>
                <a href='https://github.com/pomfy113' target='_about'>
                    <img src='contact/github.png'/>
                </a>
                <a href='https://www.linkedin.com/in/ferdinand-cruz113/' target='_about'>
                    <img src='contact/LinkedIn.png'/>
                </a>
                <a href='mailto:cruz.ferdin@gmail.com'>
                    <img src='contact/mail.png'/>
                </a>
              </div>
          </div>
      </div>
    );
  }
}

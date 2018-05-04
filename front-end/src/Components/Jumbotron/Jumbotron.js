import React, { Component } from 'react';
import './Jumbotron.css';

export default class Jumbotron extends Component {

  constructor(props){
      super(props);
      this.state = {
          rotate: 0,
      }

      this.ref = React.createRef();
  }
  leftRotate(){
      const newRot = this.state.rotate - 72;
      // const index = Math.abs(this.state.index - 1) % 3;
      this.ref.current.style.setProperty('--rotate', `${newRot}deg`)

      this.setState({ rotate: newRot })
  }

  render() {
    return (
      <div id='Jumbotron' ref={this.ref} onClick={() => this.leftRotate()}>
          <div className='project'>
              <h1>1</h1>
          </div>

          <div className='project'>
              <h1>2</h1>
          </div>

          <div className='project'>
              <h1>3</h1>
          </div>

          <div className='project'>
              <h1>4</h1>
          </div>

          <div className='project'>
              <h1>5</h1>
          </div>
      </div>
    );
  }
}

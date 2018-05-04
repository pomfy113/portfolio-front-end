import React, { Component } from 'react';
import './Jumbotron.css';

export default class Jumbotron extends Component {

  constructor(props){
      super(props);
      this.state = {
          rotate: 0,
          index: [0, 1, 2, 1, 0]
      }

      this.ref = React.createRef();
  }
  leftRotate(){
      const newRot = this.state.rotate - 72;

      const indexCopy = this.state.index.slice()
      const newTail = indexCopy.pop()
      indexCopy.unshift(newTail)

      for(let i in indexCopy){
          this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i])
      }

      this.ref.current.style.setProperty('--rotate', `${newRot}deg`)

      this.setState({ rotate: newRot, index: indexCopy})
  }

  rightRotate(){
      const newRot = this.state.rotate + 72;

      const indexCopy = this.state.index.slice()
      const newTail = indexCopy.shift()
      indexCopy.push(newTail)

      for(let i in indexCopy){
          this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i])
      }

      this.ref.current.style.setProperty('--rotate', `${newRot}deg`)
      this.setState({ rotate: newRot, index: indexCopy})
  }

  render() {
    return (
      <div id='Jumbotron' ref={this.ref}>
          <div id='buttons'>
              <button onClick={() => this.leftRotate()}>TEST1</button>
              <button onClick={() => this.rightRotate()}>TEST2</button>

          </div>
          <div id='projects'>
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
      </div>
    );
  }
}

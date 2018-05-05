import React, { Component } from 'react';
import './Jumbotron.css';

import Project from './Project'

export default class Jumbotron extends Component {

  constructor(props){
      super(props);
      this.state = {
          rotate: 0,
          index: [0, 1, 2, 1, 0],
          active: 0
      }

      this.ref = React.createRef();
  }
  leftRotate(){
      // Shift all numbers in the index
      const newRot = this.state.rotate - 72;
      const newActive = this.state.active + 1


      const indexCopy = this.state.index.slice()
      const newTail = indexCopy.pop()
      indexCopy.unshift(newTail)

      for(let i in indexCopy){
          this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i])
      }

      this.ref.current.style.setProperty('--rotate', `${newRot}deg`)

      this.setState({
          rotate: newRot,
          index: indexCopy,
          active: (newActive % 5 + 5) % 5
      })
  }

  rightRotate(){
      const newRot = this.state.rotate + 72;
      const newActive = this.state.active - 1

      const indexCopy = this.state.index.slice()
      const newTail = indexCopy.shift()
      indexCopy.push(newTail)

      for(let i in indexCopy){
          this.ref.current.style.setProperty(`--z-${(i)}`, indexCopy[i])
      }

      this.ref.current.style.setProperty('--rotate', `${newRot}deg`)
      this.setState({
          rotate: newRot,
          index: indexCopy,
          active: (newActive % 5 + 5) % 5
      })
  }

  render() {
    const projects = this.state.index.map((num, index) => {
        return <Project
            active={index === this.state.active}
            index={index}
            rotLeft={() => this.rightRotate()}
            rotRight={() => this.leftRotate()}
        />
    })

    return (
      <div id='Jumbotron' ref={this.ref}>
          <div id='projects'>
              {projects}
        </div>
      </div>
    );
  }
}

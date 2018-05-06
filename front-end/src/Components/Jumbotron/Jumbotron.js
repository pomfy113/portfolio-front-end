import React, { Component } from 'react';
import './Jumbotron.css';

import Project from './Project'
import { About, Tools } from './Misc'

export default class Jumbotron extends Component {

  constructor(props){
      super(props);
      this.state = {
          rotate: 0,
          index: [0, 1, 2, 1, 0],
          active: 0
      }

      this.ref = React.createRef();
      this.colors = ['#3550A6', '#DFDF8A', '#C09AAF', '#709F4F', '#FF9B92'];
  }

  leftRotate(){
      // Shift all numbers in the index
      const newRot = this.state.rotate - 72;
      const newActive = this.state.active + 1
      const adjustedActive = (newActive % 5 + 5) % 5

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
          active: adjustedActive
      })
      this.setBodyColor(adjustedActive);
  }

  rightRotate(){
      const newRot = this.state.rotate + 72;
      const newActive = this.state.active - 1
      const adjustedActive = (newActive % 5 + 5) % 5

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
          active: adjustedActive
      })
      this.setBodyColor(adjustedActive);
  }

  setBodyColor(active){
      document.body.style.backgroundColor = this.colors[active];
  }

  render() {
    let projects = []
    for(let i = 0; i < 3; i++){
        projects.push(<Project
                active={i === this.state.active}
                index={i}
                rotLeft={() => this.rightRotate()}
                rotRight={() => this.leftRotate()}
            />
        )
    }

    return (
      <div id='Jumbotron' ref={this.ref}>
          <div id='container'>
              {/* Recall: first 3 are projects */}
              {projects}
              <About
                  active={3 === this.state.active}
                  rotLeft={() => this.rightRotate()}
                  rotRight={() => this.leftRotate()}
              />
              <Tools
                  active={4 === this.state.active}
                  rotLeft={() => this.rightRotate()}
                  rotRight={() => this.leftRotate()}
              />

          </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.projectData = data[this.props.index]

  }

  render() {
      let title, subtitle;
      if(this.projectData){
          title = this.projectData.title;
          subtitle = this.projectData.subtitle;
      }

      return(
          <div className={`project ${this.props.active ? 'active' : 'inactive'}`}>
              <button className="left-rot rotate" onClick={() => this.props.rotLeft()}/>
              <button className="right-rot rotate" onClick={() => this.props.rotRight()}/>

              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
          </div>
      )
  }

}

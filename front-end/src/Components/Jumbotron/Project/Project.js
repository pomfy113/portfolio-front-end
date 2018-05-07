import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.projectData = data[this.props.index]

  }

  render() {
      let title, subtitle, tools;
      if(this.projectData){
          title = this.projectData.title;
          subtitle = this.projectData.subtitle;
          tools = this.projectData.tools
      }

      return(
          <div className={`tab project ${this.props.active ? 'active' : 'inactive'}`}>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
              <p>Tools:<br/>{tools}</p>
          </div>
      )
  }

}

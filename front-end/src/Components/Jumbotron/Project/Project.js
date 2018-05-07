import React, { Component } from 'react';
import data from './text.js'
import './Project.css'
export default class Project extends Component {
  constructor(props){
      super(props);
      this.projectData = data[this.props.index]

  }

  render() {
      let title, subtitle, tools, site, repo;
      if(this.projectData){
          title = this.projectData.title;
          subtitle = this.projectData.subtitle;
          tools = this.projectData.tools;
          site = this.projectData.liveSite;
          repo = this.projectData.repo;
      }

      return(
          <div className={`tab project ${this.props.active ? 'active' : 'inactive'}`}>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <img alt='Project screenshot' src={`projects/project-${this.props.index}/image.png`}/>
              <div className='url-links'>
                  <a href={site} target='_about'><button>Site</button></a>
                  <a href={repo} target='_about'><button>Repo</button></a>
              </div>

              <p>Tools:<br/>{tools}</p>
          </div>
      )
  }

}

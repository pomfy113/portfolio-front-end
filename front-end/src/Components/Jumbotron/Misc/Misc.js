import React, { Component } from 'react';
import './Misc.css'

export class About extends Component {
  render() {
      return(
          <div className={`tab about ${this.props.active ? 'active' : 'inactive'}`}>
              <h1>About</h1>
              <p>Hello, my name is Ferdinand Cruz! I'm a full-stack web developer,
                  and my strengths lie in front-end web development and scripting.
                  I'm motivated by making hobbies more convenient for others!
              </p>
              <p>I graduated from UC Davis with a B.A. in Psychology. After graduation,
                  I pursued the Full-Stack Web Development program at Make School, a Y.C.
                  backed college alternative for those who wish to enter the software
                  engineering field by shipping live products alongside traditional
                  lectures.</p>
              <p>I hope to work somewhere with challenging problems, a fun
                  atmosphere, and a product that many can use. I'm capable of
                  learning rather quickly and wearing many hats!
              </p>
              <p><u>Hobbies</u>: Video Games (MMORPGs, strategy RPGs, fighting),
                  Tabletop Roleplaying Games, Writing, Anime, Martial Arts
              </p>
          </div>
      )
  }

}

export class Tools extends Component {
  render() {
      return(
          <div className={`tab tools ${this.props.active ? 'active' : 'inactive'}`}>
              <h1>Tools</h1>
              <table>
                  <tbody>
                  <tr>
                      <th>Category</th>
                      <th>Tools</th>
                  </tr>
                  <tr>
                      <td>Specialties</td>
                      <td>Python, React, CSS3, debugging</td>
                  </tr>
                  <tr>
                      <td>Web Tech</td>
                      <td>Node.js, Express, REST, MVC/MVVC, UX Design & Testing,
                      Authentication (JWT, Bcrypt), Flask, AJAX</td>
                  </tr>
                  <tr>
                      <td>Languages</td>
                      <td>Javascript (JSX, ES6), CSS3, Python, HTML, Sass, C, C++, R</td>
                  </tr>
                  <tr>
                      <td>Databases</td>
                      <td>MongoDB, SQL (Postgres + Sequelize), GraphQL (basic)</td>
                  </tr>
                  <tr>
                      <td>Libraries</td>
                      <td>React, Redux, React Native, jQuery, Bootstrap</td>
                  </tr>
                  <tr>
                      <td>Tools</td>
                      <td>Git, Github, bash, GIMP, Maya, Heroku, Trello, Slack,
                          iMovie, AWS</td>
                  </tr>
                  <tr>
                      <td>Comp Sci & Misc</td>
                      <td>Object Oriented Programming, Data Structures, 3D Modeling & Animation,
                          Assembly Language</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      )
  }

}

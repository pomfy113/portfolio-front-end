import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jumbotron from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Jumbotron />, document.getElementById('root'));
registerServiceWorker();

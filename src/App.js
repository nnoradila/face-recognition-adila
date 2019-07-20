/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
//import { createBrowserHistory } from "history";
//export default createBrowserHistory(); 
import './App.css';

import Home from './views/Home';
import ImageInput from './views/ImageInput';
import VideoInput from './views/VideoInput';

import { createBrowserHistory as createHistory } from 'history'
const history: History = createHistory()
//const history = createHistory.createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={ImageInput} />
            <Route exact path="/camera" component={VideoInput} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom/';
import HomePage from '../HomePage/HomePage';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree'
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
        <Route path="/page-three">
          <PageThree />
        </Route>
        <Route path="/page-four">
          <PageFour />
        </Route>
        <Route path="/page-five">
          <PageFive />
        </Route>
      </Router>
    </div>
  );
}

export default App;

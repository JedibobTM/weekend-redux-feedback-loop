import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/';
import Feeling from '../Feeling/Feeling';
import PageTwo from '../Understanding/Understanding';
import PageThree from '../Supporting/Supporting'
import PageFour from '../Comments/Comments';
import PageFive from '../Review/Review';
import ThanksPage from '../ThanksPage/ThanksPage';
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
          <Feeling />
        </Route>
        <Route path="/understanding">
          <PageTwo />
        </Route>
        <Route path="/supporting">
          <PageThree />
        </Route>
        <Route path="/comments">
          <PageFour />
        </Route>
        <Route path="/review">
          <PageFive />
        </Route>
        <Route path="/thanks-page">
          <ThanksPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;

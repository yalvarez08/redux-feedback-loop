import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";


import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';

import './App.css';

function App() {
  
  const dispatch = useDispatch();

  const fetchAllFeedback = () => {
    axios.get('/api/feedback')
    .then(response => {
        console.log('getting feedback was successful', response);
        dispatch({type: 'SET_FEEDBACK', payload: response.data});
    })
    .catch(err => {
        console.log('Error getting feedback:', err);
    })
}

  useEffect(() => {
    fetchAllFeedback();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <Feeling />
        </Route>
        <Route path='/understanding'>
          <Understanding />
        </Route>
        <Route path='/support'>
          <Support />
        </Route>
        <Route path='/comments'>
          <Comments />
        </Route>
        <Route path='/review'>
          <Review fetchAllFeedback={fetchAllFeedback}/>
        </Route>
        <Route path='/thank-you'>
          <SubmissionSuccess />
        </Route>
      
      </Router>
    </div>
  );
}

export default App;

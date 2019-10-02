  
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordVideoPage from './components/recordUserVideo';
import ReviewVideoPage from './components/reviewUserVideo/reviewUserVideo-view';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contracts" component={UserContracts} />
      <Route exact location={this.props.location} path='/record' component={RecordVideoPage}/>
      <Route path="/login" exact component={LoginPage} />
      <Route exact location={this.props.location} path='/review' component={ReviewVideoPage} />
    </BrowserRouter>
  );
}

  
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordPage from './components/RecordPage';
import ReviewVideoPage from './components/reviewUserVideo/';
import React, { Component } from 'react'

export class routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={LandingPage} />
          <Route path="/contracts" component={ContractsPage} />
          <Route exact location={this.props.location} path='/record' component={RecordPage}/>
          <Route path="/login" exact component={LoginPage} />
          <Route exact location={this.props.location} path='/review' component={ReviewVideoPage} />
        </BrowserRouter>
      </div>
    )
  }
}

export default routes

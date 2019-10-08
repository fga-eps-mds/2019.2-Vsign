import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import UserContracts from './components/UserContracts/ContractsPage';
import SigningTips from './components/SigningTips/SigningTips';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordVideoPage from './components/recordUserVideo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contracts" component={UserContracts} />
      <Route path='/tips' component={SigningTips} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/contracts" component={ContractsPage} />
      <Route path="/record" component={RecordVideoPage} />
    </BrowserRouter>
  );
}

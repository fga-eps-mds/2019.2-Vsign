import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import UserContracts from './components/UserContracts/ContractsPage';
import SigningTips from './components/SigningTips/SigningTips';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contracts" component={UserContracts} />
      <Route path='/tips' component={SigningTips} />
    </BrowserRouter>
  );
}

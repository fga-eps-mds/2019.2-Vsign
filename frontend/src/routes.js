import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import UserContracts from './components/UserContracts/ContractsPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contracts" component={UserContracts} />
    </BrowserRouter>
  );
}

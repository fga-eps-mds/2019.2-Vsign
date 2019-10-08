import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordVideoPage from './components/recordUserVideo';
import ScriptPage from './components/ScriptPage/Script.js';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/contracts" component={ContractsPage} />
      <Route path="/record" component={RecordVideoPage} />
      <Route path="/script" component={ScriptPage} />
    </BrowserRouter>
  );
}

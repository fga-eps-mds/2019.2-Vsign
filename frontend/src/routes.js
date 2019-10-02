import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import UserContracts from './components/UserContracts/ContractsPage';
import Uploadimage from './components/UploadImage/UploadImage';
import recordUserVideo from './components/recordUserVideo/recordUserVideo-view.js'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/contracts" component={UserContracts} />
      <Route path='/upload' component={Uploadimage} />
      <Route path='/record' component={recordUserVideo}/>
    </BrowserRouter>
  );
}

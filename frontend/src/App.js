import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import LandingPage from "./components/LandingPage";
import header from "./components/header";
import footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/welcome" component={header} />
      </div>
    </Router>
  );
}

export default App;
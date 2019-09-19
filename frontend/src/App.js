import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserContracts from './components/UserContracts/ContractsPage';


function App() {
  return (
    <div className="App">
        {/* Import and route your components just like the model */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />  */}
        <UserContracts />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScriptPage from './components/ScriptPage';
import Teste from './components/teste';

function App() {
  return (
    <Router>
        {/* Import and route your components just like the model */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />  */}
        <Route exact path="/scriptpage" component={ScriptPage}/>
        <Route exact path="/teste" component={Teste}/>
    </Router>
    
  );
}

export default App;

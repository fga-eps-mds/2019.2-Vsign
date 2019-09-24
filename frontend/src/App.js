import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'

function App() {
  return (
    
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
        {/* Import and route your components just like the model */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />  */}
    </div>
  );
}

export default App;

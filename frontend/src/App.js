import React from 'react';
<<<<<<< HEAD
import Routes from './routes';
import GlobalStyle from './styles';

const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Routes />
    </React.Fragment>
);

=======
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Script from './components/Script';

function App() {
  return (
    <Router>
        {/* Import and route your components just like the model */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />  */}
        <Route exact path="/scriptpage" component={Script}/>
    </Router>
  );
}
>>>>>>> 2944ef85f093c8ebb0421c3af509568f7ba00439
export default App;
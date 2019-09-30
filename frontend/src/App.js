import React, { Component } from 'react';
import recordUserVideo from './components/recordUserVideo/recordUserVideo-view.js'
import { BrowserRouter, Route } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Route exact location={this.props.location} path='/record' component={recordUserVideo}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

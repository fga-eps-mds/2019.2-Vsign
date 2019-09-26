import React, { Component } from 'react';
import recordUserVideo from './components/recordUserVideo/recordUserVideo-view.js'
import reviewUserVideo from './components/reviewUserVideo/reviewUserVideo-view.js'
import { BrowserRouter, Route } from 'react-router-dom';
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
          <Route exact location={this.props.location} path='/review' component={reviewUserVideo}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

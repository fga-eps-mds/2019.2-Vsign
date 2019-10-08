
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/index';
import Uploadimage from './components/UploadImage/UploadImage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordPage from './components/RecordPage';
import ReviewVideoPage from './components/reviewUserVideo/';
import React, { Component } from 'react';
import Introduction from './components/Instructions/Introduction';

export class routes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/contracts" component={ContractsPage} />
                    <Route exact location={this.props.location} path='/record' component={RecordPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route exact location={this.props.location} path='/review' component={ReviewVideoPage} />
                    <Route path='/introduction' component={Introduction} />
                    <Route path='/upload_document' component={Uploadimage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default routes

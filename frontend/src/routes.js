
import { Route, Switch, withRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index';
import Uploadimage from './components/UploadImage/UploadImage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordPage from './components/RecordPage';
import ReviewVideoPage from './components/ReviewPage';
import ScriptPage from './components/ScriptPage/Script.js'
import React, { Component } from 'react';
import Introduction from './components/Instructions/Introduction';

export class routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/contracts" component={ContractsPage} />
                    <Route path='/record' location={this.props.location} component={RecordPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path='/review' location={this.props.location} component={ReviewVideoPage} />
                    <Route path='/introduction/:id' location={this.props.location} component={Introduction} />
                    <Route path='/upload_document' location={this.props.location} component={Uploadimage} />
                    <Route path="/script" component={ScriptPage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default routes

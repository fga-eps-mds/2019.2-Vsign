
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/index';
import Uploadimage from './components/UploadImage/UploadImage';
import LoginPage from './components/LoginPage';
import ContractsPage from './components/ContractsPage';
import RecordPage from './components/RecordPage';
import ReviewVideoPage from './components/ReviewPage';
import ScriptPage from './components/ScriptPage/Script.js'
import React, { Component } from 'react';
import Introduction from './components/Instructions/Introduction';
import PrivateRoute from './privateRouter';

export class routes extends Component {
    render() {
        console.log("location", this.props.location);
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={LandingPage} />
                    <PrivateRoute path="/contracts" component={ContractsPage} location={this.props.location} />
                    <PrivateRoute path='/record' location={this.props.location} component={RecordPage} />
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path='/review' location={this.props.location} component={ReviewVideoPage} />
                    <PrivateRoute path='/introduction/:id' location={this.props.location} component={Introduction} />
                    <PrivateRoute path='/upload_document' location={this.props.location} component={Uploadimage} />
                    <PrivateRoute path="/script" component={ScriptPage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default routes

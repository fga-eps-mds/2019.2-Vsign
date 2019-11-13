
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../LandingPage';
import Uploadimage from '../DocumentPage';
import LoginPage from '../LoginPage';
import LoginTokenPage from '../LoginTokenPage';
import ContractsPage from '../ContractsPage';
import RecordPage from '../RecordPage';
import ReviewVideoPage from '../ReviewPage';
import ScriptPage from '../ScriptPage';
import Introduction from '../InstructionsPage';
import PrivateRoute from './PrivateRoute';
import {
    LANDING_URL,
    LOGIN_URL, RECORD_URL,
    LOGIN_TOKEN_URL, CONTRACTS_URL,
    DOCUMENT_URL, REVIEW_URL,
    INSTRUCTIONS_URL, SCRIPT_URL
} from '../../constants/routes';

export default function Routes() {
    return (
        <Switch>
            <Route path={LANDING_URL} exact component={LandingPage} />
            <Route path={LOGIN_TOKEN_URL} component={LoginTokenPage} />
            <Route path={LOGIN_URL} component={LoginPage} />
            <PrivateRoute path={CONTRACTS_URL} component={ContractsPage} />
            <PrivateRoute path={INSTRUCTIONS_URL} component={Introduction} />
            <PrivateRoute path={RECORD_URL} component={RecordPage} />
            <PrivateRoute path={REVIEW_URL} component={ReviewVideoPage} />
            <PrivateRoute path={DOCUMENT_URL} component={Uploadimage} />
            <PrivateRoute path={SCRIPT_URL} component={ScriptPage} />
        </Switch>
    );
}
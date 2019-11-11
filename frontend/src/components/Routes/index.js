
import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "../LandingPage/index";
import Uploadimage from "../UploadImage/UploadImage";
import LoginPage from "../LoginPage";
import LoginTokenPage from "../LoginPage";
import ContractsPage from "../ContractsPage";
import RecordPage from "../RecordPage";
import ReviewVideoPage from "../ReviewPage";
import ScriptPage from "../ScriptPage/Script.js"
import Introduction from "../Instructions/Introduction";
import PrivateRoute from "./PrivateRoute";
import {
    LANDING_URL,
    LOGIN_URL, RECORD_URL,
    LOGIN_TOKEN_URL, CONTRACTS_URL,
    DOCUMENT_URL, REVIEW_URL,
    INTRODUCTION_URL, SCRIPT_URL
} from "../../constants/routes";

export default function Routes() {
    return (
        <Switch>
            <Route path={LANDING_URL} exact component={LandingPage} />
            <Route path={LOGIN_URL} component={LoginPage} />
            <Route path={LOGIN_TOKEN_URL} component={LoginTokenPage} />
            <PrivateRoute path={CONTRACTS_URL} component={ContractsPage} />
            <PrivateRoute path={INTRODUCTION_URL} component={Introduction} />
            <PrivateRoute path={RECORD_URL} component={RecordPage} />
            <PrivateRoute path={REVIEW_URL} component={ReviewVideoPage} />
            <PrivateRoute path={DOCUMENT_URL} component={Uploadimage} />
            <PrivateRoute path={SCRIPT_URL} component={ScriptPage} />
        </Switch>
    );
}
import React, { Component, Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import SigningSteps from '../Shared/SigningSteps';

export default class ReceivedPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <SigningSteps />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            Seu contrato foi recebido.
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

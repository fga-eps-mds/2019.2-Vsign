import React, { Component, Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import SigningSteps from '../Shared/SigningSteps';
import CompletedIcon from '../../assets/images/completed_signature.png';

export default class ReceivedPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <SigningSteps />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <img src={CompletedIcon} width="50%" />
                            <h1 className="display-4">Sua assinatura foi recebida</h1>
                            <p className="lead">Dentro de alguns minutos você irá receber o resultado por email.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL } from '../../constants/routes';

export default function ControlButtons() {
    return (
        <Fragment>
            <Link to={DOCUMENT_URL}>
                <button className="btn btn-lg btn-primary float-right">Continuar</button>
            </Link>
            <button
                className="btn btn-lg btn-outline-danger float-right mr-2"
                data-toggle="modal"
                data-target="#report-error-modal"
            >Reportar Erro</button>
        </Fragment>
    );
}

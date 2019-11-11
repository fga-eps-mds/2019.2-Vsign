import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL } from '../../constants/routes';

export default function ControlButtons() {
    return (
        <Fragment>
            <Link to={DOCUMENT_URL}>
                <button className="btn btn-primary pull-right">Continuar</button>
            </Link>
            <Link to="#">
                <button className="btn btn-outline-danger pull-right mr-2">Reportar Erro</button>
            </Link>
        </Fragment>
    );
}

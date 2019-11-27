import React from 'react';
import { CONTRACTS_URL } from '../../constants/routes';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info py-4">
                <div className="container">
                <div class="d-flex flex-grow-1">
                    <a className="navbar-brand" href="#">Vsign</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07">
                        <span className="navbar-toggler-icon" />
                    </button>
                    </div>
                    <div className="collapse navbar-collapse flex-grow-1 text-right">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={CONTRACTS_URL}>Meus Contratos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Kairon</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown07">
                                    <a className="dropdown-item" href="#">Conta</a>
                                    <a className="dropdown-item" href="#">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
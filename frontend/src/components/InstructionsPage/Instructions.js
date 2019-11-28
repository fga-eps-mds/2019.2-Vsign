import React from 'react';
import { Link } from 'react-router-dom';
import { SCRIPT_URL } from '../../constants/routes';
import CompletedIcon from '../../assets/images/completed_signature.png';

export default function Instructions() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4 font-weight-normal">Guia de como assinar um contrato</h1>
                </div>
            </div>
            <div className="row my-5 py-5">
                <div className="col-4 text-right">
                    <h2 className="display-5">1 - Revisão Contrato</h2>
                    <p className="lead">Verifique se o número do contrato está correto, em seguida, leia a prévia do roteiro e certifique-se que está tudo correto.</p>
                </div>
                <div className="col-8 text-center">
                    <img src={CompletedIcon} width="60%" alt="Passo 1" />
                </div>
            </div>
            <div className="row my-5 py-5">
                <div className="col-6 text-center">
                    <img src={CompletedIcon} width="80%" alt="Passo 2" />
                </div>
                <div className="col-4">
                    <h2 className="display-5">2 - Documento</h2>
                    <p className="lead">Envie seu documento de identificação. Pode ser CNH ou o RG, a depender do contrato a ser assinado.</p>
                </div>
            </div>
            <div className="row my-5 py-5">
                <div className="col-4 text-right pt-3">
                    <h2 className="display-5">3 - Assinatura</h2>
                    <p className="lead">Grave a sua assinatura, fazendo a leitura das legendas que aparecerão em sua tela.</p>
                </div>
                <div className="col-8 text-center">
                    <img src={CompletedIcon} width="60%" alt="Passo 3" />
                </div>
            </div>
            <div className="row mt-5 py-5">
                <div className="col-6 text-center">
                    <img src={CompletedIcon} width="80%" alt="Passo 4" />
                </div>
                <div className="col-4">
                    <h2 className="display-5">Passo 4</h2>
                    <p className="lead">Revise o seu vídeo, caso esteja tudo bem, aceite os termos e envie a análise.</p>
                </div>
            </div>

            <Link to={SCRIPT_URL}>
                <button className="btn btn-primary btn-lg float-right my-5">Continuar</button>
            </Link>
        </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { SCRIPT_URL } from '../../constants/routes';

export default function Instructions() {
    return (
        <div className="container">
            <h1>Guia de como assinar um contrato</h1>

            <div>
            <h2>Passo 1:</h2>
            <p>Verifique se o número do contrato está correto, em seguida, leia a prévia do roteiro e certifique-se que está tudo correto.</p>

            <h2>Passo 2:</h2>
            <p>Clique em 'Gravar' e aguarde o vídeo começar. Quando o vídeo começar, uma legenda sob o vídeo irá aparecer, você irá ler essa legenda.</p>

            <h2>Passo 3:</h2>
            <p>Revise o seu vídeo, caso esteja tudo bem, aceite os termos e envie a proposta.</p>
            </div>

            <Link to={SCRIPT_URL}>
                <button className="btn btn-primary">Continuar</button>
            </Link>
        </div>
    );
}